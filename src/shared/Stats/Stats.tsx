import React from 'react'
import styles from './stats.css'

export function Stats() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>Ваша активность</div>
                <select className={styles.headerTitle}>Ваша активность</select>
            </div>
            <div className={styles.statWrapper}>
                <div className={styles.date}>1</div>
                <div className={styles.tomato}>2</div>
                <div className={styles.dio}>3</div>
                <div className={styles.focus}>4</div>
                <div className={styles.pause}>5</div>
                <div className={styles.stop}>6</div>
            </div>
        </div>
    )
}
