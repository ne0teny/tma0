import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link из react-router-dom
import styles from './scss/Navigation.module.scss';

import homeSvg from './img/Home.svg';
import earnSvg from './img/Earn.svg';
import friendsSvg from './img/Friends.svg';
import airdropSvg from './img/Airdrop.svg';
import mineSvg from './img/Mine.svg';

const NavigationBar: FunctionComponent = () => {
  return (
    <div className={styles.navigationbar}>
      <Link to="/" className={styles.component11}> {/* Используем Link для перехода */}
        <img className={styles.component11Child} alt="Home" src={homeSvg} />
        <div className={styles.home}>Home</div>
      </Link>
      <Link to="/mine" className={styles.frameParent}> {/* Используем Link для перехода */}
        <img className={styles.component11Child} alt="Mine" src={mineSvg} />
        <div className={styles.home}>Mine</div>
      </Link>
      <Link to="/friends" className={styles.frameParent}> {/* Используем Link для перехода */}
        <img className={styles.component11Child} alt="Friends" src={friendsSvg} />
        <div className={styles.home}>Friends</div>
      </Link>
      <Link to="/earn" className={styles.frameParent}> {/* Используем Link для перехода */}
        <img className={styles.component11Child} alt="Earn" src={earnSvg} />
        <div className={styles.home}>Earn</div>
      </Link>
      <Link to="/airdrop" className={styles.frameParent}> {/* Используем Link для перехода */}
        <img className={styles.component11Child} alt="Airdrop" src={airdropSvg} />
        <div className={styles.home}>Airdrop</div>
      </Link>
    </div>
  );
};

export default NavigationBar;
