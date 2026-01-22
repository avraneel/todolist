"use strict";

import { Project } from "./project.js"

// ProjectList stores the arrow function that returns an object,
// thus making ProjectList an object
const ProjectList = (() => {

    const createProject = (name) => {
        const proj = new Project(name);
        return proj;
    }

    return {createProject};
})();

const addTaskBtn = document.querySelector(".addtaskbtn");

addTaskBtn.addEventListener("click", () => {
    const addTaskModal = document.querySelector("#addtaskmodal");
    if(addTaskModal.open === false)
        addTaskModal.show();
    else
        addTaskModal.close();
})




const proj1 = ProjectList.createProject("default");

proj1.addTodo("Shop dinner", 0, "Buy food for dinner", "25th Jan, 2026");
proj1.addTodo("Meditation", 1, "Mediate for 30 minutes", "3rd Feb, 2026");
proj1.addTodo("Finish homework", 0, "Solve all 50 math problems", "2nd Jan, 2026");

// localStorage.setItem(proj1.projectId, JSON.stringify(proj1));

proj1.displayProject();

proj1.removeToDo(1);
proj1.markComplete(0);

proj1.displayProject();
