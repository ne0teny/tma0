import React, { FunctionComponent, useState, useEffect } from 'react';
import styles from './scss/Airdrop.module.scss';
import Image15 from './img/image 15.png';

const API_URL = 'https://5b44-89-107-97-177.ngrok-free.app';

interface AirdropData {
  id: number;
  title: string;
  description: string;
  image: string; 
  reward: number; 
}

interface User {
  id: number;
}

interface AirdropProps {
  userData: User | null;
  token: string | null;
}

const Airdrop: FunctionComponent<AirdropProps> = ({ userData }) => {
  const [airdrops, setAirdrops] = useState<AirdropData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAirdrops = async () => {
      try {
        const response = await fetch(`${API_URL}/airdrops`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setAirdrops(data);
      } catch (error) {
        console.error('Error fetching airdrops:', error);
        setError('Ошибка при загрузке аирдропов');
      } finally {
        setLoading(false);
      }
    };

    fetchAirdrops();
  }, []);

  const handleParticipate = async (airdropId: number) => {
    if (!userData) {
      setError('Вы должны войти, чтобы участвовать в аирдропе.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/user/participate_airdrop/${airdropId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      console.log('Airdrop participation successful!');
    
    } catch (error) {
      console.error('Error participating in airdrop:', error);
      setError('Ошибка при участии в аирдропе.');
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.airdrop}>
      {airdrops.length === 0 ? (
        <div className={styles.comingSoon}>Скоро... 🤍🤍🤍</div>
      ) : (
        airdrops.map((airdrop) => (
          <div key={airdrop.id} className={styles.airdropItem}>
            <img src={airdrop.image} alt={airdrop.title} className={styles.airdropImage} />
            <div className={styles.airdropTitle}>{airdrop.title}</div>
            <div className={styles.airdropDescription}>{airdrop.description}</div>
            <button onClick={() => handleParticipate(airdrop.id)}>Участвовать</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Airdrop;
