import { FunctionComponent } from 'react';
import styles from './scss/Earn.module.scss';
import NavigationBar from './Navigation'; 


import frame122 from './img/Frame 122.svg';
import actionSheedImage from './img/ActionSheed image.svg';
import iconSvg from './img/Icon.svg';

const EarnMain: FunctionComponent = () => {
  return (
    <div className={styles.earnMain}>
      <div className={styles.parent}>
        <div className={styles.div}>Ежедневные награды</div>
        <div className={styles.div1}>
          Заходите каждый день без пропусков и вы сможете получить увеличенный бонус на следующий день! Иначе счетчик начнется заново
        </div>
      </div>
      <div className={styles.earnMainInner}>
        <div className={styles.everyDarErningParent}>
          <div className={styles.everyDarErning}>
            <div className={styles.div2}>День 1</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>500</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 2</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>1000</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 3</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>2,5к</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 4</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>5к</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 5</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>10к</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 6</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>25к</div>
          </div>
          <div className={styles.everyDarErning1}>
            <div className={styles.div2}>День 7</div>
            <div className={styles.instanceParent}>
              <img className={styles.frameChild} alt="" src={frame122} />
              <img className={styles.frameItem} alt="" src={frame122} />
            </div>
            <div className={styles.div3}>50к</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.div18}>Получить</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div19}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning8}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="" src={iconSvg} />
        </div>
      </div>

      <div className={styles.parent1}>
        <div className={styles.div22}>Подпишись на тик ток</div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="" src={iconSvg} />
        </div>
        <div className={styles.everyDarErning9}>
          <div className={styles.actionsheedImageParent}>
            <img className={styles.actionsheedImageIcon} alt="" src={actionSheedImage} />
            <div className={styles.container}>
              <div className={styles.div20}>Обновления и новости</div>
              <div className={styles.instanceParent5}>
                <img className={styles.frameChild13} alt="" src={frame122} />
                <div className={styles.div21}>+580 000</div>
              </div>
            </div>
          </div>
          <img className={styles.icon} alt="" src={iconSvg} />
        </div>
 

        
        <div className={styles.navigationContainer}> 
      </div>
	    
	
	  </div>
	  <div>
	  <NavigationBar /> 
      </div>  
    </div>
	
  );
};

export default EarnMain;
