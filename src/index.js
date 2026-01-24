"use strict";

import projectListElement from "./contentlist"; 
import "./style.css";

const content = document.querySelector(".content");

const addProjBtn = document.querySelector(".addprojbtn");
const addProjModal = document.querySelector("#addprojmodal");
const createProjBtn = document.querySelector(".createprojbtn");

projectListElement.createProject("default");
createSelect();
display();

const addTaskBtn = document.querySelector(".addtaskbtn");
const addTaskModal = document.querySelector("#addtaskmodal");
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

addProjBtn.addEventListener("click", () => {
    if(addProjModal.open == false)
        addProjModal.show();
    else
        addProjModal.close();
});

createProjBtn.addEventListener("click", getProjData);

function getProjData() {
    const projname = document.querySelector("#projname").value;
    console.log(`got value ${projname}`);
    projectListElement.createProject(projname);
    createSelect();
    display();
    addProjModal.close();
}

addTaskBtn.addEventListener("click", () => {
    if(addTaskModal.open == false)
        addTaskModal.show();
    else
        addTaskModal.close();
});

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



