import React from 'react';
import styles from './TopSection.module.scss';

// Импорт SVG и PNG изображений
import { ReactComponent as CaretLeftIcon } from './assets/CaretLeft.svg';
import { ReactComponent as CaretRightIcon } from './assets/CaretRight.svg';
import { ReactComponent as Frame122Icon } from './assets/Frame 122.svg';
import { ReactComponent as Frame201Icon } from './assets/Frame 201.svg';
import { ReactComponent as Frame62Icon } from './assets/Frame 62.svg';

import ActionSheetImage from './assets/ActionSheed image.png'; // PNG

const Legue: React.FC = () => {
  return (
    <div className={styles.legue}>
      <div className={styles.legueInner}>
        <div className={styles.frameParent}>
          <div className={styles.caretleftParent}>
            <CaretLeftIcon className={styles.caretleftIcon} aria-label="Стрелка влево" />
            <Frame201Icon className={styles.frameChild} aria-label="Фрейм 201" />
            <CaretRightIcon className={styles.caretleftIcon} aria-label="Стрелка вправо" />
          </div>
          <div className={styles.skufologParent}>
            <div className={styles.skufolog}>Skufolog</div>
            <div className={styles.skuffParent}>
              <div className={styles.skuff}>SKUFF</div>
              <div className={styles.div}>|</div>
              <div className={styles.instanceParent}>
                <Frame122Icon className={styles.frameItem} aria-label="Фрейм 122" />
                <div className={styles.skufolog}>5,1K/25K</div>
              </div>
              <div className={styles.m}>(24,02M)</div>
            </div>
            <div className={styles.progressBarBackgroundWrapper}>
              <div className={styles.progressBarBackground} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.friensParent}>
        {/* Первый блок "friens" */}
        <div className={styles.friens}>
          <div className={styles.actionsheedImageParent}>
            <img
              className={styles.actionsheedImageIcon}
              alt="Action Sheet Image"
              src={ActionSheetImage}
            />
            <div className={styles.iliasParent}>
              <div className={styles.ilias}>Ilias</div>
              <div className={styles.frameWrapper}>
                <div className={styles.instanceGroup}>
                  <Frame122Icon className={styles.frameItem} aria-label="Фрейм 122" />
                  <div className={styles.skufolog}>888,59K</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.kWrapper}>
            <div className={styles.skufolog}>1</div>
          </div>
        </div>

        {/* Повторяющиеся блоки "friens" */}
        {[2, 3, 3, 3].map((number) => (
          <div key={number} className={styles.friens}>
            <div className={styles.actionsheedImageParent}>
              <img
                className={styles.actionsheedImageIcon}
                alt="Action Sheet Image"
                src={ActionSheetImage}
              />
              <div className={styles.iliasParent}>
                <div className={styles.ilias}>Ilias</div>
                <div className={styles.frameWrapper}>
                  <div className={styles.instanceGroup}>
                    <Frame122Icon className={styles.frameItem} aria-label="Фрейм 122" />
                    <div className={styles.skufolog}>888,59K</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.kWrapper}>
              <div className={styles.skufolog}>{number}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.friensWrapper}>
        <div className={styles.friens5}>
          <div className={styles.actionsheedImageParent}>
            <img
              className={styles.actionsheedImageIcon}
              alt="Action Sheet Image"
              src={ActionSheetImage}
            />
            <div className={styles.iliasParent}>
              <div className={styles.ilias}>Ilias</div>
              <div className={styles.frameWrapper}>
                <div className={styles.instanceGroup}>
                  <Frame122Icon className={styles.frameItem} aria-label="Фрейм 122" />
                  <div className={styles.skufolog}>888,59K</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.kWrapper3}>
            <div className={styles.skufolog}>10000+</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legue;
