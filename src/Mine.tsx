import { FunctionComponent } from 'react';
import styles from './scss/Mine.module.scss';
import AvatarImage from './Avatar.png';
import Frame122Image from './Frame 122.png';
import IconImage from './Icon.svg';
import SubtractImage from './Subtract.svg';
import ImageКубокImage from './image кубок.png';
import Image7Image from './image 7.png';
import Component9Image from './Component 9.png';
import Frame170Image from './Frame 170.svg';
import Frame172Image from './Frame 172.svg';
import Frame109Image from './Frame 109.svg';
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
                    <img className={styles.frameChild} alt="" src={Frame122Image} />
                    <div className={styles.softSkill}>+580 000</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="" src={IconImage} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="" src={IconImage} />
                    <div className={styles.softSkill}>580 000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pointBlockGroup}>
            <div className={styles.pointBlock2}>
              <div className={styles.skufsdff}>SKUFsdfF</div>
              <img className={styles.icon2} alt="" src={IconImage} />
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
            <img className={styles.avatarIcon} alt="" src={AvatarImage} />
            <div className={styles.nameAndRunk}>
              <div className={styles.namee}>Namee...</div>
              <div className={styles.meme}>(meme)</div>
            </div>
            <img className={styles.icon1} alt="" src={IconImage} />
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="" src={ImageКубокImage} />
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
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceGroup}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceGroup}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component13Parent}>
        <img className={styles.frameChild} alt="" src={Component9Image} />
        <div className={styles.softSkill}>+1000</div>
      </div>
      <div className={styles.image5Wrapper}>
        <img className={styles.frameChild} alt="" src={Frame170Image} />
        <div className={styles.div9}>0</div>
      </div>
      <div className={styles.instanceDiv}>
        <img className={styles.frameChild} alt="" src={Frame172Image} />
        <div className={styles.softSkill}>Твой брат, шаман, 1й сезон</div>
      </div>
      <div className={styles.instanceDiv}>
        <img className={styles.frameChild} alt="" src={Frame109Image} />
        <div className={styles.softSkill}>0</div>
      </div>
      <div className={styles.navigationContainer}>
        <NavigationBar />
      </div>
    </div>
  );
};

export default MineCard;
