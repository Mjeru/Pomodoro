import React from 'react'
import styles from './datestat.css'

interface IDateProps {
    date?: string
    workTime?: number
}

export function DateStat({ date, workTime }: IDateProps) {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{date ? getDay(date) : ''}</h2>
            {workTime ? (<p className={styles.text}>

                Вы работали на задачами в течении <span className={styles.timeHighlight}>{formatTime(workTime)}</span>
            </p>) : (
                <p className={styles.text}>
                    Нет данных
                </p>
            )}
        </div>
    )
}

const getDay = (date: string): string => {
    if (date.length < 12) return date
    switch (new Date(date).getDay()) {
        case 1: {
            return 'Понедельник'
        }
        case 2: {
            return 'Вторник'
        }
        case 3: {
            return 'Среда'
        }
        case 4: {
            return 'Четверг'
        }
        case 5: {
            return 'Пятница'
        }
        case 6: {
            return 'Суббота'
        }
        case 0: {
            return 'Воскресенье'
        }
        default : return ''
    }
}

function formatTime(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600);  // количество полных часов
    const minutes: number = Math.floor((seconds % 3600) / 60);  // количество полных минут

    if (minutes === 0) {
        return `${hours} часов`;
    }
    if (hours === 0) {
        return `${minutes} минут`;
    }
    return `${hours} часов ${minutes} минут`;
}
