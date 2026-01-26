import { data } from "../internal/data";

export function updateSelect() {
  const select = document.querySelector("#select");
  select.innerHTML = "";

  data.projectList.forEach((project) => {
    const option = document.createElement("option");
    option.textContent = project.name;
    option.value = project.id; // DON'T FORGET THIS!!
    select.appendChild(option);
  });
}
