import { Todo } from "./modules/todo";
import { Project } from "./modules/project";
import { data } from "./modules/data";

// function print(a) {
//   console.log(JSON.parse(JSON.stringify(a)));
// }

// //data.print();

// const id = data.projectList[0].id;

// data.insertTodo(id, "cook meal", 1, "4th Jan, 2026", "lorem ipsum");

// //data.print();

// //data.print();

// const id2 = data.projectList[0].todoList[0].id;

// //data.removeTodo(id, id2);

// //data.print();

// data.insertProject("Work life");

// //data.print();

const openProjectModal = document.querySelector(".open-project-modal");
const closeProjectModal = document.querySelector(".close-project-modal");

const projectModal = document.querySelector(".project-modal");

openProjectModal.addEventListener("click", () => {
  projectModal.showModal();
});

closeProjectModal.addEventListener("click", () => {
  projectModal.close();
});
