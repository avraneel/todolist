import { data } from "../internal/data";
import { updateMain } from "./updateMain";

export function createDeleteButton(projectId, todoId) {
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";

  deleteButton.classList.toggle("delete-btn");
  deleteButton.classList.toggle(projectId);
  deleteButton.id = todoId;

  deleteButton.addEventListener("click", () => {
    const todoId = deleteButton.id;
    const projectId = deleteButton.classList[1];

    data.removeTodo(projectId, todoId);
    updateMain();
  });

  return deleteButton;
}
