import { deleteProject } from "./deleteProject";
import { updateMain } from "./updateMain";
import { data } from "../internal/data";
import { updateSidebar } from "./updateSidebar";

export function createProjectElement(project) {
  const projDiv = document.createElement("div");
  projDiv.classList.toggle("project-name");
  projDiv.textContent = project.name;
  projDiv.id = project.id;

  const deleteProjectButton = deleteProject(project.id);

  //projDiv.appendChild(deleteProjectButton);

  // clicking on a project will take us to that project
  projDiv.addEventListener("click", (e) => {
    // Step 1: Get Input
    //const id = projDiv.id;
    // Step 2: Change Internal State
    data.setActiveId(projDiv.id);

    // Step 3: Render views
    updateSidebar();
    updateMain();
  });

  const projDivContainer = document.createElement("li");
  projDivContainer.classList.toggle("project");
  projDivContainer.append(projDiv, deleteProjectButton);

  return projDivContainer;
}
