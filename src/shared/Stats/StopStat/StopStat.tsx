import React from 'react';
import styles from './stopstat.css';
import { Icon } from '../../Icon'
import classNames from 'classnames'

interface IStopStatProps {
  value : number|null
}

export function StopStat({value} : IStopStatProps) {
  if (value){
    return (
        <div className={styles.wrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.text}>Остановки</h2>
            <h3 className={styles.value}>{value}</h3>
          </div>
          <div className={styles.iconSection}>
            <Icon iconName={'stop'}/>
          </div>
        </div>
    );
  }  else {
    return (
        <div className={classNames(styles.wrapper, styles.disabled)}>
            <div className={styles.textSection}>
                <h2 className={styles.text}>Остановки</h2>
                <h3 className={styles.value}>0</h3>
            </div>
            <div className={styles.iconSection}>
                <Icon iconName={'stopDis'}/>
            </div>
        </div>
    )
  }
}
