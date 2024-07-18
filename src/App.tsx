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

const API_URL = 'https://1178-89-107-97-177.ngrok-free.app';

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
  // Состояния для управления авторизацией и данными пользователя
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  // Состояния для обработки загрузки и ошибок
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Эффект для инициализации приложения и отправки данных пользователя на сервер
  useEffect(() => {
    WebApp.ready(); // Инициализация WebApp

    const sendData = async () => {
      const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {}; // Получение данных пользователя из Telegram

      try {
        // Попытка создать пользователя на сервере
        let response = await fetch(`${API_URL}/user/create_user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: user }),
        });

        // Если пользователь уже существует, попытка входа
        if (!response.ok) {
          response = await fetch(`${API_URL}/user/login_user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
          });
        }

        // Если вход или регистрация успешны
        if (response.ok) {
          const loginResult = await response.json();

          const userWithId: User = {
            id: loginResult.user_id, 
            ...loginResult.user,
          };

          setUserData(userWithId);
          setToken(loginResult.token);
          localStorage.setItem('token', loginResult.token);

          // Запрос баланса после успешного логина
          try {
            const balanceResponse = await fetch(`${API_URL}/user/get_points`, {
              headers: { Authorization: `Bearer ${loginResult.token}` },
            });

            if (balanceResponse.ok) {
              const balanceData = await balanceResponse.json(); 
              setUserData({...userWithId, balance: balanceData}); // Обновляем баланс в userData
              console.log("Баланс успешно загружен:", balanceData);
            } else {
              console.error('Ошибка при загрузке баланса:', balanceResponse.statusText);
              setError('Не удалось загрузить баланс'); 
            }
          } catch (error) {
            console.error('Ошибка при загрузке баланса:', error);
            setError('Ошибка сети'); 
          } finally {
            setIsLoggedIn(true); // Пользователь вошел в систему
            setLoading(false);   // Загрузка завершена
          }

        } else {
          console.error('Ошибка входа или регистрации:', response.statusText);
          setError('Ошибка входа или регистрации');
          setLoading(false);  
        }
      } catch (error) {
        console.error('Ошибка отправки данных:', error);
        setError('Ошибка сети');
        setLoading(false);
      }
    };

    sendData();
  }, []); 

  // Функция для обновления баланса в App.tsx
  const handleBalanceUpdate = (newBalance: number) => {
    setUserData(prevUserData => ({
      ...prevUserData,
      balance: newBalance,
    }));
  };

  // Отображение экрана загрузки или ошибки
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <Routes>
        {/* Маршруты приложения */}
        <Route 
          path="/" 
          element={isLoggedIn ? (
            <Homescreen 
              userData={userData} 
              token={token} 
              onBalanceUpdate={handleBalanceUpdate} // Передача функции обновления баланса
            />
          ) : (
            <Loading />
          )} 
        />
        <Route path="/earn" element={isLoggedIn ? <Earn userData={userData} token={token} setUserData={setUserData} /> : <Loading />} /> 
        <Route path="/friends" element={isLoggedIn ? <Friends userData={userData} token={token} setUserData={setUserData} /> : <Loading />} />
        <Route path="/mine" element={isLoggedIn ? <Mine userData={userData} token={token} setUserData={setUserData} /> : <Loading />} /> 
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="airdrop" element={isLoggedIn ? <Airdrop userData={userData} token={token} /> : <Loading />} />
      </Routes>
    </div>
  );
}

export default App;
