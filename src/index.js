"use strict";

import { Project } from "./project.js"

function createProject(name) {
    return new Project("default");
}

const proj1 = createProject("default");

proj1.addTodo("Shop dinner", 0, "Buy food for dinner", "25th Jan, 2026");
proj1.addTodo("Meditation", 1, "Mediate for 30 minutes", "3rd Feb, 2026");
proj1.addTodo("Finish homework", 0, "Solve all 50 math problems", "2nd Jan, 2026");

proj1.displayProject();

proj1.removeToDo(1);
proj1.markComplete(0);

proj1.displayProject();
