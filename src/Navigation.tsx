import React, { FunctionComponent } from 'react';
import styles from './scss/NavigationBar.module.scss';

// Импортируем все SVG-изображения
import homeSvg from './img/Home.svg';
import mineSvg from './img/Mine.svg';
import friendsSvg from './img/Friends.svg';
import earnSvg from './img/Earn.svg';
import airdropSvg from './img/Airdrop.svg';

const NavigationBar: FunctionComponent = () => {
  return (
    <div className={styles.component11Parent}>
      <div className={styles.component11}>
        <img className={styles.component11Child} alt="" src={homeSvg} />
        <div className={styles.home}>Home</div>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.component11Child} alt="" src={mineSvg} />
        <div className={styles.home}>Mine</div>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.component11Child} alt="" src={friendsSvg} />
        <div className={styles.home}>Friends</div>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.component11Child} alt="" src={earnSvg} />
        <div className={styles.home}>Earn</div>
      </div>
      <div className={styles.frameParent}>
        <img className={styles.component11Child} alt="" src={airdropSvg} />
        <div className={styles.home}>Airdrop</div>
      </div>
    </div>
  );
};

export default NavigationBar;
