fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // Now header is loaded, attach events
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownList = document.querySelector('.list');

    if (!dropdownBtn || !dropdownList) return;

    // Toggle dropdown on button click
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent body click from firing
      dropdownList.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      // If dropdown is open and the click is NOT inside dropdown or button
      if (dropdownList.classList.contains('show') &&
        !dropdownList.contains(e.target) &&
        !dropdownBtn.contains(e.target)) {
        dropdownList.classList.remove('show');
      }
    });
  });