import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Homescreen';
import Earn from './Earn';
import Loading from './Loading';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Friends from './Friends';

WebApp.ready();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sendData = async () => {
      try {
        const user = window.Telegram?.WebApp?.initDataUnsafe?.user || {};

        const response = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/create_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: user }),
        });

        console.log('Create user response:', response);

        if (response.status !== 200) {
          if (response.status === 409) {
            console.log('User already exists, attempting to log in...');
            const loginResponse = await fetch('https://1ded-89-107-97-177.ngrok-free.app/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: user }),
            });

            console.log('Login response:', loginResponse);

            if (!loginResponse.ok) {
              throw new Error('Failed to login existing user.');
            }

            const loginResult = await loginResponse.json();
            console.log('Login success:', loginResult);
          } else {
            throw new Error('Network response was not ok.');
          }
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
  }, []);

  return isLoading ? <Loading /> : (
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
