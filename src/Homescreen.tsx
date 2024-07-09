import React from 'react';
import styles from './scss/HomeScreen.module.scss';
import { ReactComponent as Frame122 } from './img/Frame 122.svg';
import Navigation from './Navigation';
import { ReactComponent as IconPoints } from './img/Icon.svg';
import { ReactComponent as IconFollowers } from './img/Icon3.svg';
import { ReactComponent as IconSkuff } from './img/Icon2.svg';
import { ReactComponent as IconProfile } from './img/Icon4.svg';

import { ReactComponent as Component13 } from './img/Component 13.svg'; 
import { ReactComponent as AdditionalInfo } from './img/Additional Info.svg';
import { ReactComponent as FrameIcon } from './img/Frame 170.svg';
import frame109 from './img/Frame 109.svg';
import avatar from './img/Avatar.png';
import imageКубок from './img/image кубок.png';

const HomeScreen: React.FC = () => {
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
        <div className={styles.contentBlock}>
          <div className={styles.highlightedInfo}>
            <Component13 className={styles.component13Icon} aria-label="Компонент 13" />
            <div className={styles.highlightedFigure}>1 580 000</div>
          </div>

          <AdditionalInfo className={styles.additionalInfoIcon} aria-label="Дополнительная информация" />
        </div>
        <div className={styles.batarty}>
          <img className={styles.batartyChild} alt="Батарея" src={frame109} />
          <div className={styles.div6}>6500/7000</div>
          <Navigation /> 
          </div>

        </div>
      </div>
    </div>
    
  );
};

export default HomeScreen;
