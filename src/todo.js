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
        if(this.complete) 
            console.log(`Status: Done`);
        else
            console.log("Status: To Do");
        console.log(`Task ID ${this.taskId}`);
    }

    markComplete() {
        this.complete = true;
    }
};

