(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),

      modalSecond: document.querySelector("[data-modal-second]"),
      openModalBtnSecond: document.querySelector("[data-modal-open-second]"),
      closeModalBtnSecond: document.querySelector("[data-modal-close-second]"),

      modalBrend: document.querySelector("[data-modal-brand]"),
      openModalBtnBrand: document.querySelector("[data-modal-open-brand]"),
      closeModalBtnBrand: document.querySelector("[data-modal-close-brand]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    refs.openModalBtnSecond.addEventListener("click", openProducts);
    refs.closeModalBtnSecond.addEventListener("click", openProducts);

    refs.openModalBtnBrand.addEventListener("click",  openBrand);
    refs.closeModalBtnBrand.addEventListener("click",  openBrand);

    function toggleModal() {
      document.body.classList.toggle("backdrop");
      refs.modal.classList.toggle("is-hidden");
    }
    function openProducts(){
        document.body.classList.toggle("backdrop_desert");
        refs.modalSecond.classList.toggle("hidden");
    }
    function openBrand(){
        document.body.classList.toggle("backdrop_desert");
        refs.modalBrend.classList.toggle("hid");
    }

    // window.addEventListener("keydown", closeModal)
    // function closeModal(event){
    //   event.preventDefault();
    //   if (event.code === "Escape"){
    //     toggleModal(),
    //     once
    //   }
      
    // }
  })();