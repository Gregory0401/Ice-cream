
(() => {
    const refs = {
modal: document.querySelector("[data-modalka]"),
openModal: document.querySelector("[data-modalka-open]"),
closeModal: document.querySelector("[data-modalka-close]"),
}

refs.openModalBtnSpecial.addEventListener("click",  toggleModal);
refs.closeModalBtnSpecial.addEventListener("click",  toggleModal);


function toggleModal(){
    document.body.classList.toggle("popa");
    refs.modal.classList.toggle("hidden-is");
}
})();