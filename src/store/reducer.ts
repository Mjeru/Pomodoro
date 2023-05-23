import { initialState } from "../store";

import {
  ADD_TASK,
  DEC_TOMATO,
  DELETE_TASK,
  EDIT_TASK,
  INC_TOMATO, SET_TASKS,
} from './actions'

export type TaskType = { id: string; complete: number, title: string; tomato: number, done: boolean};
export type RootState = {
  tasks: Array<TaskType>;
};

export const rootReducer: (state: any, action: any) => RootState = (
  state = initialState,
  action
) => {
  switch (action.type) {
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
