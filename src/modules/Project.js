"use strict";

class Project {
    constructor(name) {
        this.name = name;
        this.todoList = [];
    }

    /* Input: Todo name, Output: Todo Object */
    findTodo(todoTitle) {
        return this.todoList.find(x => x.name === todoTitle);
    }

    removeTodo(todoTitle) {
        const index = this.todoList.indexOf(x => x.name === todoTitle);
        return this.todoList.splice(index, 1);
    }
}

export { Project };