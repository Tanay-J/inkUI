const cancelModal = document.querySelector("#cancelModal");
const modalWrapper = document.querySelector(".modal-wrapper");
const displayModal = document.querySelector("#displayModal");

displayModal.addEventListener("click", () => {
  modalWrapper.classList.remove("hide");
});

cancelModal.addEventListener("click", () => {
  modalWrapper.classList.add("hide");
  displayModal.classList.remove("hide");
});
