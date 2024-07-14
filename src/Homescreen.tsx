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

interface ClickAnimation {
  style: React.CSSProperties;
  startTime: number;
}

const HomeScreen: React.FC = () => {
  const [balance, setBalance] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [clickAnimations, setClickAnimations] = useState<ClickAnimation[]>([]);
  const [energy, setEnergy] = useState(7000);
  const maxEnergy = 7000;
  const energyRecoveryRate = 10;
  const energyRecoveryInterval = 60000;
  const clickValue = 1;

  const additionalInfoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    try {
      const storedBalance = localStorage.getItem('balance');
      const storedEnergy = localStorage.getItem('energy');
      const lastEnergyUpdateTime = localStorage.getItem('lastEnergyUpdateTime');

      if (storedBalance) {
        setBalance(parseInt(storedBalance, 10));
      }

      if (storedEnergy && lastEnergyUpdateTime) {
        const currentTime = Date.now();
        const timePassed = currentTime - parseInt(lastEnergyUpdateTime, 10);
        const recoveredEnergy = Math.min(
          Math.floor(timePassed / energyRecoveryInterval) * energyRecoveryRate,
          maxEnergy - parseInt(storedEnergy, 10)
        );
        setEnergy(parseInt(storedEnergy, 10) + recoveredEnergy);
      } else {
        setEnergy(maxEnergy);
      }
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      setBalance(0);
      setEnergy(maxEnergy);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('balance', balance.toString());
      localStorage.setItem('energy', energy.toString());
      localStorage.setItem('lastEnergyUpdateTime', Date.now().toString());
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }

    const intervalId = setInterval(() => {
      setEnergy((prevEnergy) => Math.min(prevEnergy + energyRecoveryRate, maxEnergy));
    }, energyRecoveryInterval);

    return () => clearInterval(intervalId);
  }, [balance, energy]);

  const handleClick = () => {
    if (energy > 0) {
      setBalance(balance + clickValue);
      setEnergy(energy - 1);
      setIsClicking(true);

      if (additionalInfoRef.current) {
        const rect = additionalInfoRef.current.getBoundingClientRect();
        const newAnimation: ClickAnimation = {
          style: {
            left: `${rect.left + Math.random() * rect.width}px`,
            top: `${rect.top + Math.random() * rect.height}px`,
          },
          startTime: Date.now(),
        };
        setClickAnimations((prevAnimations) => [...prevAnimations, newAnimation]);
      }

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
    }, 100); // Проверяем каждые 100 мс

    return () => clearInterval(intervalId);
  }, []);

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
                      <div className={styles.highlightedFigure}>+580 000</div>
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
                      <div className={styles.highlightedFigure}>580 000</div>
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
                <div className={styles.level89}>level 8/9</div>
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
              <img className={styles.avatarIcon} alt="Аватар пользователя" src={avatar} />
              <div className={styles.nameAndRunk}>
                <div className={styles.namee}>Namee...</div>
                <div className={styles.meme}>(meme)</div>
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
          <div className={styles.contentBlock} onClick={handleClick}>
            <div className={styles.highlightedInfo}>
              <Component13 className={styles.component13Icon} aria-label="Компонент 13" />
              <div className={styles.highlightedFigure}>{balance}</div>
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

export default HomeScreen
