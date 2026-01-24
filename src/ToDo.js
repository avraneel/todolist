"use strict";

export default class Todo {
    constructor(title, priority, description, dueDate) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
        this.taskId = crypto.randomUUID();
    }

    displayTodo() {
        console.log(JSON.stringify(this));
    }

    renderTodo() {
        const todoContainer = document.createElement("div");

        const descelement = document.createElement("details");
        const summary = document.createElement("summary");
        summary.textContent = this.title;
        descelement.appendChild(summary);
        const description = document.createElement("p");
        description.textContent = this.description;
        descelement.appendChild(description);
        
        const date = document.createElement("p");
        date.textContent = "Due: " + this.dueDate;
        
        todoContainer.append(descelement, date);

        return todoContainer;
    }

    markComplete() {
        this.complete = true;
    }
};

