"use strict";

function checkTitleValidity(title) {
  if (title === "") {
    return false;
  } else {
    return true;
  }
}

function checkDateValidity(date) {
  if (date < Date()) {
    return false;
  } else {
    return true;
  }
}

export { checkDateValidity };
