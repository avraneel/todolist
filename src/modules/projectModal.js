"use strict";

import { modalOpenCloseHandler } from "./modalHandler";
import { Project } from "./Project";
import { projectList } from "./ProjectList";
import { renderProjectNavBar } from "./render";

function projectModalOpenCloseHandler() {

    const openProjectBtn = document.querySelector(".open-project-modal");
    const closeProjectBtn = document.querySelector(".close-project-modal");
    const projectModal = document.querySelector(".project-modal");

    modalOpenCloseHandler(openProjectBtn, closeProjectBtn, projectModal);
}

function createProjectHandler() {

    const createProjectBtn = document.querySelector(".create-project-btn");

    createProjectBtn.addEventListener("click", projectInputHandler);
}

function getProjectInputData() {

    const projectName = document.querySelector("#project-name").value;
    
    return projectName;
}

function projectInputHandler() {

    const projectModal = document.querySelector(".project-modal");
    const projectName = getProjectInputData();

    const projectObject = new Project(projectName);
    projectList.listOfProjects.push(projectObject);

    renderProjectNavBar(projectList.listOfProjects);

    projectModal.close();

}

export { projectModalOpenCloseHandler, createProjectHandler };

