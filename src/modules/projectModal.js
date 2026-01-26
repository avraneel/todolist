"use strict";

import { modalOpenCloseHandler } from "./modalHandler";
import { Project } from "./project";
import { projectList } from "./ProjectList";
import { getProjectInput } from "./forminput";
import {
  renderProjectDetails,
  renderProjectNavBar,
  renderSelectMenu,
} from "./render";

function projectModalOpenCloseHandler() {
  const openProjectBtn = document.querySelector(".open-project-modal");
  const closeProjectBtn = document.querySelector(".close-project-modal");
  const projectModal = document.querySelector(".project-modal");

  modalOpenCloseHandler(openProjectBtn, closeProjectBtn, projectModal);
}

/* Input: Project nav dom item, Output: on click event will cause user to move
    to that project */
function addprojectSwitchEventHandler(projectNavItem) {
  const className = projectNavItem.classList[1];

  projectNavItem.addEventListener("click", () => {
    const projectObject = projectList.findProjectByClassName(className);
    renderProjectDetails(projectObject);
  });
}

function createProjectHandler() {
  const createProjectBtn = document.querySelector(".create-project-btn");

  createProjectBtn.addEventListener("click", projectInputHandler);
}

function projectInputHandler() {
  const projectModal = document.querySelector(".project-modal");
  const projectName = getProjectInput();

  const projectObject = new Project(projectName);
  projectList.listOfProjects.push(projectObject);

  renderSelectMenu(projectList.listOfProjects);
  renderProjectDetails(projectObject);
  renderProjectNavBar(projectList.listOfProjects);

  projectModal.close();
}

export {
  projectModalOpenCloseHandler,
  createProjectHandler,
  addprojectSwitchEventHandler,
};
