import React, { FunctionComponent } from 'react';
import styles from './scss/Special.module.scss';
import subtractIcon from './img/Subtract.svg';
import component9 from './img/Component 9.png';
import image7 from './img/image 7.png';

const Special: FunctionComponent = () => (
  <div className={styles.mineSpecialCard}>
    {/* Верхняя секция с блоками информации */}
    {[...Array(6)].map((_, index) => (
      <div key={index} className={styles.blockOfInfoParent}>
        <div className={styles.subtractParent}>
          <img className={styles.subtractIcon} alt="" src={subtractIcon} />
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.div7}>Дачный гений</div>
              <div className={styles.level89}>Прибыль в час</div>
              <div className={styles.level89}>+1000 поинтов</div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.component9Parent}>
              <img className={styles.frameChild} alt="" src={component9} />
              <div className={styles.softSkill}>1000</div>
            </div>
          </div>
          <div className={styles.lvl100Parent}>
            <div className={styles.lvl100}>lvl 100</div>
            <div className={styles.instanceWrapper}>
              <div className={styles.image7Wrapper}>
                <img className={styles.image7Icon} alt="" src={image7} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subtractParent}>
          <img className={styles.subtractIcon} alt="" src={subtractIcon} />
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.div7}>Дачный гений</div>
              <div className={styles.level89}>Прибыль в час</div>
              <div className={styles.level89}>+1000 поинтов</div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.component9Parent}>
              <img className={styles.frameChild} alt="" src={component9} />
              <div className={styles.softSkill}>1000</div>
            </div>
          </div>
          <div className={styles.lvl100Parent}>
            <div className={styles.lvl100}>lvl 100</div>
            <div className={styles.instanceWrapper}>
              <div className={styles.image7Wrapper}>
                <img className={styles.image7Icon} alt="" src={image7} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}

    {/* Вторичный таббар */}
    <div className={styles.secondaryTapbar}>
      <div className={styles.tapbarButton3}>
        <div className={styles.div6}>Популярные</div>
      </div>
      <div className={styles.tapbarButton4}>
        <div className={styles.div6}>Мои</div>
      </div>
    </div>
  </div>
);

export default Special;
