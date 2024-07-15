import { FunctionComponent } from 'react';
import styles from './scss/Mine.module.scss';
import frame122 from './img/Frame 122.png';
import iconSvg from './img/Icon.svg';
import avatarPng from './img/Avatar.png';
import imageCup from './img/image кубок.png';
import subtractSvg from './img/Subtract.svg';
import component9Png from './img/Component 9.png';
import image7Png from './img/image 7.png';
import component13Png from './img/Component 13.png';
import frame170Svg from './img/Frame 170.svg';
import frame172Svg from './img/Frame 172.svg';
import frame109Svg from './img/Frame 109.svg';
import NavigationBar from './Navigation';


const MineCard: FunctionComponent = () => {
  return (
    <div className={styles.mineCard}>
      <div className={styles.blockOfInfoParent}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                    <img className={styles.frameChild} alt="" src={frame122} />
                    <div className={styles.softSkill}>+580 000</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="" src={iconSvg} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="" src={iconSvg} />
                    <div className={styles.softSkill}>580 000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pointBlockGroup}>
            <div className={styles.pointBlock2}>
              <div className={styles.skufsdff}>SKUFsdfF</div>
              <img className={styles.icon2} alt="" src={iconSvg} />
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
            <img className={styles.avatarIcon} alt="" src={avatarPng} />
            <div className={styles.nameAndRunk}>
              <div className={styles.namee}>Namee...</div>
              <div className={styles.meme}>(meme)</div>
            </div>
            <img className={styles.icon1} alt="" src={iconSvg} />
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="" src={imageCup} />
              <div className={styles.notificationError}>
                <div className={styles.div5}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tapbarButtonParent}>
        <div className={styles.tapbarButton}>
          <div className={styles.softSkill}>{`S&H skills`}</div>
        </div>
        <div className={styles.tapbarButton1}>
          <div className={styles.div2}>Internet</div>
        </div>
        <div className={styles.tapbarButton1}>
          <div className={styles.div2}>Special</div>
        </div>
      </div>
      <div className={styles.div6}>
        <div className={styles.instanceGroup}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={subtractSvg} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={component9Png} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={image7Png} />
                </div>
              </div>
            </div>
          </div>
          {/* Повторяющиеся блоки */}
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={subtractSvg} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={component9Png} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={image7Png} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={subtractSvg} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={component9Png} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={image7Png} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={subtractSvg} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={component9Png} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={image7Png} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={subtractSvg} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={component9Png} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={image7Png} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent11}>
          <div className={styles.component13Wrapper}>
            <img className={styles.component13Icon} alt="" src={component13Png} />
          </div>
          <div className={styles.instanceParent6}>
            <img className={styles.frameIcon} alt="" src={frame170Svg} />
            <img className={styles.frameChild10} alt="" src={frame172Svg} />
            <div className={styles.instanceParent7}>
              <img className={styles.instanceChild} alt="" src={frame109Svg} />
              <div className={styles.div55}>6500/7000</div>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className={styles.navigationContainer}>
        <NavigationBar />
      </div>
    </div>
    
  );
};

export default MineCard;
