"use strict";

import { modalOpenCloseHandler } from "./modalHandler";
import { Project } from "./Project";
import { projectList } from "./ProjectList";
import { renderProjectDetails, renderProjectNavBar, renderSelectMenu } from "./render";

function projectModalOpenCloseHandler() {

    const openProjectBtn = document.querySelector(".open-project-modal");
    const closeProjectBtn = document.querySelector(".close-project-modal");
    const projectModal = document.querySelector(".project-modal");

    modalOpenCloseHandler(openProjectBtn, closeProjectBtn, projectModal);
}

/* Input: Project nav dom item, Output: on click event will cause user to move
    to that project */
function addprojectSwitchEventHandler(projectNavItem) {
    
    const projectName = projectNavItem.classList[1];

    projectNavItem.addEventListener("click", () => {

        const projectObject = projectList.findProject(projectName);
        renderProjectDetails(projectObject);
    });
}

function createProjectHandler() {

    const createProjectBtn = document.querySelector(".create-project-btn");

    createProjectBtn.addEventListener("click", projectInputHandler);
}

function getProjectInputData() {

    const projectName = document.querySelector("#project-name").value;

    const projectForm = document.querySelector(".project-form");
    projectForm.reset();
    
    return projectName;
}

function projectInputHandler() {

    const projectModal = document.querySelector(".project-modal");
    const projectName = getProjectInputData();

    const projectObject = new Project(projectName);
    projectList.listOfProjects.push(projectObject);

    renderSelectMenu(projectList.listOfProjects);
    renderProjectDetails(projectObject);
    renderProjectNavBar(projectList.listOfProjects);

    projectModal.close();

}

export { projectModalOpenCloseHandler, createProjectHandler, addprojectSwitchEventHandler };

