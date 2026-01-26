import { data } from "../internal/data";
import { createTodoElement } from "./createTodoElement";

export function updateMain(id) {
  const main = document.querySelector("main");
  main.textContent = "";

  const todoList = data.getTodoByProject(id);

  todoList.forEach((todoObject) => {
    const todoDiv = createTodoElement(id, todoObject);
    main.appendChild(todoDiv);
  });
}
