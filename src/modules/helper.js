"use strict";

function nameToClassName(name) {

    const lowercasename = name.trim().toLowerCase();
    let className = "";

    for (const char of lowercasename) {
        if (char === " ") {
            className += "-";
        }
        else {
            className += char;
        }
    }

    return className;
}

export { nameToClassName };