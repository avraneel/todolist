import { Todo } from "./todo";
import { projectList } from "./ProjectList";
import { renderProjectDetails } from "./render";

function addDeleteEventHandler(deleteElement) {
  const projectClassName = deleteElement.classList[1];

  //console.log(deleteElement.parentElement);
  const todoClassName = deleteElement.classList[2];
  console.log(todoClassName);

  deleteElement.addEventListener("click", () => {
    const projectObject = projectList.findProjectByClassName(projectClassName);
    console.log(projectObject);
    console.log(projectClassName);
    console.log(todoClassName);
    const toDoObj = projectObject.findTodoByClassName(todoClassName);
    console.log(toDoObj);
    projectObject.removeTodo(toDoObj.title);
    renderProjectDetails(projectObject);
    console.log(projectObject);
    //const todoIndex = projectObject.indexOf(0);
  });
}

export { addDeleteEventHandler };
