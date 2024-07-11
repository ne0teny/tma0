import React, { useEffect, useState } from 'react';
import './Loading.scss';
import image from './img/Frame loading.png';

const Loading: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    fetch('https://api.example.com/data') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="loading-container">
      <img src={image} alt="Background" className="background-image" />
      <div className="loading-spinner"></div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Loading;
