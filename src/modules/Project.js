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
}

console.log(Project.todoList);

export { Project };