import { Todo } from "../internal/todo";

export class Project {
  constructor(name) {
    this.name = name;
    this.id = crypto.randomUUID();
    this.todoList = [];
    // localStorage.setItem(this.id, this.todoList);
  }

  isEmpty() {
    if (this.todoList.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /* Input: Todo name, Output: Todo Object */
  findTodo(id) {
    const todo = this.todoList.find((x) => x.id === id);
    const index = this.todoList.indexOf(todo);
    return { todo, index };
  }

  // Creates a KV pair for the todo with id as the key
  // and inserts that into the array
  insertTodo(title, priority, dueDate, description) {
    const todo = new Todo(title, priority, dueDate, description);
    this.todoList.push(todo);
  }

  // removes todo if non-empty project
  removeTodo(id) {
    const { index } = this.findTodo(id);
    return this.todoList.splice(index, 1);
  }

  restorePrototype() {
    this.todoList.forEach((todo) => {
      todo = Object.setPrototypeOf(todo, Todo.prototype);
    });
  }

  print() {
    console.log(`
      project name = ${this.name}
      project id = ${this.id}
    `);
    if (this.isEmpty()) {
      console.log("Empty Project!");
    } else {
      console.log(`Todos:`);
      this.todoList.forEach((el) => {
        el.print();
      });
    }
  }
}
