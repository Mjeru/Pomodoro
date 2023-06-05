import React from 'react';
import styles from './tomatostat.css';
import {Icon} from '../../Icon'

interface ITomatoProps {
  count: number
}

export function TomatoStat({count}: ITomatoProps) {
    if (count) return (
      <div className={styles.wrapper}>
          <div className={styles.imageContainer}>
              <div className={styles.tomatoHeader}>

                  <Icon iconName={'tomato'} />
                  <span className={styles.tomatoText}>{'x' + count}</span>
              </div>
          </div>
          <div className={styles.tomatoFooter}>
              {count + ' помидора'}
          </div>
      </div>
  );
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <div className={styles.tomatoHeader}>
                    <Icon iconName={'tomatoSad'} />
                </div>
            </div>
        </div>
    );
}
