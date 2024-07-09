import React, { useEffect, useState } from 'react';
import './Loading.scss';
import image from './img/Frame loading.png';
import * as Telegram from './types/telegram-web-app';

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Состояние ошибки

  useEffect(() => {
    const tg: Telegram.WebApp = window.Telegram.WebApp; 
    tg.expand(); 

    const user = tg.initDataUnsafe?.user; 

    if (user) {
      Telegram.WebApp.sendData('Hello from Mini App');

      fetch('https://69cc-89-107-97-177.ngrok-free.app/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: user }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          return response.json();
        })
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
          setError(error.message); // Устанавливаем сообщение об ошибке в состояние
        })
        .finally(() => {
          setIsLoading(false); // Завершаем загрузку независимо от результата
        });
    } else {
      setIsLoading(false); // Если данные пользователя не получены, тоже завершаем загрузку
    }
  }, []);

  return (
    <div className="loading-container">
      <img src={image} alt="Background" className="background-image" />
      <div className="loading-spinner"></div>

      {/* Отображаем сообщение об ошибке, если оно есть */}
      {error && <div className="error-message">{error}</div>} 
    </div>
  );
};

export default Loading;
