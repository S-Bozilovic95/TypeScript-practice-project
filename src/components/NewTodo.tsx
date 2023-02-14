import { useRef } from "react";

export const NewTodo = () => {
  const enteredTodoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = enteredTodoRef.current?.value;

    if (enteredText!.trim().length === 0) {
      return;
    }

    console.log(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={enteredTodoRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

// da bih lakse saznao koji tip je potreban za event
// mogu samo da hoverujem preko event-a kada napisem inline event handler
//    <form onSubmit={(event)=> console.log(event)}>

// svaki html element ima svoj tip sa HTML prefiksom
// npr: <HTMLButtonElement>, <HTMLParagraphElement>, <HTMLLabelElement>...

// takodje na MDN Web Docs mogu da proverim tipove za sve elemente
