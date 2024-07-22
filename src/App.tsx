import React, { useState, useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen';
import Earn from './Earn';
import WebApp from '@twa-dev/sdk';
import { Routes, Route, Navigate } from 'react-router-dom';
import Friends from './Friends';
import Mine from './Mine';
import Loading from './Loading';
import Airdrop from './Airdrop';

const API_URL = 'https://1178-89-107-97-177.ngrok-free.app'; // Замените на ваш актуальный URL

interface User {
  id: number;
  level: number;
  league: string;
  balance: number;
  income: number;
  avatar: string;
  name: string;
  energy: number;
  followers: number;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    WebApp.ready(); // Инициализируем Telegram Web App

    const initializeApp = async () => {
      const token = localStorage.getItem('token'); // Получаем токен из localStorage

      if (token) {
        // Если токен есть, пытаемся получить данные пользователя
        try {
          const response = await fetch(`${API_URL}/user/get_points`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            // Если данные получены успешно, обновляем состояние userData
            const userData = await response.json();
            setUserData(userData);
          } else {
            // Если данные не получены, выводим ошибку и удаляем токен
            console.error('Ошибка получения данных пользователя:', response.statusText);
            localStorage.removeItem('token');
            setIsLoggedIn(false);
          }
        } catch (error) {
          console.error('Ошибка сети:', error);
        }
      } else {
        // Если токена нет, пытаемся создать или войти в аккаунт пользователя
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};
        try {
          let response = await fetch(`${API_URL}/user/create_user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: user }),
          });

          if (!response.ok) {
            // Если пользователь уже существует, пытаемся войти
            response = await fetch(`${API_URL}/user/login_user`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: user }),
            });
          }

          if (response.ok) {
            // Если вход или регистрация успешны, обновляем состояние и сохраняем токен
            const loginResult = await response.json();
            setUserData(loginResult.user);
            localStorage.setItem('token', loginResult.token);
          } else {
            console.error('Ошибка входа/регистрации:', response.statusText);
          }
        } catch (error) {
          console.error('Ошибка сети:', error);
        }
      }

      // Обеспечиваем минимальное время загрузки 2 секунды
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsLoggedIn(true); // Пользователь авторизован
      setIsLoading(false); // Скрываем экран загрузки
    };

    initializeApp(); // Запускаем инициализацию приложения
  }, []);

  return (
    <div className="App">
      {isLoading ? ( // Если загрузка не завершена, показываем экран загрузки
        <Loading />
      ) : isLoggedIn ? ( // Если пользователь авторизован, показываем маршруты
        <Routes>
          <Route path="/" element={<Homescreen userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="/earn" element={<Earn userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="/friends" element={<Friends userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="/mine" element={<Mine userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="airdrop" element={<Airdrop userData={userData} token={localStorage.getItem('token')} />} />
        </Routes>
      ) : (
        <div>Пользователь не авторизован</div> // Если пользователь не авторизован, показываем сообщение
      )}
    </div>
  );
}

export default App;
