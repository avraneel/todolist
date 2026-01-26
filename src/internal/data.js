import { Project } from "./project";

const datalist = () => {
  const projectList = [];
  let activeId = {
    id: "",
  };

  const isEmpty = () => {
    if (projectList.length == 0) {
      return true;
    } else {
      return false;
    }
  };

  const findProject = (id) => {
    const project = projectList.find((x) => x.id === id);
    const index = projectList.indexOf(project);

    return { project, index };
  };

  const insertProject = (name) => {
    const project = new Project(name);
    activeId.id = project.id;
    projectList.push(project);
    // console.log(activeId);
    //return active;
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
    console.log(`Active ID: ${activeId}`);
    projectList.forEach((item) => {
      item.print();
      console.log("========");
    });
  };

  const getTodoByProject = (id) => {
    const { project } = findProject(id);
    return project.todoList;
  };

  // markdone
  const markDone = () => {};

  return {
    projectList,
    activeId,
    insertProject,
    insertTodo,
    removeProject,
    removeTodo,
    print,
    getTodoByProject,
  };
};

export const data = datalist();
data.insertProject("Default");
// console.log(data.activeId);
