// HABILITAR COMPONENTES DE BOOTSTRAP
// tooltip
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]',
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl),
);
//scroll smooth
const scroll = new SmoothScroll('a[href*="#"]');

setTimeout(() => {
  toast.hide()
}, 2500)