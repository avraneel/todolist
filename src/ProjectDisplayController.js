"use strict";

const openProjectBtn = document.querySelector(".open-project-modal");
const closeProjectBtn = document.querySelector(".close-project-modal");
const projectModal = document.querySelector("#project-modal");
const createProjectBtn = document.querySelector(".createprojbtn");
const projectNav = document.querySelector(".projectnav");

openProjectBtn.addEventListener("click", () => {
    addProjModal.showModal();
});

closeProjectBtn.addEventListener("click", () => {
    addProjModal.close();
})

createProjectBtn.addEventListener("click", getProjData);

function getProjData() {
    const projname = document.querySelector("#project-name").value;
    const projNavItem = document.createElement("div");
    projNavItem.classList.toggle(".project-nav-item");
    projNavItem.textContent = projname;
    projectListElement.createProject(projname);
    createSelect();
    display();
    addProjModal.close();
}