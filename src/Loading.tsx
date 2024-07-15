import { useEffect } from 'react';
import { FunctionComponent } from 'react';
import styles from './Loading.module.scss';

import tiktokIcon from './img/tiktokicon1.svg';
import twitchIcon from './img/twitchicon.svg';
import youtubeIcon from './img/youtube.svg';
import telegramIcon from './img/telegram.svg';

const Loading: FunctionComponent = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand(); 

    const user = tg.initDataUnsafe.user;

    if (user) {
      const headerTitle = document.querySelector('.header-title');
      if (headerTitle) {
        headerTitle.innerHTML = user.username || `${user.first_name} ${user.last_name}`;
      }

      Telegram.WebApp.sendData('Hello from Mini App');

      const sendUserData = async () => {
        try {
          const response = await fetch('https://tma0-lokd-ivutu66ee-ne0tenys-projects.vercel.app//webhook', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
          });

          if (!response.ok) {
            if (response.status === 409) {
              const loginResponse = await fetch('https://tma0-lokd-ivutu66ee-ne0tenys-projects.vercel.app//login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: user }),
              });

              if (!loginResponse.ok) {
                throw new Error('Failed to login existing user.');
              }
            } else {
              throw new Error('Network response was not ok.');
            }
          }

          const result = await response.json();
          console.log('Success:', result);

          window.location.href = '/#/home';
        } catch (error) {
          console.error('Error:', error);
        }
      };

      sendUserData();
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
    </div>
  );
};

export default Loading;
