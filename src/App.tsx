import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Homescreen';

import Earn from './Earn';

import Loading from './Loading';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sendData = async () => {
      try {
        const response = await fetch('https://69cc-89-107-97-177.ngrok-free.app/user/create_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: window.Telegram?.WebApp?.initDataUnsafe?.user || {} }),
        });

        if (!response.ok) {
          if (response.status === 409) {
            const loginResponse = await fetch('https://69cc-89-107-97-177.ngrok-free.app/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: window.Telegram?.WebApp?.initDataUnsafe?.user || {} }),
            });

            if (!loginResponse.ok) {
              throw new Error('Failed to login existing user.');
            }
          } else {
            throw new Error('Network response was not ok.');
          }
        }

        const result = await response.json();
        console.log('Success:', result);
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

      </Routes>
    </div>
  );
}

export default App;
