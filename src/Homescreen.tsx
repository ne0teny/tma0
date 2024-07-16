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
import imageКубок from './img/image кубок.png';

interface User {
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

const HomeScreen: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const [clickAnimations, setClickAnimations] = useState<ClickAnimation[]>([]);
  const [energy, setEnergy] = useState(7000);
  const maxEnergy = 7000;
  const energyRecoveryRate = 10;
  const energyRecoveryInterval = 60000;
  const clickValue = 1;

  const additionalInfoRef = useRef<SVGSVGElement>(null);
  const contentBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/get_user_data', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const userData = await response.json();
        setUser(userData);
        setEnergy(userData.energy);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + energyRecoveryRate, maxEnergy));
    }, energyRecoveryInterval);

    return () => clearInterval(intervalId);
  }, [energy]);

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

    if (energy > 0) {
      setUser((prevUser) =>
        prevUser ? { ...prevUser, balance: prevUser.balance + clickValue } : prevUser
      );
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
        prevAnimations.filter((animation) => Date.now() - animation.startTime < 1000)
      );
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const defaultUser: User = {
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
                <div className={styles.frameWrapper}>
                  <div className={styles.progressBarBackgroundWrapper}>
                    <div className={styles.progressBarBackground} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profileBlock}>
            <div className={styles.avatarParent}>
              <img className={styles.avatarIcon} alt="Аватар пользователя" src={currentUser.avatar} />
              <div className={styles.nameAndRunk}>
                <div className={styles.namee}>{currentUser.name}</div>
                <div className={styles.meme}>{currentUser.league}</div>
              </div>
              <IconProfile className={styles.iconProfile} aria-label="Иконка профиля" />
            </div>
            <div className={styles.everyDayBonus}>
              <div className={styles.container}>
                <div className={styles.div4}>
                  <p className={styles.p}>Ежедневный</p>
                  <p className={styles.p}>бонус</p>
                </div>
                <img className={styles.imageIcon} alt="Иконка кубка" src={imageКубок} />
                <div className={styles.notificationError}>
                  <div className={styles.div5}>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainSection}>
          <div
            ref={contentBlockRef}
            className={`${styles.contentBlock} ${styles.touchable}`}
            onTouchStart={handleClick}
          >
            <div className={styles.highlightedInfo}>
              <Component13 className={styles.component13Icon} aria-label="Компонент 13" />
              <div className={styles.highlightedFigure}>{currentUser.balance}</div>
            </div>

            <AdditionalInfo
              className={`${styles.additionalInfoIcon} ${isClicking ? styles.clicking : ''}`}
              aria-label="Дополнительная информация"
              ref={additionalInfoRef}
            />
            {clickAnimations.map((animation, index) => (
              <div
                key={index}
                className={styles.clickAnimation}
                style={animation.style}
              >
                +{clickValue}
              </div>
            ))}
          </div>

          <div className={styles.batarty}>
            <img className={styles.batartyChild} alt="Батарея" src={frame109} />
            <div className={styles.div6}>{energy}/{maxEnergy}</div>
          </div>
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <NavigationBar />
      </div>
    </div>
  );
};

export default HomeScreen;
