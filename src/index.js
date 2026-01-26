import "./style.css";
import { data } from "./internal/data";
import { updateSidebar } from "./views/updateSidebar";
import { updateSelect } from "./views/updateSelect";
import { updateMain } from "./views/updateMain";

//console.log(Project.prototype);

if (localStorage.getItem("projectList") === null) {
  localStorage.setItem("projectList", JSON.stringify(data.projectList));
  localStorage.setItem("activeId", JSON.stringify(data.activeId));

  //console.log(Object.getPrototypeOf(data.projectList[0]));
  //projectPrototype = Object.getPrototypeOf(data.projectList[0]);
} else {
  const ls = JSON.parse(localStorage.getItem("projectList"));
  data.projectList = ls;
  const active = JSON.parse(localStorage.getItem("activeId"));
  data.setActiveId(active.id);

  // restore the prototype recurstively
  data.restorePrototype();
}

data.insertProject("Default");

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

const id = data.projectList[0].id;

data.insertTodo(id, "lorem", "high", "ipsum", "dolor");
data.insertTodo(id, "abc", "medium", "def", "ghi");
data.insertTodo(id, "sleep", "low", "lorem isum dolor", "no time to sleep");

//data.print();

data.insertProject("work life");
data.insertProject("personal life");

console.log(data);

updateSidebar();
updateMain();
updateSelect();

//data.print();

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
  data.print();

  // Step 3: Render Views
  updateSidebar();
  updateMain();
});

//data.print();

// OK Function
createProjectBtn.addEventListener("click", () => {
  // Step 1: Get Input
  const projectName = document.querySelector("#project-name").value;

  // Step 2: Change Internal State
  data.insertProject(projectName);
  //data.print();
  // console.log(data.activeId.id);
  // Step 3: Render views
  updateSidebar();
  updateSelect();
  updateMain();
});
