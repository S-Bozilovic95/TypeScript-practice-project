import React from "react";
import classes from "./TodoItem.module.css";

type TodoItemProps = {
  text: string;
  onRemoveTodo: () => void;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};
