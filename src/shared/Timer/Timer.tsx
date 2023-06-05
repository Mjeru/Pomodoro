import React, { useEffect, useState } from 'react'
import styles from './timer.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, TaskType } from '../../store/reducer'
import { Icon } from '../Icon'
import { Button } from '../Button'
import classNames from 'classnames'
import { DEC_TOMATO, decTomato, setTime, setTimerEvent, setTimerMode, setTimerPart, statAdd } from '../../store/actions'
import useSound from 'use-sound'
import boopSfx from '../../assets/beep.mp3'
import {useWebworker} from '../../hooks/useWorker'


const WORK = 2

const TIMEOUT = 300


export function Timer() {
    const {result, run} = useWebworker()
    const dispatch = useDispatch()
    const task = useSelector<RootState, TaskType | undefined>((state) =>
        state.tasks.find((task) => !task.done)
    )
    const workTime = useSelector<RootState, number>(state=>state.timerModel.options.workTime)
    const pauseTime = useSelector<RootState, number>(state=>state.timerModel.options.pauseTime)

    const time = useSelector<RootState, number>(state=>state.timerModel.time)
    const mode = useSelector<RootState, string>(state => state.timerModel.mode)
    const part = useSelector<RootState, string>(state => state.timerModel.part)
    const addTime = () => {
        dispatch(setTime(time+60))

    }
    const startTimer = () => {
        if (mode === 'stop' || mode === 'pause') {
            dispatch(setTimerEvent('start'))
        }
    }
    const stopTimer = () => {
        if (mode === 'start') {
            // dispatch(setTime(workTime))
            dispatch(setTimerEvent('stop'))

        }
    }
    const pauseTimer = () => {
        dispatch(setTimerEvent('pause'))
    }
    const skipWork = () => {
        if (part == 'work') {
            // dispatch(setTime(pauseTime))
            dispatch(setTimerEvent('skipWork'))
            // dispatch(setTimerPart('timeout'))
        }
    }
    const skipTimeout = () => {
        console.log('skip')
        dispatch(setTimerEvent('skipTimeout'))
    }
    if (!task) {
        return (
            <div
                className={classNames(
                    styles.wrapper,
                    part === 'work' ? styles.work : styles.timeout,
                    mode === 'start'
                        ? styles.start
                        : mode === 'pause'
                            ? styles.pause
                            : styles.stop
                )}
            >
                <header className={styles.header}>
                    <div className={styles.title}>{}</div>
                    <div className={styles.tomato}>
                        {}
                    </div>
                </header>
                <div className={styles.timeWrapper}>
                    {formatTime(0)}
                    <button className={styles.addButton}>
                        <Icon iconName={'addButton'} />
                    </button>
                </div>
                <div className={styles.buttonsBlock}>
                    {mode === 'stop' ? (
                        <Button

                            text={'Старт'}
                            type={'default'}
                        />
                    ) : mode === 'pause' ? (
                        <Button

                            text={'Продолжить'}
                            type={'default'}
                        />
                    ) : mode === 'start' ? (
                        <Button

                            text={'Пауза'}
                            type={'default'}
                        />
                    ) : (
                        ''
                    )}
                    {part === 'work' ? (
                        mode === 'pause' ? (
                            <Button

                                text={'Сделано'}
                                type={'activeR'}
                            />
                        ) : mode === 'start' ? (
                            <Button

                                text={'Стоп'}
                                type={'activeR'}
                            />
                        ) :(<Button

                            text={'Стоп'}
                            type={'disabledR'}
                        />)
                    ) : (
                        <Button

                            text={'Пропустить'}
                            type={'activeR'}
                        />
                    )}
                </div>
            </div>
        )
    }
    return (
        <div
            className={classNames(
                styles.wrapper,
                part === 'work' ? styles.work : styles.timeout,
                mode === 'start'
                    ? styles.start
                    : mode === 'pause'
                    ? styles.pause
                    : styles.stop
            )}
        >
            <header className={styles.header}>
                <div className={styles.title}>{task.title}</div>
                <div className={styles.tomato}>
                    {part === 'work'? 'Помидор ' + (task.complete + 1): 'Перерыв ' + (task.complete + 1)}
                </div>
            </header>
            <div className={styles.timeWrapper}>
                {formatTime(time)}
                <button onClick={addTime} className={styles.addButton}>
                    <Icon iconName={'addButton'} />
                </button>
            </div>
            <div className={styles.buttonsBlock}>
                {mode === 'stop' ? (
                    <Button
                        onClick={startTimer}
                        text={'Старт'}
                        type={'default'}
                    />
                ) : mode === 'pause' ? (
                    <Button
                        onClick={startTimer}
                        text={'Продолжить'}
                        type={'default'}
                    />
                ) : mode === 'start' ? (
                    <Button
                        onClick={pauseTimer}
                        text={'Пауза'}
                        type={'default'}
                    />
                ) : (
                    ''
                )}
                {part === 'work' ? (
                    mode === 'pause' ? (
                        <Button
                            onClick={skipWork}
                            text={'Сделано'}
                            type={'activeR'}
                        />
                    ) : mode === 'start' ? (
                        <Button
                            onClick={stopTimer}
                            text={'Стоп'}
                            type={'activeR'}
                        />
                    ) :(<Button
                        onClick={stopTimer}
                        text={'Стоп'}
                        type={'disabledR'}
                    />)
                ) : (
                    <Button
                        onClick={skipTimeout}
                        text={'Пропустить'}
                        type={'activeR'}
                    />
                )}
            </div>
        </div>
    )
}

function formatTime(seconds: number): string {
    if (seconds < 0) return `00:00`
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60

    const minutesString = String(minutes).padStart(2, '0')
    const secondsString = String(remainingSeconds).padStart(2, '0')

    return `${minutesString}:${secondsString}`
}
