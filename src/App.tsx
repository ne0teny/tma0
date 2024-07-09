import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Homescreen';
import Mine from './Mine';
import Earn from './Earn';
import Friends from './Friends';
import Settings from './Settings';
import Loading from './Loading';

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
          // Отправляем пустой объект, если данные пользователя Telegram недоступны
          body: JSON.stringify({ data: window.Telegram?.WebApp?.initDataUnsafe?.user || {} }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
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
        <Route path="/mine" element={<Mine />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
  