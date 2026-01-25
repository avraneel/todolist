import { Todo } from "./Todo.js";
import { projectList } from "./ProjectList.js";

function storeTodo(todoObject) {
  const keyName = todoObject.title;

  const todoJson = JSON.stringify(todoObject);
  localStorage.setItem(keyName, todoJson);

  return todoJson;
}

function storeProjectList() {
  const projectListJson = JSON.stringify(projectList);
  localStorage.clear();
  localStorage.setItem("Project List", projectListJson);
}

export { storeTodo, storeProjectList };
