import trashCan from '../assets/svg/trash-can.svg'

function renderDeleteElement() {

    const deleteElement = document.createElement("button");
    deleteElement.classList.toggle("delete-button");

    const deleteElementIcon = document.createElement("img");
    deleteElementIcon.src = trashCan;
    deleteElementIcon.alt = "delete";
    deleteElementIcon.classList.toggle("delete-icon");

    deleteElement.appendChild(deleteElementIcon);

    return deleteElement;

}

export { renderDeleteElement };