import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './scss/NavigationBar.module.scss';

import HomeIcon from './img/Home.svg';
import MineIcon from './img/Mine.svg';
import FriendsIcon from './img/Friends.svg';
import EarnIcon from './img/Earn.svg';
import AirdropIcon from './img/Airdrop.svg';

const NavigationBar: FC = () => {
  const location = useLocation();

  return (
    <div className={styles.navigationbar}>
      <Link to="/" className={styles.component11}>
        <img className={styles.component11Child} alt="Home" src={HomeIcon} />
        <div className={styles.home}>Home</div>
      </Link>
      <div> {/* Обертка для Link */}
        <Link to="/mine" className={styles.frameParent}>
          <img className={styles.component11Child} alt="Mine" src={MineIcon} />
          <div className={styles.home}>Mine</div>
        </Link>
      </div>
      <Link
        to="/friends"
        className={`${styles.frameParent} ${location.pathname === '/friends' ? styles.active : ''}`}
      >
        <img className={styles.component11Child} alt="Friends" src={FriendsIcon} />
        <div className={styles.home}>Friends</div>
      </Link>
      <Link to="/earn" className={styles.frameParent}>
        <img className={styles.component11Child} alt="Earn" src={EarnIcon} />
        <div className={styles.home}>Earn</div>
      </Link>
      <Link to="/airdrop" className={styles.frameParent}>
        <img className={styles.component11Child} alt="Airdrop" src={AirdropIcon} />
        <div className={styles.home}>Airdrop</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
