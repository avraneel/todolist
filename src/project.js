"use strict";

import Todo from "./todo.js";

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

        const h3 = document.createElement("h3");
        h3.textContent = this.name;

        const ul = document.createElement("ul");
        this.todolist.forEach(el => {
            const li = document.createElement("li");
            li.innerHTML = el.renderTodo().innerHTML;
            ul.appendChild(li);
        });

        projectContainer.append(h3, ul);
        return projectContainer;
    }
}