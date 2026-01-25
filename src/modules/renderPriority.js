function renderPriorityLabel() {

    const priorityLabel = document.createElement("label");

    priorityLabel.htmlFor = "priority"
    priorityLabel.textContent = "Priority";

    return priorityLabel;
}

/**
 * Creates a priority select element and appends it to the Todo form
 * @param {*} priority The priority object
 */
function renderPriority(priority) {

    const priorityItem = document.querySelector(".priority-item");

    const prioritySelect = document.createElement("select");
    prioritySelect.id = "priority";

    for (const priorityValue in priority) {

        const optionElement = document.createElement("option");

        optionElement.textContent =  priority[priorityValue];
        optionElement.value = priority[priorityValue].toLowerCase();

        prioritySelect.appendChild(optionElement);

    }

    const priorityLabel = renderPriorityLabel();
    priorityItem.append(priorityLabel, prioritySelect);

}

export { renderPriority };