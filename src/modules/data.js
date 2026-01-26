import { Project } from "./project";

const datalist = () => {
  const projectList = [];

  function isEmpty() {
    if (projectList.length == 0) {
      return true;
    } else {
      return false;
    }
  }

  const findProject = (id) => {
    const project = projectList.find((x) => x.id === id);
    const index = projectList.indexOf(project);

    return { project, index };
  };

  const insertProject = (name) => {
    const project = new Project(name);
    projectList.push(project);
  };

  const insertTodo = (projectdId, title, priority, dueDate, description) => {
    const { project } = findProject(projectdId);
    project.insertTodo(title, priority, dueDate, description);
  };

  // removes project from list, only if list is non-empty
  const removeProject = (id) => {
    const { index } = findProject(id);
    if (isEmpty()) {
      console.log("Cannot delete from empty project list!");
      return 2;
    } else {
      projectList.splice(index, 1);
      return 0;
    }
  };

  const removeTodo = (projectId, todoId) => {
    const { project } = findProject(projectId);
    project.removeTodo(todoId);
  };

  const print = () => {
    console.log("All data: ");
    projectList.forEach((item) => {
      item.print();
      console.log("========");
    });
  };

  // markdone
  const markDone = () => {};

  return {
    projectList,
    insertProject,
    insertTodo,
    removeProject,
    removeTodo,
    print,
  };
};

export const data = datalist();
data.insertProject("Default");
