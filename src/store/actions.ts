import { ActionCreator } from "redux";
import { generateRandomString } from "../util/react/generateRandomIndex";

export const ADD_TASK = "ADD_TASK";

export type AddTaskAction = {
  type: typeof ADD_TASK;
  task: { title: string };
};

export const addTask: ActionCreator<AddTaskAction> = (title) => ({
  type: ADD_TASK,
  task: { title, tomato: 1, id: generateRandomString() },
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
