"use strict";

const plist = document.querySelector(".projectlist");

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

    renderTodo() {
        const todoContainer = document.createElement("div");
        todoContainer.classList.toggle("todo");

        const title = document.createElement("p");
        title.textContent = this.title;

        const descelement = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = "Description";
        descelement.appendChild(summary);
        const description = document.createElement("p");
        description.textContent = this.description;
        descelement.appendChild(description);
        
        const date = document.createElement("p");
        date.textContent = this.dueDate;
        
        todoContainer.append(title, descelement, date);

        return todoContainer;
    }

    markComplete() {
        this.complete = true;
    }
};

