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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    WebApp.ready();

    const initializeApp = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await fetch(`${API_URL}/user/get_points`, {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (response.ok) {
            const balanceData = await response.json();
            setUserData((prevUserData) => prevUserData ? { ...prevUserData, balance: balanceData.balance } : null);
          } else {
            console.error('Ошибка получения баланса:', response.statusText);
          }
        } catch (error) {
          console.error('Ошибка сети:', error);
        }
      } else {
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};
        try {
          let response = await fetch(`${API_URL}/user/create_user`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: user }),
          });
          if (!response.ok) {
            response = await fetch(`${API_URL}/user/login_user`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: user }),
            });
          }
          if (response.ok) {
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

      setIsLoggedIn(true);
      setIsLoading(false); 
    };

    initializeApp();
  }, []);

  return (
    <div className="App">
      {isLoading ? ( 
        <Loading />
      ) : isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Homescreen userData={userData} token={localStorage.getItem('token')} />} />
          <Route path="/earn" element={<Earn userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="/friends" element={<Friends userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="/mine" element={<Mine userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="airdrop" element={<Airdrop userData={userData} token={localStorage.getItem('token')} />} />
        </Routes>
      ) : (
        <div>Пользователь не авторизован</div> 
      )}
    </div>
  );
}

export default App;
