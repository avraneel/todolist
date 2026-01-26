import { data } from "../internal/data";
import { updateSidebar } from "./updateSidebar";
import { updateMain } from "./updateMain";

export function deleteProject(projectId) {
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.id = projectId;

  deleteProjectButton.addEventListener("click", () => {
    const id = deleteProjectButton.id;
    data.removeProject(id);
    updateSidebar();
  });

  return deleteProjectButton;
}
