import React, { useEffect, useState } from 'react'
import styles from './diastat.css'
import { StatType } from '../../../store/reducer'
import classNames from 'classnames'

interface IDiaStatProps {
    target: StatType | null
    stats: Array<StatType | any>
    setTarget: (target: StatType) => void
}

const noop = () => {
    //do nothing.
}

export function DiaStat({ stats, setTarget, target }: IDiaStatProps) {
    const [max, setMax] = useState(0)
    useEffect(() => {
        const maxMap = Math.max(...stats.map((el) => (el.workTime ? el.workTime : 0)))
        setMax(
            Math.ceil(maxMap / (1500 * 5)) * 1500 * 5
        )
    }, [stats])
    const clickHandler = (date: StatType) => () => {
        setTarget(date)
    }

    return (
        <div className={styles.container}>
            <div className={styles.legendWrapper}>
                <div></div>
                <div><span/><span className={styles.legedText}>{formatTime(max/5*4)}</span></div>
                <div><span/><span className={styles.legedText}>{formatTime(max/5*3)}</span></div>
                <div><span/><span className={styles.legedText}>{formatTime(max/5*2)}</span></div>
                <div><span/><span className={styles.legedText}>{formatTime(max/5*1)}</span></div>
            </div>
            <div className={styles.daysWrapper}>
                <Day
                    stat={stats[0]}
                    clickHandler={clickHandler(stats[0])}
                    target={target}
                    max={max}
                    day={'Пн'}
                />
                <Day
                    stat={stats[1]}
                    clickHandler={clickHandler(stats[1])}
                    target={target}
                    max={max}
                    day={'Вт'}
                />
                <Day
                    stat={stats[2]}
                    clickHandler={clickHandler(stats[2])}
                    target={target}
                    max={max}
                    day={'Ср'}
                />
                <Day
                    stat={stats[3]}
                    clickHandler={clickHandler(stats[3])}
                    target={target}
                    max={max}
                    day={'Чт'}
                />
                <Day
                    stat={stats[4]}
                    clickHandler={clickHandler(stats[4])}
                    target={target}
                    max={max}
                    day={'Пт'}
                />
                <Day
                    stat={stats[5]}
                    clickHandler={clickHandler(stats[5])}
                    target={target}
                    max={max}
                    day={'Сб'}
                />
                <Day
                    stat={stats[6]}
                    clickHandler={clickHandler(stats[6])}
                    target={target}
                    max={max}
                    day={'Вс'}
                />
            </div>
            <div className={styles.dioFooter} />
        </div>
    )
}

interface IDayProps {
    stat: StatType
    clickHandler: () => void
    target: StatType | null
    max: number
    day: string
}

const Day = ({ stat, clickHandler, target, max, day }: IDayProps) => {
    if (stat)
        return (
            <div className={styles.day} onClick={clickHandler}>
                <div className={styles.dayBar}>
                    <div
                        className={classNames(
                            styles.datBarInner,
                            target?.id === stat.id ? styles.selected : '',
                            !stat.workTime ? styles.disabled : ''
                        )}
                        style={{
                            height: stat.workTime
                                ? `${(stat.workTime / max) * 100}%`
                                : `5px`,
                        }}
                    />
                </div>
                <div
                    className={classNames(
                        styles.dayText,
                        target?.id === stat.id ? styles.selectedText : ''
                    )}
                >
                    {day}
                </div>
            </div>
        )
    return (
        <div className={styles.day} onClick={clickHandler}>
            <div className={styles.dayBar}>
                {
                    <div
                        className={classNames(
                            styles.datBarInner,
                            styles.disabled
                        )}
                        style={{ height: '5px' }}
                    />
                }
            </div>
            <div className={classNames(styles.dayText, '')}>{day}</div>
        </div>
    )
}

function formatTime(seconds: number): string {
    const hours: number = Math.floor(seconds / 3600);  // количество полных часов
    const minutes: number = Math.floor((seconds % 3600) / 60);  // количество полных минут

    if (minutes === 0) {
        return `${hours} ч`;
    }
    if (hours === 0) {
        return `${minutes} мин`;
    }
    return `${hours} ч ${minutes} мин`;
}


