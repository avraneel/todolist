"use strict";

import { nameToClassName } from "./helper";

const projectList = {
    
    listOfProjects: [],

    findProject: (projectName) => {
        return projectList.listOfProjects.find(x => x.name === projectName);
    },

    findProjectByClassName: (className) => {
        return projectList.listOfProjects.find(x => nameToClassName(x.name) === className);
    }
};

export { projectList };