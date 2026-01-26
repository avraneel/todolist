import { data } from "../internal/data";
import { updateSidebar } from "./updateSidebar";
import { updateMain } from "./updateMain";

export function deleteProject(projectId) {
  const deleteProjectButton = document.createElement("button");
  deleteProjectButton.textContent = "Delete";
  deleteProjectButton.id = projectId;

  deleteProjectButton.addEventListener("click", (e) => {
    if (data.projectList.length === 1) {
      e.preventDefault();
      alert("You must have atleast one project!");
    } else {
      const id = deleteProjectButton.id;
      data.removeProject(id);
      updateSidebar();
      console.log(data.getActiveId());
      console.log(id);
      // if deleting currently active project, then reset active id to next project id
      if (data.getActiveId() === id) {
        data.setActiveId(data.projectList[0].id);
      }

      updateMain();
    }
  });

  return deleteProjectButton;
}
