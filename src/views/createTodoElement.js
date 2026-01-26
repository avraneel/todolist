import { createDeleteButton } from "./deleteTodo";
import { createDoneButton } from "./doneButton";
import { data } from "../internal/data";

export function createTodoElement(todoObject) {
  const projectId = data.getActiveId();

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

  todoDiv.classList.toggle(todoObject.priority);
  const priority = document.createElement("div");
  priority.textContent = `${todoObject.priority} priority`;

  const date = document.createElement("div");
  date.textContent = `Due: ${todoObject.dueDate}`;

  const doneStatus = document.createElement("div");

  const doneButton = createDoneButton(todoObject);
  const deleteButton = createDeleteButton(projectId, todoObject.id);

  if (todoObject.done) {
    doneStatus.textContent = "Done";
    todoDiv.classList.toggle("done");
  } else {
    doneStatus.textContent = "Not done";
  }

  todoDiv.append(
    descElement,
    priority,
    date,
    doneStatus,
    doneButton,
    deleteButton,
  );

  return todoDiv;
}
