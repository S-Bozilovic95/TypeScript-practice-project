// type mogu da koristim ako ne koristim nikakvu specificnu logiku
// u suprotnom je bolje da koristim class
// class ima i klasicnu primenu generisanja objekata ali moze da se koristi
// i kao genericki tip (pogledaj Todos.tsx/line 6)

// type Todo = {
//   id: string;
//   text: string;
// };

class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
