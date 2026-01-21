"use strict";

import { Project } from "./project.js"

// Add a project
const proj1 = new Project("default");

proj1.addTodo("Shop dinner", 0, "Buy food for dinner", "25th Jan, 2025");

proj1.displayProject();