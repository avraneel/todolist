"use strict";

function modalOpenCloseHandler(openBtn, closeBtn, modal) {

    openBtn.addEventListener("click", () => {
        modal.showModal();
    });

    closeBtn.addEventListener("click", () => {
        modal.close();
    })
}

export { modalOpenCloseHandler };