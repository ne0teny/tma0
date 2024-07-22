import React, { useEffect } from 'react';
import { FunctionComponent } from 'react';
import styles from './Loading.module.scss';
import './Loading.css';

import tiktokIcon from './img/tiktokicon1.svg';
import twitchIcon from './img/twitchicon.svg';
import youtubeIcon from './img/youtube.svg';
import telegramIcon from './img/telegram.svg';

const Loading: FunctionComponent = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const user = tg.initDataUnsafe?.user;

    if (user) {
      const headerTitle = document.querySelector('.header-title');
      if (headerTitle) {
        headerTitle.innerHTML = user.username || `${user.first_name} ${user.last_name}`;
      }

      Telegram.WebApp.sendData('Hello from Mini App');
    }
  }, []);

  return (
    <div className={styles.memeEmpireParent}>
      <div className={styles.memeEmpire}>Meme Empire</div>
      <div className={styles.div}>Добро пожаловать, мы вас очень ждали!</div>
      <div className={styles.iconParent}>
        <img className={styles.icon} alt="TikTok" src={tiktokIcon} />
        <img className={styles.icon} alt="Twitch" src={twitchIcon} />
        <img className={styles.icon} alt="YouTube" src={youtubeIcon} />
        <img className={styles.icon} alt="Telegram" src={telegramIcon} />
      </div>

      {/* Круговой загрузчик */}
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default Loading;
