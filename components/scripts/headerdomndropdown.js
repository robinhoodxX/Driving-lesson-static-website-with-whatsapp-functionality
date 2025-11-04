fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;

    // Now header is loaded, attach events
    const dropdownBtn = document.querySelector('.dropbtn1');
    const dropdownBtn1 = document.querySelector('.dropbtn');
    const dropdownList = document.querySelector('.list1');
    const dropdownList1 = document.querySelector('.list');

    // If neither dropdown pair exists, nothing to do
    if ((!dropdownBtn || !dropdownList) && (!dropdownBtn1 || !dropdownList1)) return;

    // Helper to attach dropdown behavior to a button/list pair
    const attachDropdown = (btn, list) => {
      if (!btn || !list) return;
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent body click from firing
        list.classList.toggle('show');
      });
    };

    attachDropdown(dropdownBtn, dropdownList);
    attachDropdown(dropdownBtn1, dropdownList1);

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      [ {btn: dropdownBtn, list: dropdownList}, {btn: dropdownBtn1, list: dropdownList1} ].forEach(pair => {
        const {btn, list} = pair;
        if (!btn || !list) return;
        if (list.classList.contains('show') &&
          !list.contains(e.target) &&
          !btn.contains(e.target)) {
          list.classList.remove('show');
        }
      });
    });
  });