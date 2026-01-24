"use strict";

import Project from "./project.js";

const projectListElement = (() => {

    const projectList = [];

    const createProject = (name) => {
        if(projectList.includes(name)) {
            console.log("Project already exists!");
            alert("Project already exists!")
            return 1;
        }
        else {
            const proj = new Project(name);
            projectList.push(proj);
            const projel = proj.renderProject();
            return projel;
        }
    }

    const displayAllProjects = () => {
        console.log(projectList); 
    }

    const renderContentList = () => {
        // const mainContent = document.createElement("div");
        // return mainContent;
    }

    return {projectList, createProject, displayAllProjects, renderContentList};
})();

export default projectListElement;