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
    projectList.push(project);
    setActiveId(project.id);
    // console.log(activeId);
    //return active;
  };

  const insertTodo = (projectId, title, priority, dueDate, description) => {
    const { project } = findProject(projectId);
    setActiveId(projectId);
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

  const getActiveId = () => {
    return activeId.id;
  };

  const setActiveId = (id) => {
    activeId.id = id;
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
    findProject,
    getActiveId,
    setActiveId,
    isEmpty,
  };
};

export const data = datalist();
data.insertProject("Default");
localStorage.setItem("projectList", JSON.stringify(data.projectList));
localStorage.setItem("activeId", JSON.stringify(data.activeId));
// console.log(data.activeId);
