// dropdown.js
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-menu');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  // Close when clicking outside
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});
