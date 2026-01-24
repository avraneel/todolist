"use strict";

import { projectList } from "./ProjectList";
import { Project } from "./Project";
import { renderProjectDetails, renderProjectNavBar, renderSelectMenu } from "./render";

function addDefault() {

    const defaultProject = new Project("Default");
    projectList.listOfProjects.push(defaultProject);

    renderProjectDetails(defaultProject);
    renderProjectNavBar(projectList.listOfProjects);
    renderSelectMenu(projectList.listOfProjects);

    const default2Project = new Project("Default2");
    projectList.listOfProjects.push(default2Project);

    renderProjectDetails(default2Project);
    renderProjectNavBar(projectList.listOfProjects);
    renderSelectMenu(projectList.listOfProjects);
}

export { addDefault };