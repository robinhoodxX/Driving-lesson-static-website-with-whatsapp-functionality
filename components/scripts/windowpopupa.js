export function initWindowPopup() {
  const modal = document.getElementById("conditionsModal");
  const openBtns = document.querySelectorAll('[id="openModalBtn"]');
  const closeX = document.getElementById("closeModalBtn");
  const closeBtn2 = document.getElementById("closeModalBtn2");

  if (!modal) return;

  const openModal = () => {
    modal.hidden = false;
    modal.style.display = "flex";
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.style.display = "none";
  };

  openBtns.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  if (closeX) {
    closeX.addEventListener("click", closeModal);
  }

  if (closeBtn2) {
    closeBtn2.addEventListener("click", closeModal);
  }

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}