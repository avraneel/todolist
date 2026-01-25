"use strict";

import "./style.css";
import { projectModalOpenCloseHandler, createProjectHandler } from "./modules/projectModal";
import { todoModalOpenCloseHandler, createTodoHandler } from "./modules/todoModal";
import { addDefault } from "./modules/addDefault";

addDefault();

projectModalOpenCloseHandler();
todoModalOpenCloseHandler();

createTodoHandler();
createProjectHandler();
