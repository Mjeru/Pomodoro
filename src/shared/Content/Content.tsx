import React from "react";
import styles from "./content.css";
import { Timer } from "../Timer";
import { TaskList } from "../TaskList";

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div>
          <h2>Ура! Теперь можно начать работать:</h2>
          <ul className={styles.infoList}>
            <li>Выберите категорию и напишите название текущей задачи</li>
            <li>Запустите таймер («помидор»)</li>
            <li>Работайте пока «помидор» не прозвонит</li>
            <li>Сделайте короткий перерыв (3-5 минут)</li>
            <li>
              Продолжайте работать «помидор» за «помидором», пока задача не
              будут выполнена. Каждые 4 «помидора» делайте длинный перерыв
              (15-30 минут).
            </li>
          </ul>
          <TaskList />
        </div>
        <Timer />
      </div>
    </div>
  );
}
