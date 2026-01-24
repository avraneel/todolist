"use strict";

import Todo from "./ToDo.js";

export default class Project {
    constructor(name) {
        this.name = name;
        this.todolist = [];
    }

    addTodo(title, priority, description, dueDate) {
        const todo = new Todo(title, priority, description, dueDate, false);
        this.todolist.push(todo);
    }

    markComplete(index) {
        if(index >= 0 && index < this.todolist.length)
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
        console.log(JSON.stringify(this));
    }

    renderProject() {
        const projectContainer = document.createElement("div");
        projectContainer.classList.toggle("project");

        this.todolist.forEach(el => {
            const todoItem = document.createElement("div");
            todoItem.classList.toggle("todo");
            todoItem.innerHTML = el.renderTodo().innerHTML;
            projectContainer.appendChild(todoItem);
        });

        return projectContainer;
    }
}