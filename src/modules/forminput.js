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

function getProjectInput() {
  const projectName = document.querySelector("#project-name").value;

  const projectForm = document.querySelector(".project-form");
  projectForm.reset();

  return projectName;
}

export { getTodoInput, getProjectInput };
