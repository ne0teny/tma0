import React, { FunctionComponent, useState, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from './scss/FriendsMain.module.scss';
import NavigationBar from './Navigation';
import { useNavigate } from 'react-router-dom';

import actionsheedImage from './img/ActionSheed image.png';
import frame122 from './img/Frame 122.png';
import icon from './img/Icon.svg'; 

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

interface Friend {
  id: number;
  name: string;

}

interface FriendsMainProps {
  userData: User | null;
  token: string | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const FriendsMain: FunctionComponent<FriendsMainProps> = ({ userData, token }) => {
  const navigate = useNavigate();
  const [referralLink, setReferralLink] = useState<string | null>(null);
  const [invitedFriends, setInvitedFriends] = useState<Friend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleInviteClick = async () => {
    if (referralLink) {
      try {
        await WebApp.showPopup({
          title: "Пригласить друга",
          message: `Поделитесь своей реферальной ссылкой с друзьями:\n\n${referralLink}`,
          buttons: [{ type: "default", text: "OK" }],
        });
      } catch (error) {
        console.error('Error showing popup:', error);
        setError('Ошибка при отображении реферальной ссылки');
      }
    }
  };

  useEffect(() => {
    const fetchReferralLink = async () => {
      if (userData && token) { 
        try {
          const response = await fetch(`${API_URL}/user/get_referral_link?user_id=${userData.id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setReferralLink(data.referral_link);
        } catch (error) {
          console.error('Error fetching referral link:', error);
          setError('Ошибка при загрузке реферальной ссылки');
        } finally {
          setLoading(false);
        }
      }
    };

    const fetchInvitedFriends = async () => {
      if (userData && token) { 
        try {
          const response = await fetch(`${API_URL}/user/get_friends?user_id=${userData.id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setInvitedFriends(data); 
        } catch (error) {
          console.error('Error fetching invited friends:', error);
          setError('Ошибка при загрузке списка друзей');
        }
      }
    };

    fetchReferralLink();
    fetchInvitedFriends();
  }, [userData, token]); 

  useEffect(() => {
    const initMainButton = async () => {
      await WebApp.ready(); 
      if (referralLink) {
        WebApp.MainButton.setText('Поделиться ссылкой');
        WebApp.MainButton.show();

        WebApp.MainButton.onClick(handleInviteClick);
      }
    };

    initMainButton();

    return () => {
      WebApp.MainButton.hide();
      WebApp.MainButton.offClick(initMainButton);
    };
  }, [referralLink]);

  const handleMoreBonusesClick = () => {
    navigate('/more-bonuses');
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.friendsMain}>
      <div className={styles.parent}>
        <div className={styles.div}>Пригласите друзей!</div>
        <div className={styles.div1}>Ваш приведенный друг получит приветственный бонус!</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div2}>Пригласить друга</div>
        <div className={styles.everyDarErning} onClick={handleInviteClick}> 
          <img className={styles.actionsheedImageIcon} alt="" src={actionsheedImage} />
          <div className={styles.container}>
            <div className={styles.div3}>
              {referralLink ? (
                <>
                  <div>Ваша реферальная ссылка:</div>
                  <div>{referralLink}</div>
                </>
              ) : (
                <div>Загрузка реферальной ссылки...</div>
              )}
            </div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <div className={styles.div4}>+580 000</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.div5} onClick={handleMoreBonusesClick}>Больше бонусов</div>
      <div className={styles.frameDiv}>
        <div className={styles.div6}>Список ваших друзей</div>
        <img className={styles.icon} alt="" src={icon} />
      </div>
      {invitedFriends.length > 0 ? (
        <div className={styles.friendsList}>
          {invitedFriends.map((friend) => (
            <div key={friend.id} className={styles.friendItem}>
              {friend.name}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.div7}>Вы еще не пригласили друзей</div>
        </div>
      )}

      <div className={styles.navigationContainer}>
        <NavigationBar /> 
      </div>
    </div>
  );
};

export default FriendsMain;
