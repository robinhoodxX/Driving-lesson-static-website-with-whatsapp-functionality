export function initWindowPopup() {
  if (typeof document === "undefined" || typeof window === "undefined") return;

  const modal = document.getElementById("conditionsModal");
  const trigger = document.getElementById("openModalBtn");
  const closeX = document.getElementById("closeModalBtn");
  const closeBtn2 = document.getElementById("closeModalBtn2");

  if (!modal || !trigger) return;

  const openModal = () => {
    modal.hidden = false;
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.hidden = true;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  };

  closeModal();

  trigger.addEventListener("click", (event) => {
    event.preventDefault();
    openModal();
  });

  closeX?.addEventListener("click", closeModal);
  closeBtn2?.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
}