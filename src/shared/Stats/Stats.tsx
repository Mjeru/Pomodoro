import React, { useEffect, useMemo, useState } from 'react'
import styles from './stats.css'
import { DateStat } from './DateStat'
import { TomatoStat } from './TomatoStat'
import { DiaStat } from './DiaStat'
import { useSelector } from 'react-redux'
import { RootState, StatType } from '../../store/reducer'
import { FocusStat } from './FocusStat'
import { PauseStat } from './PauseStat'
import { StopStat } from './StopStat'
import { StatSelect } from './StatSelect'
import { generateRandomString } from '../../util/react/generateRandomIndex'

export function Stats() {
    const stats = useSelector<RootState, Array<StatType>>(
        (state) => state.stats
    )
    const [targetDate, setTargetDate] = useState<any>(stats[0])
    const [week, setWeek] = useState('current')
    const filteredStats = useMemo(() => {
        const weekDiff = week === 'current' ? 0 : week === 'past' ? 1 : 2
        const day = new Date().getDay()
        const diff = new Date().getDate() - day + (day == 0 ? -6 : 1)
        const weekStart = new Date(
            new Date(new Date().setDate(diff - 7 * weekDiff)).setHours(
                0,
                0,
                0,
                0
            )
        )
        const weekEnd = new Date(
            new Date(new Date().setDate(diff + 7 - 7 * weekDiff)).setHours(
                0,
                0,
                0,
                0
            )
        )

        const result: Array<StatType | {id:string;date:string}> = [
            { id: generateRandomString(), date: 'Понедельник' },
            { id: generateRandomString(), date: 'Вторник' },
            { id: generateRandomString(), date: 'Среда' },
            { id: generateRandomString(), date: 'Четверг' },
            { id: generateRandomString(), date: 'Пятница' },
            { id: generateRandomString(), date: 'Суббота' },
            { id: generateRandomString(), date: 'Воскресенье' },
        ]
        stats
            .filter((el) => {
                return new Date(el.date) >= weekStart && new Date(el.date) < weekEnd
            })
            .reverse()
            .forEach((el) => {
                const day = new Date(el.date).getDay()
                result[day === 0 ? 6 : day - 1] = el
            })
        return result
    }, [week, stats])

    const setTarget = (target: StatType) => {
        setTargetDate(target)
    }
    const setWeekHandler = (value: string) => {
        switch (value) {
            case 'current': {
                setWeek('current')
                break
            }
            case 'past': {
                setWeek('past')
                break
            }
            case '2past': {
                setWeek('2past')
            }
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>Ваша активность</div>
                <StatSelect week={week} setWeek={setWeekHandler} />
                {/*<select className={styles.headerTitle}>Ваша активность</select>*/}
            </div>
            <div className={styles.statWrapper}>
                <div className={styles.date}>
                    <DateStat
                        date={targetDate.date}
                        workTime={targetDate.workTime ? targetDate.workTime : null}
                    />
                </div>
                <div className={styles.tomato}>
                    <TomatoStat count={targetDate.tomato ? targetDate.tomato : 0} />
                </div>
                <div className={styles.dio}>
                    <DiaStat
                        target={targetDate}
                        stats={filteredStats}
                        setTarget={setTarget}
                    />
                </div>
                <div className={styles.focus}>
                    <FocusStat
                        value={
                            targetDate
                                ? Math.round(
                                      (targetDate.workTime /
                                          (targetDate.workTime +
                                              targetDate.pauseTime)) *
                                          100
                                  )
                                : null
                        }
                    />
                </div>
                <div className={styles.pause}>
                    <PauseStat
                        value={targetDate ? targetDate.pauseTime : null}
                    />
                </div>
                <div className={styles.stop}>
                    <StopStat value={targetDate ? targetDate.stops : null} />
                </div>
            </div>
        </div>
    )
}
