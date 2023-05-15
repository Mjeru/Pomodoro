import React, { useState } from "react";
import styles from "./tasklist.css";
import { Button } from "../Button";
import { Break } from "../Break";
import { generateId } from "../../util/react/generateRandomIndex";
import { Task } from "./Task";
import { store } from "../../store";
import { addTask } from "../../store/actions";
import { useSelector } from "react-redux";
import { RootState, TaskType } from "../../store/reducer";

export function TaskList() {
  const [value, setValue] = useState("");
  const list = useSelector<RootState, Array<TaskType>>((state) => state.tasks);
  const onChange = (ev: any) => {
    setValue(ev.target.value);
  };
  const clickHandler = () => {
    if (value.trim() !== "") {
      store.dispatch(addTask(value));
      setValue("");
    }
  };

  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        className={styles.taskInput}
        type={"text"}
        placeholder={"Название задачи"}
      />
      <Break top={true} size={25} />
      <Button onClick={clickHandler} text={"Добавить"} />
      <Break top={true} size={25} />
      {list.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          tomato={item.tomato}
          text={item.title}
        />
      ))}
      <div className={styles.timeBlock}>
        {formatTime(
          list.reduce((acc, el) => {
            return acc + el.tomato;
          }, 0) * 25
        )}
      </div>
    </div>
  );
}

function formatTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainderMinutes = minutes % 60;

  let result = "";
  if (hours > 0) {
    result += hours + " " + getHoursSuffix(hours);
  }
  if (remainderMinutes > 0) {
    result += " " + remainderMinutes + " минут";
  }
  if (result === "") {
    result = "0 минут";
  }

  return result.trim();
}

function getHoursSuffix(hours: number) {
  const lastDigit = hours % 10;
  if (hours >= 11 && hours <= 19) {
    return "часов";
  } else if (lastDigit === 1) {
    return "час";
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return "часа";
  } else {
    return "часов";
  }
}
