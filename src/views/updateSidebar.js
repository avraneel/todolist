import { data } from "../internal/data";
import { createProjectElement } from "./createProjectElement";

export function updateSidebar() {
  const sidebarItems = document.querySelector(".sidebar-items");
  sidebarItems.textContent = "";

  const list = data.projectList;

  list.forEach((project) => {
    const projDiv = createProjectElement(project);
    if (project.id === data.activeId.id) {
      projDiv.classList.toggle("active");
    }
    sidebarItems.appendChild(projDiv);
  });
}
