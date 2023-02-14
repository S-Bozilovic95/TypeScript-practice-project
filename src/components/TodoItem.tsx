import React from "react";

type TodoItemProps = {
  text: string;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return <li>{props.text}</li>;
};
