"use strict";

import { modalOpenCloseHandler } from "./modalHandler";
import { Todo } from "./Todo";
import { projectList } from "./ProjectList";
import { renderProjectDetails } from "./render";

function todoModalOpenCloseHandler() {
  const openTodoModal = document.querySelector(".open-todo-modal");
  const closeTodoModal = document.querySelector(".close-todo-modal");
  const todoModal = document.querySelector(".todo-modal");

  modalOpenCloseHandler(openTodoModal, closeTodoModal, todoModal);
}

function createTodoHandler() {
  const createTodoBtn = document.querySelector(".create-todo-btn");

  createTodoBtn.addEventListener("click", todoInputHandler);
}

// Gets todo form data
function getTodoInput() {
  const validFlag = false;

  const projectName = document.querySelector("#select").value;
  const title = document.querySelector("#title").value;
  const priority = document.querySelector("#priority").value;
  const duedate = document.querySelector("#duedate").value;
  const description = document.querySelector("#description").value;

  const todoForm = document.querySelector(".todo-form");
  todoForm.reset();

  return { projectName, title, priority, duedate, description };
}

function todoInputHandler() {
  const todoModal = document.querySelector(".todo-modal");
  const { projectName, title, priority, duedate, description } = getTodoInput();

  const todoObject = new Todo(title, priority, duedate, description);
  const projectObject = projectList.findProject(projectName);
  projectObject.todoList.push(todoObject);
  console.log(projectObject);
  console.log("==================");
  renderProjectDetails(projectObject);
  todoModal.close();
}

export { todoModalOpenCloseHandler, createTodoHandler };
