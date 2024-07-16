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

const API_URL = 'https://5b44-89-107-97-177.ngrok-free.app';

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

interface ComponentProps {
  userData: User | null;
  token: string | null;
  setUserData?: (userData: User | null) => void; // setUserData необязателен для некоторых компонентов
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<User | null>(null); 
  const [token, setToken] = useState<string | null>(localStorage.getItem('token')); 

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
          setIsLoggedIn(true);
        } else {
          console.error('Login or registration failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error sending data:', error);
      }
    };

    sendData();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={isLoggedIn ? <Homescreen userData={userData} token={token} /> : <Loading />} />
        <Route path="/earn" element={isLoggedIn ? <Earn userData={userData} token={token} setUserData={setUserData} /> : <Loading />} /> 
        <Route path="/friends" element={isLoggedIn ? <Friends userData={userData} token={token} /> : <Loading />} />
        <Route path="/mine" element={isLoggedIn ? <Mine userData={userData} token={token} setUserData={setUserData} /> : <Loading />} /> 
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="airdrop" element={isLoggedIn ? <Airdrop userData={userData} token={token} /> : <Loading />} />
      </Routes>
    </div>
  );
}

export default App;
