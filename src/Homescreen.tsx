import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from './Navigation';
import styles from './scss/HomeScreen.module.scss';
import { ReactComponent as Frame122 } from './img/Frame 122.svg';
import { ReactComponent as IconFollowers } from './img/Icon3.svg';
import { ReactComponent as IconSkuff } from './img/Icon2.svg';
import { ReactComponent as IconProfile } from './img/Icon4.svg';
import { ReactComponent as Component13 } from './img/Component 13.svg';
import { ReactComponent as AdditionalInfo } from './img/Additional Info.svg';
import frame109 from './img/Frame 109.svg';
import avatar from './img/Avatar.png';
import imageКубок from './img/image кубок.png'; // Импортируем изображение кубка

const API_URL = 'https://1178-89-107-97-177.ngrok-free.app';

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

interface ClickAnimation {
  style: React.CSSProperties;
  startTime: number;
}

interface HomeScreenProps {
  userData: User | null;
  token: string | null;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ userData, token }) => {
  const [user, setUser] = useState<User | null>(userData);
  const [isClicking, setIsClicking] = useState(false);
  const [clickAnimations, setClickAnimations] = useState<ClickAnimation[]>([]);
  const [energy, setEnergy] = useState(7000);
  const maxEnergy = 7000;
  const energyRecoveryRate = 10;
  const energyRecoveryInterval = 60000;
  const clickValue = 1;
  const [error, setError] = useState<string | null>(null);

  const additionalInfoRef = useRef<SVGSVGElement>(null);
  const contentBlockRef = useRef<HTMLDivElement>(null);

  const [pointsGained, setPointsGained] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          console.error("Токен отсутствует");
          setError('Токен отсутствует');
          return;
        }

        const response = await fetch(`${API_URL}/user/get_user_data`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Ошибка при получении данных пользователя');
        }

        const userData = await response.json();
        setUser(userData);
        setEnergy(userData.energy);

        setPointsGained(userData.balance); 
      } catch (error) {
        console.error('Ошибка:', error);
        setError('Ошибка при загрузке данных пользователя');
      }
    };

    fetchUserData();
  }, [token]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + energyRecoveryRate, maxEnergy));
    }, energyRecoveryInterval);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = (event: React.TouchEvent<HTMLDivElement>) => {
    event.preventDefault();
    const touches = event.touches;
    const rect = contentBlockRef.current?.getBoundingClientRect();

    for (let i = 0; i < touches.length; i++) {
      const touch = touches[i];
      const newAnimation: ClickAnimation = {
        style: {
          left: `${touch.clientX - (rect?.left ?? 0)}px`,
          top: `${touch.clientY - (rect?.top ?? 0)}px`,
        },
        startTime: Date.now(),
      };
      setClickAnimations((prevAnimations) => [...prevAnimations, newAnimation]);
    }

    if (energy > 0 && user) {
      setPointsGained(pointsGained + clickValue);
      setEnergy(energy - 1);
      setIsClicking(true);

      setTimeout(() => {
        setIsClicking(false);
      }, 100);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClickAnimations((prevAnimations) =>
        prevAnimations.filter(
          (animation) => Date.now() - animation.startTime < 1000
        )
      );
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const defaultUser: User = {
    id: 0,
    level: 1,
    league: 'No league',
    balance: 0, 
    income: 0,
    avatar: avatar,
    name: 'New User',
    energy: 7000,
    followers: 0,
  };

  const currentUser = user || defaultUser;

  useEffect(() => {
    const updateBalanceOnServer = async () => {
      try {
        if (!user) return; 

        const response = await fetch(`${API_URL}/user/update_points`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            gain_points: pointsGained.toString(), // Отправляем заработанные поинты
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Ошибка сервера:', errorData);
          setError(errorData.detail || 'Произошла ошибка при обновлении баланса');
        } else {
          console.log("Баланс успешно обновлён");
          setError(null);
        }
      } catch (error) {
        console.error('Ошибка обновления баланса на сервере:', error);
        setError('Ошибка сети. Проверьте подключение к интернету.');
      }
    };

    document.addEventListener('visibilitychange', updateBalanceOnServer);
    return () => document.removeEventListener('visibilitychange', updateBalanceOnServer);
  }, [user, token, pointsGained]); 

  return (
    <div>
      <div className={styles.homeScreen}>
        <div className={styles.topSection}>
          <div className={styles.blockOfInfo}>
            <div className={styles.blockOfInfoInner}>
              <div className={styles.pointBlockParent}>
                <div className={styles.pointBlock}>
                  <div className={styles.parent}>
                    <div className={styles.div}>Поинты за час</div>
                    <div className={styles.instanceParent}>
                      <Frame122 className={styles.frameChild} aria-label="Иконка поинтов за час" />
                      <div className={styles.highlightedFigure}>+{currentUser.income}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.pointBlock}>
                  <div className={styles.parent}>
                    <div className={styles.group}>
                      <div className={styles.div2}>Подписчики</div>
                      <IconFollowers className={styles.iconFollowers} aria-label="Иконка подписчиков" />
                    </div>
                    <div className={styles.instanceParent}>
                      <IconFollowers className={styles.iconFollowers} aria-label="Иконка подписчиков" />
                      <div className={styles.highlightedFigure}>{currentUser.followers}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pointBlockGroup}>
              <div className={styles.pointBlock2}>
                <div className={styles.skufsdff}>Skuffolog...</div>
                <IconSkuff className={styles.iconSkuff} aria-label="Иконка Skuffolog" />
              </div>
              <div className={styles.level89Parent}>
                <div className={styles.level89}>level {currentUser.level}</div>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild1} />
                  <IconProfile className={styles.iconProfile} aria-label="Иконка профиля" />
                  <div className={styles.bxjHasntParent}>
                    <div className={styles.bxjHasnt}>{currentUser.league}</div>
                    <div className={styles.dinoParent}>
                      <img className={styles.avatarIcon} alt="Аватар" src={currentUser.avatar} />
                      <div className={styles.dino}>{currentUser.name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.everyDayBonus}>
                <img className={styles.cupIcon} alt="Кубок" src={imageКубок} />
                <div className={styles.textBlock}>
                  <div className={styles.everyDayBonusText}>Ежедневный бонус</div>
                  <div className={styles.nsText}>HC</div>
                </div>
                <div className={styles.additionalInfo}>
                  <AdditionalInfo ref={additionalInfoRef} className={styles.additionalInfoIcon} aria-label="Иконка дополнительной информации" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBlock} onTouchStart={handleClick} ref={contentBlockRef}>
          {clickAnimations.map((animation, index) => (
            <Component13 key={index} className={styles.clickAnimation} style={animation.style} />
          ))}
          <div className={styles.energyBar}>
            <div className={styles.energyBarFill} style={{ width: `${(energy / maxEnergy) * 100}%` }}>
              <div className={styles.energyText}>{energy}</div>
            </div>
            </div>
          </div>
          <div className={styles.navigationContainer}>
        <NavigationBar /> 
      </div>
    </div>
</div>  );
};

export default HomeScreen;
