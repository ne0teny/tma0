import { FunctionComponent, useRef, useState } from 'react';
import styles from './scss/Earn.module.scss';
import NavigationBar from './Navigation'; 

import frame122 from './img/Frame 122.png';
import actionSheedImage from './img/ActionSheed image.png';
import iconSvg from './img/Icon.svg'; 

const EarmMain: FunctionComponent = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    setStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    event.preventDefault();
    if (!scrollRef.current) return;
  
    const currentX = event.touches[0].clientX;

    
    
  
    requestAnimationFrame(() => { 
      const diffX = startX - currentX;
      const scrollAmount = diffX * 0.5;
      scrollRef.current!.scrollLeft += scrollAmount; 
    });
  };

  return (
    <div className={styles.earmMain}>
      <div className={styles.parent}>
        <div className={styles.div}>Ежедневные награды</div>
        <div className={styles.div1}>Заходите каждый день без пропусков и вы сможете получить увеличенный бонус на следующий день! Иначе счетчик начнется заново</div>
      </div>

      <div 
        className={styles.earmMainInner}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className={styles.everyDarErningParent} ref={scrollRef}>
          {[...Array(7)].map((_, index) => ( 
            <div className={index === 0 ? styles.everyDarErning : styles.everyDarErning1} key={index}> 
              <div className={styles.div2}>День {index + 1}</div>
              <div className={styles.instanceParent}>
                <img className={styles.frameChild} alt="Награда за день" src={frame122} />
                <img className={styles.frameItem} alt="Награда за день" src={frame122} />
              </div>
              <div className={styles.div3}>
                {index === 0 ? 500 : (index === 1 || index === 2) ? 1000 : (index === 6 ? "5k" : "2,5k")}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.button}>
        <div className={styles.div18}>Получить</div>
      </div>

      <div className={styles.group}>
        <div className={styles.div19}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning8}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
      </div>

      <div className={styles.parent1}>
        <div className={styles.div22}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="ТикТок" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="Подписчики" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="Стрелка" src={iconSvg} />
        </div>
      </div>

      <div className={styles.navigationContainer}>
      <NavigationBar /> 
     

      </div>
    </div>
  );
};

export default EarmMain;
