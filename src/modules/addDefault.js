"use strict";

import { projectList } from "./ProjectList";
import { Project } from "./Project";
import { renderProjectDetails, renderProjectNavBar, renderSelectMenu } from "./render";
import { Todo } from "./Todo";

function addDefault() {

    const defaultProject = new Project("Default");
    projectList.listOfProjects.push(defaultProject);

    renderProjectDetails(defaultProject);
    renderProjectNavBar(projectList.listOfProjects);
    renderSelectMenu(projectList.listOfProjects);

    // const default2Project = new Project("Default2");
    // projectList.listOfProjects.push(default2Project);

    // renderProjectDetails(default2Project);
    // renderProjectNavBar(projectList.listOfProjects);
    // renderSelectMenu(projectList.listOfProjects);

    // const todo1 = new Todo("Cook Food", "1", "2nd Jan, 2026", "Cook Meals for yourself. Something less with carbs");
    // defaultProject.todoList.push(todo1);
    // renderProjectDetails(defaultProject);

    // const todo2 = new Todo("Meeting with client", "2", "4th Feb, 2026", "Please don't be late");
    // default2Project.todoList.push(todo2);
    // renderProjectDetails(default2Project);
    // renderProjectDetails(default2Project);

}

export { addDefault };