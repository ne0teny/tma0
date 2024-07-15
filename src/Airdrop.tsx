import { FunctionComponent } from 'react';
import styles from './scss/Airdrop.module.scss';

import Image7 from './img/image7.png';

const Airdrop: FunctionComponent = () => {
  return (
    <div className={styles.airdrop}>
      <div className={styles.iphoneXhomeIndicatorhomeI}>
        <div className={styles.iphoneXhomeIndicatorhomeIChild} />
      </div>
      <div className={styles.image7Parent}>
        <img className={styles.image7Icon} alt="" src={Image7} />
        <div className={styles.comingSoon}>Coming soon 🤍🤍🤍</div>
      </div>
    </div>
  );
};

export default Airdrop;
