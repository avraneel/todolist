"use strict";

const projectList = {
    
    listOfProjects: [],

    findProject: (projectName) => {
        return projectList.listOfProjects.find(x => x.name === projectName);
    }
};

export { projectList };