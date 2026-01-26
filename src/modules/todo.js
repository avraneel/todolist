export class Todo {
  constructor(title, priority, dueDate, description) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.description = description;
    this.done = false;
    this.id = crypto.randomUUID();
  }

  markDone() {
    this.done = true;
  }

  print() {
    console.log(`
      title = ${this.title}
      priority = ${this.priority}
      due date = ${this.dueDate}
      description = ${this.description}
      done = ${this.done}
      id = ${this.id}
    `);
  }
}
