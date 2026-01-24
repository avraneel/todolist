"use strict";

import { renderProjectDetails } from "./render";
import { projectList } from "./ProjectList";

function projectSwitcher() {
    
    const projectNavItemList = document.querySelectorAll(".project-nav-item");

    projectNavItemList.forEach(projectNavItem => {
        projectNavItem.addEventListener("click", () => {
            console.log(`Switching to ${projectNavItem.name}`);
            renderProjectDetails(projectNavItem);
        });
    });
}

/* When switching, we move to display the element we clicked on */
function projectSwitchEventHandler(projectName) {
    const projectObject = projectList.findProject(projectName);
    renderProjectDetails(projectObject);
}

export { projectSwitcher, projectSwitchEventHandler };