"use strict";


import "./style.css";
import { projectModalOpenCloseHandler, createProjectHandler } from "./modules/projectModal";
import { todoModalOpenCloseHandler, createTodoHandler } from "./modules/todoModal";
import { renderProjectDetails, renderProjectNavBar } from "./modules/render";
import { addDefault } from "./modules/addDefault";
import { projectList } from "./modules/ProjectList";

addDefault();

projectModalOpenCloseHandler();
todoModalOpenCloseHandler();

createTodoHandler();
createProjectHandler();
