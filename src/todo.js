"use strict";

export class Todo {
    constructor(title, priority, description, dueDate) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
        this.taskId = crypto.randomUUID();
    }

    displayTodo() {
        console.log(`[P${this.priority}] ${this.title}`);
        console.log(`Due Date: ${this.dueDate}`);
        console.log(this.description);
        console.log(`Status: ${this.complete}`);
        console.log(`Task ID ${this.taskId}`);
    }

    markComplete() {
        this.complete = true;
    }
};

