"use strict";

import { addprojectSwitchEventHandler } from "./projectModal";
import { nameToClassName } from "./helper";
import { renderDeleteElement } from "./renderDeleteElement";
import { addDeleteEventHandler } from "./addDeleteEventHandler";

/* Input: Todo Object, Output: Todo Dom Element */
function renderTodo(todoObject, projectName) {
    
    const todoDiv = document.createElement("div");
    todoDiv.classList.toggle("todo");

    const todoInfoDiv = document.createElement("div");
    todoInfoDiv.classList.toggle("todo-info");

    const summary = document.createElement("summary");
    summary.textContent = todoObject.title;

    const p = document.createElement("p");
    p.textContent = todoObject.description;

    const descElement = document.createElement("details");
    descElement.append(summary, p);

    const priority = document.createElement("div");
    priority.textContent = `${todoObject.priority} Priority`;

    const date = document.createElement("div");
    date.textContent = `Due: ${todoObject.dueDate}`;

    todoInfoDiv.append(descElement, priority, date);

    const deleteElement = renderDeleteElement();
    deleteElement.classList.toggle(nameToClassName(projectName));
    deleteElement.classList.toggle(nameToClassName(todoObject.title));
    addDeleteEventHandler(deleteElement);

    todoDiv.classList.toggle(nameToClassName(todoObject.title));

    todoDiv.append(todoInfoDiv, deleteElement);

    return todoDiv;
}

/* Input: Project Object, Output: Project Details Dom Updated */
function renderProjectDetails(projectObject) {

    const projectDetails = document.querySelector(".project-details");
    projectDetails.innerHTML = "";

    if(projectObject.todoList != undefined) {
        projectObject.todoList.forEach(todo => {
            const todoDiv = renderTodo(todo, projectObject.name);
            projectDetails.appendChild(todoDiv);
        });
    }
}

/* Input: Project Name, Output: Project nav Dom Element */
function renderProjectNavItem(projectName) {

    const className = nameToClassName(projectName);

    const projectNavItem = document.createElement("div");
    projectNavItem.classList.toggle("project-nav-item");
    projectNavItem.classList.toggle(className);

    addprojectSwitchEventHandler(projectNavItem);

    projectNavItem.textContent = projectName;

    return projectNavItem;
}

/* Input: List of Projects, Output: updated project nav bar */
function renderProjectNavBar(projectList) {

    const projectNavBar = document.querySelector(".project-nav");
    projectNavBar.innerHTML = "";

    projectList.forEach(project => {
        const projectNavItem = renderProjectNavItem(project.name);
        projectNavBar.appendChild(projectNavItem);
    });
}

function renderSelectMenu(projectList) {

    const select = document.querySelector("#select");
    select.innerHTML = "";

    projectList.forEach(project => {
        const option = document.createElement("option");
        option.textContent = project.name;
        select.appendChild(option);
    })
}

export { renderProjectDetails, renderProjectNavBar, renderSelectMenu };