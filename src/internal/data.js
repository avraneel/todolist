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

    let ls = JSON.parse(localStorage.getItem("projectList"));
    ls.push(project);
    localStorage.setItem("activeId", JSON.stringify(activeId));
    localStorage.setItem("projectList", JSON.stringify(ls));
    // console.log(activeId);
    //return active;
  };

  const insertTodo = (projectId, title, priority, dueDate, description) => {
    const { project, index } = findProject(projectId);
    setActiveId(projectId);
    project.insertTodo(title, priority, dueDate, description);

    let ls = JSON.parse(localStorage.getItem("projectList"));
    //console.log(project.todoList[0]);
    ls[index].todoList.push(project.todoList.at(-1));
    localStorage.setItem("activeId", JSON.stringify(activeId));
    localStorage.setItem("projectList", JSON.stringify(ls));
  };

  // removes project from list, only if list is non-empty
  const removeProject = (id) => {
    const { index } = findProject(id);
    if (isEmpty()) {
      console.log("Cannot delete from empty project list!");
      return 2;
    } else {
      //let ls = JSON.parse(localStorage.getItem("projectList"));
      projectList.splice(index, 1);
      localStorage.setItem("projectList", JSON.stringify(projectList));
      return 0;
    }
  };

  const removeTodo = (projectId, todoId) => {
    const { project, index } = findProject(projectId);
    project.removeTodo(todoId);
    localStorage.setItem("projectList", JSON.stringify(projectList));
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
localStorage.setItem("projectList", JSON.stringify(data.projectList));
localStorage.setItem("activeId", JSON.stringify(data.activeId));
data.insertProject("Default");
// console.log(data.activeId);
