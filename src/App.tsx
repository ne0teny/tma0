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
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 

  useEffect(() => {
    WebApp.ready();

    const sendData = async () => {
      const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

      try {
        let response = await fetch(`${API_URL}/user/create_user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: user }),
        });

        if (!response.ok) {
          response = await fetch(`${API_URL}/user/login_user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
          });
        }

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
              setUserData((prevUserData) => {
                const updatedUserData = {
                  ...prevUserData!,
                  balance: balanceData,
                };
                console.log('Updated user data:', updatedUserData);
                return updatedUserData;
              });
              console.log("Баланс успешно загружен:", balanceData);
            } else {
              console.error('Ошибка при загрузке баланса:', balanceResponse.statusText);
              setError('Не удалось загрузить баланс'); 
            }
          } catch (error) {
            console.error('Ошибка при загрузке баланса:', error);
            setError('Ошибка сети'); 
          } finally {
            setIsLoggedIn(true); 
            setLoading(false); 
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
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <Homescreen userData={userData} token={token} /> : <Loading />} />
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
