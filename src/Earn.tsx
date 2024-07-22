import React, { FunctionComponent, useRef, useState, useEffect } from 'react';
import styles from './scss/Earn.module.scss';
import NavigationBar from './Navigation';

import frame122 from './img/Frame 122.png';
import actionSheedImage from './img/ActionSheed image.png';
import iconSvg from './img/Icon.svg'; 

const API_URL = 'https://f46c-89-107-97-177.ngrok-free.app';

interface User {
  id: number;
  level: number;
  league: string;
  balance: number;
  income: number;
  avatar: string;
  name: string;
  energy: number;
  followers: number;
}


interface Reward {
  day: number;
  amount: number;
  claimed: boolean; 
}

interface EarnProps {
  userData: User | null;
  token: string | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const Earn: FunctionComponent<EarnProps> = ({ userData, token, setUserData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [dailyRewards, setDailyRewards] = useState<Reward[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDailyRewards = async () => {
      try {
        if (userData && token) {
          const response = await fetch(`<span class="math-inline">\{API\_URL\}/user/daily\_rewards?user\_id\=</span>{userData.id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setDailyRewards(data.rewards); 
        }
      } catch (error) {
        console.error('Error fetching daily rewards:', error);
        setError('Ошибка при загрузке ежедневных наград'); 
      }
    };
    fetchDailyRewards();
  }, [userData, token]); 

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    event.preventDefault();
    if (!scrollRef.current) return;

    const currentX = event.touches[0].clientX;

    requestAnimationFrame(() => {
      const diffX = startX - currentX;
      const scrollAmount = diffX * 0.5;
      scrollRef.current!.scrollLeft += scrollAmount;
    });
  };

  const handleClaimReward = async (day: number) => {
    if (!userData || !token) {
        setError('Ошибка авторизации');
        return;
    }
    try {
      const response = await fetch(`${API_URL}/user/claim_daily_reward`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ day, user_id: userData.id }), 
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      // Обработка успешного получения награды
      console.log('Reward claimed successfully!');
      // Обновляем данные пользователя и список наград
      const updatedRewards = dailyRewards.map(reward => 
        reward.day === day ? { ...reward, claimed: true } : reward
      );
      setDailyRewards(updatedRewards);
      
      // Обновляем баланс пользователя (предполагая, что сервер возвращает обновленный баланс)
      const updatedUserData = await response.json();
      setUserData(updatedUserData.user); 
    } catch (error) {
      console.error('Error claiming reward:', error);
      setError('Ошибка при получении награды'); 
    }
  };

  return (
    <div className={styles.earmMain}>
      <div className={styles.parent}>
        <div className={styles.div}>Ежедневные награды</div>
        <div className={styles.div1}>Заходите каждый день без пропусков и вы сможете получить увеличенный бонус на следующий день! Иначе счетчик начнется заново</div>
      </div>

      <div 
        className={styles.earmMainInner}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.everyDarErningParent} ref={scrollRef}>
          {dailyRewards.map((reward, index) => ( 
            <div className={index === 0 ? styles.everyDarErning : styles.everyDarErning1} key={index}> 
              <div className={styles.div2}>День {reward.day}</div> 
              <div className={styles.instanceParent}>
                <img className={styles.frameChild} alt="Награда за день" src={frame122} />
                <img className={styles.frameItem} alt="Награда за день" src={frame122} />
              </div>
              <div className={styles.div3}>
                {reward.amount}
              </div>
              <button 
                onClick={() => handleClaimReward(reward.day)}
                disabled={reward.claimed} 
              >
                {reward.claimed ? 'Получено' : 'Получить'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.button}>
        <div className={styles.div18}>Получить</div>
      </div>

      <div className={styles.group}>
        <div className={styles.div19}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning8}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
      </div>

      <div className={styles.parent1}>
        <div className={styles.div22}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <NavigationBar /> 
      </div>

      {error && <div className={styles.error}>{error}</div>} 
    </div>
  );
};

export default Earn;