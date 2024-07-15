import React, { FunctionComponent, useState, useEffect } from 'react';
import './App.css';
import Main from './Homescreen';
import Earn from './Earn';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Friends from './Friends';

import tiktokIcon from './img/tiktokicon1.svg';
import twitchIcon from './img/twitchicon.svg';
import youtubeIcon from './img/youtube.svg';
import telegramIcon from './img/telegram.svg';

import styles from './Loading.module.scss'; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Инициализируем Telegram Web App SDK после загрузки компонента
    WebApp.ready();

    const sendData = async () => {
      const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};
      try {
        const response = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/create_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: user }),
        });

        console.log('Create user response:', response);

        if (response.status !== 200) {
          console.log('User already exists, attempting to log in...');
          const loginResponse = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/login_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
          });

          console.log('Login response:', loginResponse);
          const loginResult = await loginResponse.json();
          console.log('Login success:', loginResult);
        } else {
          const createUserResult = await response.json();
          console.log('User created successfully:', createUserResult);
        }
      } catch (error) {
        console.error('Error sending data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    sendData();
  }, []); // Пустой массив зависимостей означает, что useEffect выполнится только один раз после монтирования компонента

  return isLoading ? (
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
  ) : (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;
