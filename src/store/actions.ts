import { ActionCreator } from "redux";
import { generateRandomString } from "../util/react/generateRandomIndex";
import { StatType, TaskType } from './reducer'

export const ADD_TASK = "ADD_TASK";

export type AddTaskAction = {
  type: typeof ADD_TASK;
  task: { title: string };
};

export const addTask: ActionCreator<AddTaskAction> = (title) => ({
  type: ADD_TASK,
  task: { title,complete: 0, tomato: 1, id: generateRandomString() },
});

export const INC_TOMATO = "INC_TOMATO";

export type IncTomato = {
  type: typeof INC_TOMATO;
  id: string;
};
export const incTomato: ActionCreator<IncTomato> = (id) => ({
  type: INC_TOMATO,
  id,
});

export const DEC_TOMATO = "DEC_TOMATO";

export type DecTomato = {
  type: typeof DEC_TOMATO;
  id: string;
};
export const decTomato: ActionCreator<DecTomato> = (id) => ({
  type: DEC_TOMATO,
  id,
});

export const EDIT_TASK = "EDIT_TASK";

export type EditTask = {
  type: typeof EDIT_TASK;
  id: string;
  title: string;
};

export const editTask: ActionCreator<EditTask> = (id, title) => ({
  type: EDIT_TASK,
  id,
  title,
});

export const DELETE_TASK = "DELETE_TASK";

export type DeleteTask = {
  type: typeof DELETE_TASK;
  id: string;
};

export const deleteTask: ActionCreator<DeleteTask> = (id) => ({
  type: DELETE_TASK,
  id,
});

export const SET_TASKS = 'SET_TASKS'

export type SetTasks = {
  type: typeof SET_TASKS,
  tasks: Array<TaskType>
}

export const setTasks : ActionCreator<SetTasks> = (tasks)=>({
  type: SET_TASKS,
  tasks
})

export const STAT_ADD = 'STAT_ADD'
export type StatAdd = {
  type: typeof STAT_ADD,
  stat: StatType
}

export const statAdd : ActionCreator<StatAdd> = (stat) => ({
  stat,
  type: STAT_ADD
})

export const SET_TIMER_MODE = 'SET_TIMER_MODE'
export type SetTimerMode = {
  type: typeof SET_TIMER_MODE,
  mode: string
}
export const setTimerMode : ActionCreator<SetTimerMode> = (mode)=>({
  type: SET_TIMER_MODE,
  mode
})

export const SET_TIME = 'SET_TIME'
export type SetTime = {
  type: typeof SET_TIME,
  time: number
}

export const setTime : ActionCreator<SetTime> = (time) => ({
  time,
  type: SET_TIME
})


export const SET_TIMER_PART = 'SET_TIMER_PART'
export type SetTimerPart = {
  type: typeof SET_TIMER_PART,
  part: string
}
export const setTimerPart : ActionCreator<SetTimerPart> = (part)=>({
  type: SET_TIMER_PART,
  part
})

export const SET_TIMER_EVENT = 'SET_TIMER_EVENT'
export type SetTimerEvent = {
  type: typeof SET_TIMER_EVENT,
  event: string
}
export const setTimerEvent : ActionCreator<SetTimerEvent> = (event)=>({
  type: SET_TIMER_EVENT,
  event
})

export const SET_THEME = 'SET_THEME'
export type SetTheme = {
  type: typeof SET_THEME,
  theme: string
}
export const setTheme : ActionCreator<SetTheme> = (theme)=>({
  type: SET_THEME,
  theme
})

