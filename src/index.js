import "./style.css";
import { data } from "./internal/data";
import { updateSidebar } from "./views/updateSidebar";
import { updateSelect } from "./views/updateSelect";
import { updateMain } from "./views/updateMain";

if (localStorage.getItem("projectList") === null) {
  localStorage.setItem("projectList", JSON.stringify(data.projectList));
  localStorage.setItem("activeId", JSON.stringify(data.activeId));
  data.insertProject("Default");
} else {
  const ls = JSON.parse(localStorage.getItem("projectList"));
  data.projectList = ls;
  const active = JSON.parse(localStorage.getItem("activeId"));
  data.setActiveId(active.id);

  // restore the prototype recursively
  data.restorePrototype();
}

updateSidebar();
updateMain();
updateSelect();

const openProjectModal = document.querySelector(".open-project-modal");
const closeProjectModal = document.querySelector(".close-project-modal");
const projectModal = document.querySelector(".project-modal");
const createProjectBtn = document.querySelector(".create-project-btn");

const openTodoModal = document.querySelector(".open-todo-modal");
const closeTodoModal = document.querySelector(".close-todo-modal");
const todoModal = document.querySelector(".todo-modal");
const createTodoBtn = document.querySelector(".create-todo-btn");

openProjectModal.addEventListener("click", () => {
  projectModal.showModal();
});

closeProjectModal.addEventListener("click", () => {
  projectModal.close();
});

openTodoModal.addEventListener("click", () => {
  todoModal.showModal();
});

closeTodoModal.addEventListener("click", () => {
  todoModal.close();
});

// OK Function
createTodoBtn.addEventListener("click", () => {
  // Step 1: Get Input
  const projectId = document.querySelector("#select").value;
  const title = document.querySelector("#title").value;
  const priority = document.querySelector(
    'input[name="priority"]:checked',
  ).value;
  const duedate = document.querySelector("#duedate").value;
  const description = document.querySelector("#description").value;

  // Step 2: Change Internal State
  data.insertTodo(projectId, title, priority, duedate, description);

  // Step 3: Render Views
  updateSidebar();
  updateMain();
});

// OK Function
createProjectBtn.addEventListener("click", (e) => {
  // Step 1: Get Input
  const projectName = document.querySelector("#project-name").value;

  if (projectName === "") {
    return;
  } else {
    // Step 2: Change Internal State
    data.insertProject(projectName);

    // Step 3: Render views
    updateSidebar();
    updateSelect();
    updateMain();
  }
});
