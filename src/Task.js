/* This class creates a Task Object.
Task object stores the following:
    - The title of the task
    - The priority number
    - The due date
    - The description
    - Task status (boolean)
*/

"use strict";

import Priority from "./Priority";

export default class Task {

    constructor(title, priority, description, dueDate) {
        this.title = title;
        this.priority = priority;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }

    print() {
        console.log(JSON.stringify(this));
    }
};


const task1 = new Task(
    "Cook Food",
    1, 
    "I need to cook dinner",
    "2nd Jan, 2026",
)

task1.print();

