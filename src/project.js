"use strict";

import { Todo } from "./todo.js";

export class Project {
    constructor(name) {
        this.name = name;
        this.todolist = [];
        this.projectId = crypto.randomUUID();
    }

    addTodo(name, priority, description, dueDate) {
        const todo = new Todo(name, priority, description, dueDate, false);
        this.todolist.push(todo);
    }

    findTodo(uuid) {
        return this.todolist.find((item) => {
            item.taskId == uuid;
        });
    }

    displayProject() {
        this.todolist.forEach((item) => {
            console.log(this.name);
            console.log("============");
            item.displayTodo();
            console.log("============");
        });
    }
}