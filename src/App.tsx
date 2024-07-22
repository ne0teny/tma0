import React, { useState, useEffect } from 'react';
import './App.css';
import HomeScreen from './Homescreen'; // Обратите внимание на заглавную 'H'
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
            const userData = await response.json();
            setUserData(userData);
            await new Promise(resolve => setTimeout(resolve, 2000)); 
          } else {
            console.error('Error fetching user data:', response.statusText);
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            setIsLoading(false);
          }
        } catch (error) {
          console.error('Network error:', error);
          setIsLoading(false);
        }
      } else {
        // ... (logic for creating/logging in user, with 2-second delay)
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
          <Route path="/" element={<HomeScreen userData={userData} token={localStorage.getItem('token')} setUserData={setUserData} />} />
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
