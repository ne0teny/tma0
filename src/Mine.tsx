import { FunctionComponent, useState, useEffect } from 'react';
import styles from './scss/Mine.module.scss';
import NavigationBar from './Navigation';

import Frame122Image from './img/Frame 122.png';
import IconImage from './img/Icon.svg';
import AvatarImage from './img/Avatar.png';
import ImageCup from './img/image кубок.png';
import SubtractImage from './img/Subtract.svg';
import Component9Image from './img/Component 9.png';
import Image7Image from './img/image 7.png';

const API_URL = 'https://89a5-89-107-97-177.ngrok-free.app';

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

interface Miner {
  id: number;
  name: string;
  cost: number;
  income: number;
  level: number;
  image: string; 
}

interface MineProps {
  userData: User | null;
  token: string | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
}

const Mine: FunctionComponent<MineProps> = ({ userData, token, setUserData }) => {
  const [miners, setMiners] = useState<Miner[]>([]);
  const [ownedMiners, setOwnedMiners] = useState<Miner[]>([]);
  const [selectedTab, setSelectedTab] = useState<'shop' | 'owned'>('shop'); 
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMiners = async () => {
      try {
        const response = await fetch(`${API_URL}/miners`);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setMiners(data);
      } catch (error) {
        console.error('Error fetching miners:', error);
      }
    };

    const fetchOwnedMiners = async () => {
      if (userData && token) { 
        try {
          const response = await fetch(`${API_URL}/user/miners?user_id=${userData.id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          const data = await response.json();
          setOwnedMiners(data);
        } catch (error) {
          console.error('Error fetching owned miners:', error);
        }
      }
    };

    fetchMiners();
    fetchOwnedMiners();
  }, [userData, token]); 

  const handleBuyMiner = async (minerId: number) => {
    if (!userData || !token) {
        setError('Ошибка авторизации');
        return;
    }

    try {
      const response = await fetch(`${API_URL}/user/buy_miner/${minerId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      console.log('Miner bought successfully!');
      const updatedUserData = await response.json();
      setUserData(updatedUserData.user); 
      setOwnedMiners(updatedUserData.miners); 
    } catch (error) {
      console.error('Error buying miner:', error);
      setError('Ошибка при покупке майнера'); 
    }
  };

  return (
    <div className={styles.mineCard}>
      <div className={styles.blockOfInfoParent}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                    <img className={styles.frameChild} alt="" src={Frame122Image} />
                    <div className={styles.softSkill}>+{userData?.income || 0}</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="" src={IconImage} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="" src={IconImage} />
                    <div className={styles.softSkill}>{userData?.followers || 0}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pointBlockGroup}>
            <div className={styles.pointBlock2}>
              <div className={styles.skufsdff}>SKUFsdfF</div>
              <img className={styles.icon2} alt="" src={IconImage} />
            </div>
            <div className={styles.level89Parent}>
              <div className={styles.level89}>level {userData?.level || 0}/{userData?.level || 0 + 1}</div> 
              <div className={styles.frameWrapper}>
                <div className={styles.progressBarBackgroundWrapper}>
                  <div className={styles.progressBarBackground} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileBlock}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={userData?.avatar || AvatarImage} />
            <div className={styles.nameAndRunk}>
              <div className={styles.namee}>{userData?.name || 'Namee...'}</div>
              <div className={styles.meme}>{userData?.league || '(meme)'}</div>
            </div>
            <img className={styles.icon1} alt="" src={IconImage} />
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="" src={ImageCup} />
              <div className={styles.notificationError}>
                <div className={styles.div5}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tapbarButtonParent}>
        <div className={selectedTab === 'shop' ? styles.tapbarButtonActive : styles.tapbarButton} onClick={() => setSelectedTab('shop')}>
          <div className={styles.softSkill}>Shop</div>
        </div>
        <div className={selectedTab === 'owned' ? styles.tapbarButtonActive : styles.tapbarButton} onClick={() => setSelectedTab('owned')}>
          <div className={styles.div2}>Owned</div>
        </div>
      </div>

      {selectedTab === 'shop' && (
        <div className={styles.div6}> 
          {miners.map((miner) => (
            <div key={miner.id} className={styles.minerCard}>
              <img src={miner.image} alt={miner.name} className={styles.minerImage} />
              <div className={styles.minerName}>{miner.name}</div>
              <div className={styles.minerCost}>Стоимость: {miner.cost}</div>
              <div className={styles.minerIncome}>Доход: {miner.income} в час</div>
              <button onClick={() => handleBuyMiner(miner.id)}>Купить</button>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'owned' && (
        <div className={styles.div6}> 
          {ownedMiners.map((miner) => (
            <div key={miner.id} className={styles.minerCard}>
              <img src={miner.image} alt={miner.name} className={styles.minerImage} />
              <div className={styles.minerName}>{miner.name}</div>
              <div className={styles.minerCost}>Уровень: {miner.level}</div>
              <div className={styles.minerIncome}>Доход: {miner.income} в час</div>
            </div>
          ))}
        </div>
      )}

      <div       className={styles.div6}>
        <div className={styles.blockOfInfoParent}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockOfInfoParent}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blockOfInfoParent}>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.subtractParent}>
            <img className={styles.subtractIcon} alt="" src={SubtractImage} />
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.div7}>Дачный гений</div>
                <div className={styles.level89}>Прибыль в час</div>
                <div className={styles.level89}>+1000 поинтов</div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.component9Parent}>
                <img className={styles.frameChild} alt="" src={Component9Image} />
                <div className={styles.softSkill}>1000</div>
              </div>
            </div>
            <div className={styles.lvl100Parent}>
              <div className={styles.lvl100}>lvl 100</div>
              <div className={styles.instanceWrapper}>
                <div className={styles.image7Wrapper}>
                  <img className={styles.image7Icon} alt="" src={Image7Image} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mine;

