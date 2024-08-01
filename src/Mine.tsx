import React, { useState, FunctionComponent } from 'react';
import styles from './scss/MineCard.module.scss';

// Импорт изображений
import frame122 from './img/Frame 122.png';
import iconSvg from './img/Icon.svg';
import avatar from './img/Avatar.png';
import imageCup from './img/image 7.png';
import component13 from './img/Component 13.png';
import additionalInfo from './img/Additional Info.svg';
import frame109 from './img/Frame 109.svg';

// Импорт компонентов вкладок
import SHSkills from './SHSkills';
import Internet from './Internet';
import Special from './Special';

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
interface MineProps {
  userData: User | null; // Add userData to the MineProps interface
  token: string | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const Mine: FunctionComponent<MineProps> = ({ userData, token, setUserData }) => {
  const [activeTab, setActiveTab] = useState('sh-skills');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.mineCard}>
      {/* Блок информации о пользователе */}
      <div className={styles.blockOfInfoParent}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                    <img className={styles.frameChild} alt="Поинты за час" src={frame122} />
                    <div className={styles.softSkill}>+580 000</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="Иконка подписчиков" src={iconSvg} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="Иконка подписчиков" src={iconSvg} />
                    <div className={styles.softSkill}>580 000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pointBlockGroup}>
            <div className={styles.pointBlock2}>
              <div className={styles.skufsdff}>Skuffolog...</div>
              <img className={styles.icon2} alt="Иконка" src={iconSvg} />
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
            <img className={styles.icon1} alt="Иконка" src={iconSvg} />
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="Иконка кубка" src={imageCup} />
              <div className={styles.notificationError}>
                <div className={styles.div5}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Вкладки */}
      <div className={styles.tapbarButtonParent}>
        <button
          className={`${styles.tapbarButton} ${activeTab === 'sh-skills' ? styles.active : ''}`}
          onClick={() => handleTabClick('sh-skills')}
        >
          S&H skills
        </button>
        <button
          className={`${styles.tapbarButton1} ${activeTab === 'internet' ? styles.active : ''}`}
          onClick={() => handleTabClick('internet')}
        >
          Internet
        </button>
        <button
          className={`${styles.tapbarButton1} ${activeTab === 'special' ? styles.active : ''}`}
          onClick={() => handleTabClick('special')}
        >
          Special
        </button>
      </div>

      {/* Контент вкладок */}
      <div className={styles.div6}>
        {activeTab === 'sh-skills' && <SHSkills />}
        {activeTab === 'internet' && <Internet />}
        {activeTab === 'special' && <Special />}
      </div>
    </div>
  );
};

export default Mine;
