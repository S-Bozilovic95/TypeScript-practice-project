import { FC } from "react";
import Todo from "../models/todo";
import { TodoItem } from "./TodoItem";

// generic type
type TodosProps = {
  items: Todo[];
};

export const Todos: FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
