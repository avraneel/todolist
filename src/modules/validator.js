"use strict";

function checkTitleValidity(title) {
  if (title === "") {
    return false;
  } else {
    return true;
  }
}

function isDateValid(date) {
  if (date < Date.now()) {
    return false;
  } else {
    return true;
  }
}

export { isDateValid };
