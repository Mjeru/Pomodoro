import React from 'react';
import styles from './focusstat.css';
import { Icon } from '../../Icon'
import classNames from 'classnames'

interface IFocusStateProps {
  value :number|null
}

export function FocusStat({value}: IFocusStateProps) {
  if (value){
    return (
        <div className={styles.wrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.text}>Фокус</h2>
            <h3 className={styles.value}>{value}%</h3>
          </div>
            <div className={styles.iconSection}>
                <Icon iconName={'focus'}/>
            </div>
        </div>
    );
  }  else {
      return (
          <div className={classNames(styles.wrapper, styles.disabled)}>
              <div className={styles.textSection}>
                  <h2 className={styles.text}>Фокус</h2>
                  <h3 className={styles.value}>{0}%</h3>
              </div>
              <div className={styles.iconSection}>
                  <Icon iconName={'focusDis'}/>
              </div>
          </div>
      );
  }

}
