import { useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
import { useContext } from "react";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const enteredTodoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = enteredTodoRef.current!.value;

    if (enteredText!.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={enteredTodoRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
// da bih lakse saznao koji tip je potreban za event
// mogu samo da hoverujem preko event-a kada napisem inline event handler
//    <form onSubmit={(event)=> console.log(event)}>

// svaki html element ima svoj tip sa HTML prefiksom
// npr: <HTMLButtonElement>, <HTMLParagraphElement>, <HTMLLabelElement>...

// takodje na MDN Web Docs mogu da proverim tipove za sve elemente

// kada stavim ! posle vrednosti, to garantuje da u tom delu koda
// vrednost nece biti undefined, za razliku od ? kada se ostavlja mogucnost
// da varijabla bude prazna i samim tim undefined
// enteredTodoRef.current!.value
