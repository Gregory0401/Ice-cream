(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      closeModalBtnSub: document.querySelector("[data-modal-submit]"),

      modal: document.querySelector("[data-modal]"),

      
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtnSub.addEventListener("click", toggleModal);


    
    function toggleModal() {
      document.body.classList.toggle("backdrop");
      refs.modal.classList.toggle("is-hidden");
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