import React, { useState, useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen';
import Earn from './Earn';
import WebApp from '@twa-dev/sdk';
import { Routes, Route, Navigate } from 'react-router-dom';
import Friends from './Friends';
import Loading from './Loading';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
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

        if (!response.ok) { // Проверяем на любой неуспешный статус (не только 200)
          console.log('User already exists, attempting to log in...');
          const loginResponse = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/login_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: user }),
          });

          console.log('Login response:', loginResponse);

          if (loginResponse.ok) {
            const loginResult = await loginResponse.json();
            console.log('Login success:', loginResult);
            setIsLoggedIn(true);
          } else {
            console.error('Login failed:', loginResponse.statusText);
            // Здесь можно добавить обработку неудачного логина (например, сообщение об ошибке)
          }
        } else {
          const createUserResult = await response.json();
          console.log('User created successfully:', createUserResult);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error sending data:', error);
        // Здесь можно добавить обработку ошибок сети или сервера
      }
    };

    sendData();
  }, []);

  return isLoggedIn ? (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </div>
  ) : (
    <Loading />
  );
}

export default App;
