import React, { useEffect, useState } from 'react'
import styles from './timer.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, TaskType } from '../../store/reducer'
import { Icon } from '../Icon'
import { Button } from '../Button'
import classNames from 'classnames'
import { DEC_TOMATO, decTomato, statAdd } from '../../store/actions'
import useSound from 'use-sound'
import boopSfx from '../../assets/beep.mp3'
import {useWebworker} from '../../hooks/useWorker'


const WORK = 2

const TIMEOUT = 2


export function Timer() {
    const [value, setValue] = useState(null)
    const {result, run} = useWebworker()
    const [play] = useSound(boopSfx)
    const dispatch = useDispatch()
    const task = useSelector<RootState, TaskType | undefined>((state) =>
        state.tasks.find((task) => !task.done)
    )
    const [time, setTime] = useState(WORK)
    const [part, setPart] = useState('work')
    const [mode, setMode] = useState('stop')
    const addTime = () => {
        setTime((time)=>time+60)

    }
    useEffect(()=>{
        setTime((time) => time - 1)
        checkTimer()
    },[result])
    const startTimer = () => {
        if (mode === 'stop' || mode === 'pause') {
            setMode('start')
            run('start')
        }
    }
    useEffect(()=>{
        setTime(WORK)
        setMode('stop')
        setPart('work')
    },[task])

    const checkTimer = () => {
        if (time <= 0) {
            endTimer()
        }
    }
    const stopTimer = () => {
        if (mode === 'start') {
            run('stop')
            setTime(WORK)
            setMode('stop')
        }
    }
    const pauseTimer = () => {
        if (mode == 'start') {
            setMode('pause')
            run('pause')
        }
    }
    const endTimer = () => {
        if (part == 'work') {
            dispatch(statAdd({
                date: new Date(),
                pomodoro: 1,
                pauseTime: 0,
                workTime: 1500,
                stops: 1,
            }))
            run('stop')
            setTime(TIMEOUT)
            setPart('timeout')
            setMode('stop')
            play()
        }
        if (part == 'timeout') {
            run('stop')
            setTime(WORK)
            setPart('work')
            setMode('stop')
            endTomato()
            play()
        }
    }
    const endTomato = () => {
        if (task) {
            dispatch(decTomato(task.id))
        }
    }
    const skipWork = () => {
        if (part == 'work') {
            run('stop')
            setTime(TIMEOUT)
            setPart('timeout')
            setMode('stop')
        }
    }
    const skipTimeout = () => {
        console.log('skipWork')
        endTomato()
    }
    if (!task) {
        return <div>123</div>
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
                            type={'disabledR'}
                        />
                    ) : (
                        <Button
                            onClick={stopTimer}
                            text={'Стоп'}
                            type={'disabledR'}
                        />
                    )
                ) : (
                    <Button
                        onClick={skipTimeout}
                        text={'Пропустить'}
                        type={'disabledR'}
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
