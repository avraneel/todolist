import { data } from "../internal/data";
import { createTodoElement } from "./createTodoElement";

export function updateMain() {
  const main = document.querySelector("main");
  main.textContent = "";

  const id = data.getActiveId();

  const h3 = document.createElement("h3");
  h3.textContent = data.findProject(id).project.name;

  main.appendChild(h3);

  const todoList = data.getTodoByProject(id);

  todoList.forEach((todoObject) => {
    const todoDiv = createTodoElement(todoObject);
    main.appendChild(todoDiv);
  });
}
