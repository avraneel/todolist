import { Project } from "./project";

export const data = {
  projectList: [],
  activeId: {
    id: "",
  },

  isEmpty() {
    if (this.projectList.length == 0) {
      return true;
    } else {
      return false;
    }
  },

  findProject(id) {
    const project = this.projectList.find((x) => x.id === id);
    const index = this.projectList.indexOf(project);

    return { project, index };
  },

  insertProject(name) {
    const project = new Project(name);
    this.projectList.push(project);
    this.setActiveId(project.id);

    let ls = JSON.parse(localStorage.getItem("projectList"));
    ls.push(project);
    localStorage.setItem("activeId", JSON.stringify(this.activeId));
    localStorage.setItem("projectList", JSON.stringify(ls));
  },

  insertTodo(projectId, title, priority, dueDate, description) {
    const { project, index } = this.findProject(projectId);
    this.setActiveId(projectId);
    project.insertTodo(title, priority, dueDate, description);

    let ls = JSON.parse(localStorage.getItem("projectList"));
    ls[index].todoList.push(project.todoList.at(-1));
    localStorage.setItem("activeId", JSON.stringify(this.activeId));
    localStorage.setItem("projectList", JSON.stringify(ls));
  },

  // removes project from list, only if list is non-empty
  removeProject(id) {
    const { index } = this.findProject(id);
    if (this.isEmpty()) {
      console.log("Cannot delete from empty project list!");
      return 2;
    } else {
      //let ls = JSON.parse(localStorage.getItem("projectList"));
      this.projectList.splice(index, 1);
      localStorage.setItem("projectList", JSON.stringify(this.projectList));
      return 0;
    }
  },

  removeTodo(projectId, todoId) {
    const { project, index } = this.findProject(projectId);
    project.removeTodo(todoId);
    localStorage.setItem("projectList", JSON.stringify(this.projectList));
  },

  print() {
    console.log("All data: ");
    console.log(`Active ID: ${this.activeId}`);
    this.projectList.forEach((item) => {
      item.print();
      console.log("========");
    });
  },

  getTodoByProject(id) {
    const { project } = this.findProject(id);
    return project.todoList;
  },

  getActiveId() {
    return this.activeId.id;
  },

  setActiveId(id) {
    this.activeId.id = id;
  },

  restorePrototype() {
    this.projectList.forEach((project) => {
      project = Object.setPrototypeOf(project, Project.prototype);
      project.restorePrototype();
    });
  },

  // markdone
  toggleTodoDone(todoId) {
    const pId = this.activeId.id;
    const { project } = this.findProject(pId);
    const { todo } = project.findTodo(todoId);
    todo.toggleDone();
  },
};
