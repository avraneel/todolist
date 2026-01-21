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

    markComplete(index) {
        if(index >= 0 && index < this.todolist.length )
            this.todolist[index].markComplete();
        else
            console.log("Index Out of Range");
    }

    removeToDo(index) {
        if(this.todolist.length == 0)
            console.log("List is aleady empty");
        else {
            this.todolist.splice(index, 1);
        }
    }
 
    displayProject() {
        console.log(this.name);
        console.log("============");
        this.todolist.forEach((item) => {
            item.displayTodo();
            console.log("============");
        });
    }
}