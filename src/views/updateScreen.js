/**
 * 1. Get state of current data
 * 2. Clear .sidebar and main by textContent = ""
 * 3. Display both .sidebar and main
 */

import { data } from "../internal/data";
import { addToSideBar } from "./addToSidebar";
import { updateSidebar } from "./updateSidebar";

function updateScreen() {
  const main = document.querySelector("main");

  sideBar.textContent = "";
  main.textContent = "";

  updateSidebar();

  // update main
}
