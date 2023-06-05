import React from 'react'
import styles from './pausestat.css'
import { Icon } from '../../Icon'
import classNames from 'classnames'

interface IPauseStateProps {
    value: number | null
}

export function PauseStat({ value }: IPauseStateProps) {
    if (value) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.textSection}>
                    <h2 className={styles.text}>Время на паузе</h2>
                    <h3 className={styles.value}>{formatTime(value)}</h3>
                </div>
                <div className={styles.iconSection}>
                    <Icon iconName={'pause'} />
                </div>
            </div>
        )
    } else {
        return (
            <div className={classNames(styles.wrapper, styles.disabled)}>
                <div className={styles.textSection}>
                    <h2 className={styles.text}>Время на паузе</h2>
                    <h3 className={styles.value}>{formatTime(0)}</h3>
                </div>
                <div className={styles.iconSection}>
                    <Icon iconName={'pauseDis'} />
                </div>
            </div>
        )
    }
}

function formatTime(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600) // количество полных часов
    const minutes: number = Math.floor((seconds % 3600) / 60) // количество полных минут

    if (seconds === 0) {
        return `${minutes}м`
    }

    if (hours === 0 && minutes === 0) {
        return `${seconds}c`
    }

    if (hours === 0 && minutes !== 0) {
        return `${minutes}м`
    }
    if (minutes === 0 && hours !== 0) {
        return `${hours}ч`
    }

    const timeString = `${hours}ч ${minutes}м`
    return timeString
}
