import React, { useState, useEffect } from 'react';
import styles from './scss/HomeScreen.module.scss';
import NavigationBar from './Navigation';

// Импорт изображений для разных элементов
import characterLvl1 from './img/lvl1.png';
import characterLvl2 from './img/lvl2.png';
import characterLvl3 from './img/lvl3.png';
import characterLvl4 from './img/lvl4.png';
import characterLvl5 from './img/lvl5.png';
import characterLvl6 from './img/lvl6.png';
import characterLvl7 from './img/lvl7.png';
import characterLvl8 from './img/lvl8.png';
import characterLvl9 from './img/lvl9.png';

import frame122 from './img/Frame 122.png';
import iconSvg from './img/Icon.svg';
import icon3Svg from './img/Icon2.svg';
import icon2Svg from './img/Icon3.svg';
import icon4Svg from './img/Icon4.svg';
import avatar from './img/Avatar.png';
import imageCup from './img/image кубок.png';
import component13 from './img/Component 13.png';
import frame109 from './img/Frame 109.svg';
import boostSvg from './img/boost.svg';
import backgr from './img/backgr.png';

const levelImages = {
  1: characterLvl1,
  2: characterLvl2,
  3: characterLvl3,
  4: characterLvl4,
  5: characterLvl5,
  6: characterLvl6,
  7: characterLvl7,
  8: characterLvl8,
  9: characterLvl9,
};

const HomeScreen: React.FC = () => {
  const [level, setLevel] = useState<number>(() => Number(localStorage.getItem('level')) || 1);
  const [balance, setBalance] = useState<number>(() => Number(localStorage.getItem('balance')) || 0);
  const [income, setIncome] = useState<number>(() => Number(localStorage.getItem('income')) || 0);
  const [stamina, setStamina] = useState<number>(1000);
  const [clickPosition, setClickPosition] = useState<{ x: number, y: number } | null>(null);
  const [showClickAnimation, setShowClickAnimation] = useState(false);

  useEffect(() => {
    localStorage.setItem('level', level.toString());
    localStorage.setItem('balance', balance.toString());
    localStorage.setItem('income', income.toString());
  }, [level, balance, income]);

  useEffect(() => {
    const staminaInterval = setInterval(() => {
      setStamina(prevStamina => Math.min(prevStamina + 10, 1000));
    }, 60000); // Восстановление стамины каждые 60 секунд
    return () => clearInterval(staminaInterval);
  }, []);

  const handleCharacterClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (stamina > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      setClickPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      setShowClickAnimation(true);

      const newBalance = balance + 1;
      setBalance(newBalance);
      setStamina(stamina - 1);
      checkLevelUp(newBalance);

      setTimeout(() => {
        setShowClickAnimation(false);
      }, 1000); // Анимация длится 1 секунду
    } else {
      alert("У вас закончилась стамина!");
    }
  };

  const checkLevelUp = (currentBalance: number) => {
    const levelRequirements = [0, 5000, 10000, 100000, 500000, 1000000, 5000000, 10000000, 50000000];
    for (let i = 0; i < levelRequirements.length; i++) {
      if (currentBalance >= levelRequirements[i] && level < i + 1) {
        setLevel(i + 1);
      }
    }
  };

  // Функция для увеличения дохода
  const increaseIncome = () => {
    const additionalIncome = 10; // Например, доход за период времени
    setIncome(prevIncome => prevIncome + additionalIncome);
  };

  // Используйте хук эффекта, чтобы симулировать получение дохода каждый раз в определенный период
  useEffect(() => {
    const incomeInterval = setInterval(increaseIncome, 10000); // Увеличение дохода каждые 10 секунд
    return () => clearInterval(incomeInterval); // Очистка интервала при размонтировании компонента
  }, []); // Пустой массив зависимостей для запуска эффекта только при монтировании

  return (
    <div className={styles.homeScreen}>
      <div className={styles.topSection}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                    <img className={styles.frameChild} alt="" src={frame122} />
                    <div className={styles.highlightedFigure}>{income}</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="" src={icon2Svg} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="" src={iconSvg} />
                    <div className={styles.highlightedFigure}>0</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pointBlockGroup}>
              <div className={styles.pointBlock2}>
                <div className={styles.skufsdff}>Skuffolog...</div>
                <img className={styles.icon2} alt="" src={icon3Svg} />
              </div>
              <div className={styles.level89Parent}>
                <div className={styles.level89}>Уровень {level}</div>
                <div className={styles.frameWrapper}>
                  <div className={styles.progressBarBackgroundWrapper}>
                    <div className={styles.progressBarBackground} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileBlock}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="avatar" src={avatar} />
            <div className={styles.nameAndRunk}>
              <div className={styles.namee}>newuser</div>
              <div className={styles.meme}>(meme)</div>
            </div>
            <img className={styles.icon1} alt="icon" src={icon4Svg} />
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="cup" src={imageCup} />
              <div className={styles.notificationError}>
                <div className={styles.div5}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainSection}>
        <div className={styles.contentBlock}>
          <img className={styles.backgr} alt="background" src={backgr} />

          <div className={styles.highlightedInfo}>
            <img className={styles.component13Icon} alt="component" src={component13} />
            <div className={styles.highlightedFigure}>{balance.toLocaleString()}</div>
          </div>
          <img
            className={styles.characterIcon}
            alt="character"
            src={levelImages[level as keyof typeof levelImages]}
            onClick={handleCharacterClick}
          />
          {showClickAnimation && clickPosition && (
            <div 
              className={styles.clickAnimation} 
              style={{ top: clickPosition.y, left: clickPosition.x }}
            >
              +1
            </div>
          )}
        </div>
        <div className={styles.batarty}>
          <div className={styles.instanceGroup}>
            <img className={styles.frameItem} alt="frame" src={frame109} />
            <div className={styles.div6}>{stamina}/1000</div>
          </div>
          <div className={styles.progressBarWrapper}>
            <div className={styles.progressBar} style={{ width: `${(stamina / 1000) * 100}%` }} />
          </div>
          <div className={styles.iconGroup}>
            <img className={styles.icon4} alt="boost" src={boostSvg} />
            <div className={styles.boost}>Boost</div>
          </div>
        </div>
        <div className={styles.footerSection} />
      </div>

      <div className={styles.navigationContainer}>
        <NavigationBar />
      </div>
    </div>
  );
};

export default HomeScreen;
