"use strict";

import projectListElement from "./contentlist"; 
import "./style.css";

const content = document.querySelector(".content");
const projectNav = document.querySelector(".projectnav");

const projNavItem = document.createElement("div");
projNavItem.classList.toggle("project-nav-item");
projNavItem.textContent = "Default";
projectListElement.createProject("Default");
projectNav.appendChild(projNavItem);
createSelect();

const addTaskBtn = document.querySelector(".addtaskbtn");
const closeTodoBtn = document.querySelector(".close-todo-btn");
const addTaskModal = document.querySelector("#todo-modal");
const createTodoBtn = document.querySelector(".createtodobtn");

function display() {
    const mainContent = projectListElement.renderContentList();
    content.innerHTML = "";
    content.appendChild(mainContent);
}

function createSelect() {
    const select = document.querySelector("select");
    select.innerHTML = "";
    projectListElement.projectList.forEach(el => {
        const option = document.createElement("option");
        option.value = el.name;
        option.textContent = el.name;
        select.appendChild(option);
    });
}

function getProjData() {
    const projname = document.querySelector("#project-name").value;
    const projNavItem = document.createElement("div");
    projNavItem.classList.toggle(".project-nav-item");
    projNavItem.textContent = projname;
    projectListElement.createProject(projname);
    createSelect();
    display();
    addProjModal.close();
}

addTaskBtn.addEventListener("click", () => {
    addTaskModal.showModal();
});

closeTodoBtn.addEventListener("click", () => {
    addTaskModal.close();
})

createTodoBtn.addEventListener("click", getToDoData);

// Tricky part
function getToDoData() {
    const projname = document.querySelector("#select").value;
    const title = document.querySelector("#title").value;
    const priority = document.querySelector("#priority").value;
    const description = document.querySelector("#description").value;
    const duedate = document.querySelector("#duedate").value;
    const project = projectListElement.projectList.find(el => el.name === projname);
    project.addTodo(title, priority, description, duedate);
    display();
    addTaskModal.close();
}



