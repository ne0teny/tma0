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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    WebApp.ready();

    const sendData = async () => {
      const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

      try {
        const response = await fetch('http://localhost:8000/user/create_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: user }),
        });

        console.log('Create user response:', response);

        if (!response.ok) {
          console.log('User already exists, attempting to log in...');
          const loginResponse = await fetch('http://localhost:8000/user/login_user', {
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
          }
        } else {
          const createUserResult = await response.json();
          console.log('User created successfully:', createUserResult);
          setIsLoggedIn(true);
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
        <Route path="/" element={isLoggedIn ? <Homescreen /> : <Loading />} />
        <Route path="/earn" element={isLoggedIn ? <Earn /> : <Loading />} />
        <Route path="/friends" element={isLoggedIn ? <Friends /> : <Loading />} />
        <Route path="/mine" element={<Mine />} /> 
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="airdrop" element={<Airdrop />} /> 
      </Routes>
    </div>
  );
}

export default App;
