import React, { ReactChildren, useEffect, useRef, useState } from 'react'
import styles from './timercontainer.css';
import { useWebworker } from '../../hooks/useWorker'
import useSound from 'use-sound'
import boopSfx from '../../assets/beep.mp3'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, TaskType } from '../../store/reducer'
import { decTomato, setTime, setTimerEvent, setTimerMode, setTimerPart, statAdd } from '../../store/actions'
import { useIsMount } from '../../hooks/useMounted'

export function TimerContainer({children}: any) {
    const isMounted = useIsMount()
    const didMountRef = useRef(false);
    const [workedTime, setWorkedTime] = useState(0)
    const [pausedTime, setPausedTime] = useState(0)
    const [stops, setStops] = useState(0)
    const {result, run} = useWebworker()
    const workTime = useSelector<RootState, number>(state=>state.timerModel.options.workTime)
    const pauseTime = useSelector<RootState, number>(state=>state.timerModel.options.pauseTime)
    const task = useSelector<RootState, TaskType | undefined>((state) =>
        state.tasks.find((task) => !task.done)
    )
    const time = useSelector<RootState, number>(state => state.timerModel.time)
    const mode = useSelector<RootState, string>(state => state.timerModel.mode)
    const timerEvent = useSelector<RootState, string>(state => state.timerModel.event)
    const part = useSelector<RootState, string>(state => state.timerModel.part)
    const [play] = useSound(boopSfx)
    const dispatch = useDispatch()
    useEffect(()=>{
        if (isMounted) {
            checkTimer()
        }
    },[result])
    useEffect(()=>{
        if (isMounted){
            switch (timerEvent){
                case 'start' :{
                    startTimer()
                    dispatch(setTimerEvent(null))
                    break
                }
                case 'stop' :{
                    stopTimer()
                    dispatch(setTimerEvent(null))
                    break
                }
                case 'pause' :{
                    pauseTimer()
                    dispatch(setTimerEvent(null))
                    break
                }
                case 'skipWork' :{
                    skipWork()
                    dispatch(setTimerEvent(null))
                    break
                }
                case 'skipTimeout' :{
                    skipTimeout()
                    dispatch(setTimerEvent(null))
                    break
                }
            }
        }
    },[timerEvent])
    const startTimer = () => {
            run('start')
            dispatch(setTimerMode('start'))
    }
    const pauseTimer = () => {
            run('pause')
            dispatch(setTimerMode('pause'))
    }
    const checkTimer = () => {
        if (time <= 0) {
            endTimer()
        } else {
            if (mode === 'start'){
                setWorkedTime(workedTime=>workedTime+1)
                dispatch(setTime(time-1))
            } else {
                setPausedTime(pausedTime=>pausedTime+1)
            }
        }
    }
    const endTimer = () => {
        if (part == 'work') {
            run('stop')
            dispatch(statAdd({
                date: new Date(),
                tomato: 1,
                pauseTime: pausedTime,
                workTime: workedTime,
                stops: stops,
            }))
            dispatch(setTime(pauseTime))
            dispatch(setTimerMode('stop'))
            dispatch(setTimerPart('timeout'))
            play()
        }
        if (part == 'timeout') {
            dispatch(setTime(workTime))
            dispatch(setTimerMode('stop'))
            dispatch(setTimerPart('work'))
            endTomato()
            play()
        }
    }
    const stopTimer = () => {
        run('stop')
        dispatch(setTimerMode('stop'))
        dispatch(setTimerPart('work'))
        dispatch(setTime(workTime))
        dispatch(statAdd({
            date: new Date(),
            tomato: 0,
            pauseTime: 0,
            workTime: 0,
            stops: 1,
        }))
    }
    const endTomato = () => {
        if (task) {
            dispatch(decTomato(task.id))
            dispatch(statAdd({
                date: new Date(),
                tomato: 1,
                pauseTime: pausedTime,
                workTime: workedTime,
                stops: stops,
            }))
            setPausedTime(0)
            setWorkedTime(0)
        }
    }
    const skipWork = () => {
            run('stop')
            dispatch(setTimerMode('stop'))
            dispatch(setTimerPart('timeout'))
            dispatch(setTime(pauseTime))

    }
    const skipTimeout = () => {
        dispatch(setTimerMode('stop'))
        dispatch(setTimerPart('work'))
        dispatch(setTime(workTime))
        endTomato()
    }
  return (
      <>
        {children}
      </>
  );
}
