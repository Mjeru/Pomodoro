import React from "react";
import styles from "./button.css";

interface IButtonProps {
  text: string;
  onClick?: () => void;
  type?: "default" | "disabledR" | "activeR";
}

export function Button({ text, onClick, type}: IButtonProps) {

  return (
    <>
      <button onClick={onClick} className={styles[type ? type : 'default']}>
        {text}
      </button>
    </>
  );
}
