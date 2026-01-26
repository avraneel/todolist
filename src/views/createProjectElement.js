import { deleteProject } from "./deleteProject";
import { updateMain } from "./updateMain";
import { data } from "../internal/data";
import { updateSidebar } from "./updateSidebar";

export function createProjectElement(project) {
  const projDiv = document.createElement("li");
  projDiv.classList.toggle("project");
  projDiv.textContent = project.name;
  projDiv.id = project.id;

  const deleteProjectButton = deleteProject(project.id);

  projDiv.appendChild(deleteProjectButton);

  // clicking on a project will take us to that project
  projDiv.addEventListener("click", () => {
    // Step 1: Get Input
    const id = projDiv.id;

    // Step 2: Change Internal State
    data.activeId.id = id;

    // Step 3: Render views
    updateSidebar();
    updateMain(id);
  });

  return projDiv;
}
