import { FunctionComponent } from 'react';
import styles from './scss/Airdrop.module.scss';

import Image15 from './img/image 15.png';

const Airdrop: FunctionComponent = () => {
  return (
    <div className={styles.airdrop}>
     
      
      <div className={styles.image15Parent}>
        <img className={styles.image15Icon} alt="" src={Image15} />
        <div className={styles.comingSoon}>Coming soon 🤍🤍🤍</div>
      </div>
    </div>
  );
};

export default Airdrop;
