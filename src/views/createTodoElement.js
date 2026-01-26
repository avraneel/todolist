import { createDeleteButton } from "./deleteTodo";

export function createTodoElement(projectId, todoObject) {
  const todoDiv = document.createElement("div");
  todoDiv.id = todoObject.id;
  todoDiv.classList.toggle("todo");
  todoDiv.classList.toggle(projectId);

  const summary = document.createElement("summary");
  summary.textContent = todoObject.title;

  const p = document.createElement("p");
  p.textContent = todoObject.description;

  const descElement = document.createElement("details");
  descElement.append(summary, p);

  const priority = document.createElement("div");
  priority.textContent = `${todoObject.priority} priority`;

  const date = document.createElement("div");
  date.textContent = `Due: ${todoObject.dueDate}`;

  const deleteButton = createDeleteButton(projectId, todoObject.id);

  todoDiv.append(descElement, priority, date, deleteButton);

  return todoDiv;
}
