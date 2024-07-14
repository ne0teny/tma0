import React, { FunctionComponent } from 'react';
import styles from './scss/FriendsMain.module.scss';
import NavigationBar from './Navigation'; 

import actionsheedImage from './img/ActionSheed image.png';
import frame122 from './img/Frame 122.png';
import icon from './img/Icon.svg'; 

const FriendsMain: FunctionComponent = () => {
  return (
    <div className={styles.friendsMain}>
      <div className={styles.parent}>
        <div className={styles.div}>Пригласите друзей!</div>
        <div className={styles.div1}>Ваш приведенный друг получит приветственный бонус!</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div2}>Пригласить друга</div>
        <div className={styles.everyDarErning}>
          <img className={styles.actionsheedImageIcon} alt="" src={actionsheedImage} />
          <div className={styles.container}>
            <div className={styles.div3}>{`Пригласи друга `}</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <div className={styles.div4}>+580 000</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div5}>Больше бонусов</div>
      <div className={styles.frameDiv}>
        <div className={styles.div6}>Список ваших друзей</div>
        <img className={styles.icon} alt="" src={icon} />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div7}>Вы еще не пригласили друзей</div>
      </div>
      <div className={styles.buttonParent}>
        <div className={styles.button}>
          <div className={styles.div6}>Пригласить</div>
        </div>
        <div className={styles.button1}>
          <img className={styles.icon} alt="" src={icon} />
        </div>
      </div>

      <div className={styles.navigationContainer}>
        <NavigationBar /> 
      </div>
    </div>
  );
};

export default FriendsMain;
