import { initialState } from "../store";

import {
  ADD_TASK,
  DEC_TOMATO,
  DELETE_TASK,
  EDIT_TASK,
  INC_TOMATO, SET_TASKS, SET_THEME, SET_TIME, SET_TIMER_EVENT, SET_TIMER_MODE, SET_TIMER_PART, setTime, STAT_ADD,
} from './actions'
import { generateRandomString } from '../util/react/generateRandomIndex'

export type TaskType = { id: string; complete: number, title: string; tomato: number, done: boolean};
export type StatType = { id: string; date: Date; workTime: number, pauseTime: number; tomato: number, stops: number};
export type RootState = {
  theme: string
  stats: Array<StatType>
  tasks: Array<TaskType>;
  timerModel: any
};

export const rootReducer: (state: any, action: any) => RootState = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_THEME: {
      return {...state, theme: action.theme}
    }
    case SET_TIMER_EVENT: {
      return {...state,timerModel: {...state.timerModel, event: action.event}}
    }
    case SET_TIMER_PART: {
      return {...state,timerModel: {...state.timerModel, part: action.part}}
    }
    case SET_TIME: {
      return {...state,timerModel: {...state.timerModel, time: action.time}}
    }
    case SET_TIMER_MODE: {
      return {...state,timerModel: {...state.timerModel, mode: action.mode}}
    }
    case STAT_ADD: {
      if(state.stats.find((el:StatType)=>{
        return new Date(el.date).getDate() === new Date().getDate()
      })) {
        return {...state,stats: state.stats.map((el:StatType)=>{
          if (new Date(el.date).getDate() === new Date(action.stat.date).getDate()) {
            return {...el,
              stops : el.stops + action.stat.stops,
              pauseTime: el.pauseTime + action.stat.pauseTime,
              workTime: el.workTime + action.stat.workTime,
              tomato: el.tomato + action.stat.tomato
            }
          } else {
            return el
          }
          })}
      } else {
        return {...state, stats: state.stats.concat({...action.stat, id: generateRandomString()})}
      }
    }
    case SET_TASKS: {
      return {
        ...state, tasks: action.tasks
      }
    }
    case INC_TOMATO:
      return {
        ...state,
        tasks: state.tasks.map((task: TaskType) => {
          if (task.id === action.id)
            return { ...task, tomato: task.tomato + 1 };
          return task;
        }),
      };
    case DEC_TOMATO:
      if (state.tasks.find((el:TaskType)=>el.id === action.id).tomato > 1){
        return {
          ...state,
          tasks: state.tasks.map((task: TaskType) => {
            if (task.id === action.id) {
              if (task.tomato === 1){
                return { ...task, tomato: task.tomato - 1, complete: task.complete + 1, done: true};
              }
              return { ...task, tomato: task.tomato - 1, complete: task.complete + 1 };
            }
            return task;
          }),
        };
      } else {
        return {
          ...state,
          tasks: state.tasks.filter((task: TaskType) => {
            return task.id !== action.id
          }),
        };
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task: TaskType) => {
          if (task.id === action.id) return { ...task, title: action.title };
          return task;
        }),
      };
    case ADD_TASK:
      return { ...state, tasks: state.tasks.concat(action.task) };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task: TaskType) => task.id !== action.id),
      };
  }
  return { ...state };
};
