import React, { FC } from 'react'; // Импортируем FC
import { Link } from 'react-router-dom';
import styles from './scss/NavigationBar.module.scss';

import HomeIcon from './img/Home.svg';
import MineIcon from './img/Mine.svg';
import FriendsIcon from './img/Friends.svg';
import EarnIcon from './img/Earn.svg';
import AirdropIcon from './img/Airdrop.svg';

const NavigationBar: FC = () => {  // Используем FC вместо FunctionComponent
  return (
    <div className={styles.navigationbar}>
      <Link to="/" className={styles.component11}> 
        <img className={styles.component11Child} alt="Home" src={HomeIcon} />
        <div className={styles.home}>Home</div>
      </Link>
      <Link to="/mine" className={styles.frameParent}>
        <img className={styles.component11Child} alt="Mine" src={MineIcon} />
        <div className={styles.home}>Mine</div>
      </Link>
      <Link to="/friends" className={styles.frameParent}>
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