"use strict";

import { Project } from "./project.js"

const plist = document.querySelector(".projectlist");
const addTaskModal = document.querySelector("#addtaskmodal");

// ProjectList stores the arrow function that returns an object,
// thus making ProjectList an object
const ProjectList = (() => {

    const projectList = [];

    const createProject = (name) => {
        const proj = new Project(name);
        projectList.push(proj);
        return proj;
    }

    const renderProject = () => {
        const project = projectList[index];

        const h3 = document.createElement("h3");
        h3.textContent = project.name;

        const ul = document.createElement("ul");
        project.todolist.forEach(el => {
            const li = document.createElement("li");
            li.textContent = el;
            ul.appendChild(li);
        });
        plist.append(h3, ul);
    }

    return {projectList, createProject, renderProject};
})();

const addTaskBtn = document.querySelector(".addtaskbtn");

addTaskBtn.addEventListener("click", () => {
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

//proj1.displayProject();

// proj1.removeToDo(1);
// proj1.markComplete(0);

//proj1.displayProject();

// const projdiv = proj1.renderProject();
// plist.appendChild(projdiv);

const submitbtn = document.querySelector(".submitbtn");
submitbtn.addEventListener("click", getFormData);

// Tricky part
function getFormData() {
    const title = document.querySelector("#title").value;
    const priority = document.querySelector("#priority").value;
    const description = document.querySelector("#description").value;
    const duedate = document.querySelector("#duedate").value;
    proj1.addTodo(title, priority, description, duedate);
    const projdiv2 = proj1.renderProject();
    plist.appendChild(projdiv2);
    addTaskModal.close();
}

const projdiv2 = proj1.renderProject();
plist.appendChild(projdiv2);