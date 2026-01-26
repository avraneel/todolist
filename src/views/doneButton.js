import { data } from "../internal/data";
import { updateMain } from "./updateMain";

export function createDoneButton(todoObject) {
  const doneButton = document.createElement("button");
  if (todoObject.done) {
    doneButton.textContent = "Mark Not Done";
  } else {
    doneButton.textContent = "Mark Done";
  }
  doneButton.id = todoObject.id;

  doneButton.addEventListener("click", () => {
    // 2. Change internal state
    data.toggleTodoDone(todoObject.id);

    // 3. Render Views
    updateMain();
  });

  return doneButton;
}
