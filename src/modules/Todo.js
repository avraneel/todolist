"use strict";

/**
 * @class
 * @classdesc The Todo class stores one Todo object.
 */
class Todo {

    constructor(title, priority, dueDate, description) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.complete = false;
    }
};

export { Todo };

