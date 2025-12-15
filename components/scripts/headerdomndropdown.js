function initDropdowns() {
  const dropdownPairs = [
    {
      btn: document.querySelector('.dropbtn1'),
      list: document.querySelector('.list1')
    },
    {
      btn: document.querySelector('.dropbtn'),
      list: document.querySelector('.list')
    }
  ];

  dropdownPairs.forEach(({ btn, list }) => {
    if (!btn || !list) return;

    btn.addEventListener('click', e => {
      e.stopPropagation();
      // close all other dropdowns before toggling this one
      dropdownPairs.forEach(({ list: otherList }) => {
        if (otherList && otherList !== list) otherList.classList.remove('show');
      });
      const willShow = !list.classList.contains('show');
      list.classList.toggle('show');
      btn.setAttribute('aria-expanded', willShow ? 'true' : 'false');
    });
  });

  document.addEventListener('click', e => {
    dropdownPairs.forEach(({ btn, list }) => {
      if (!btn || !list) return;
      if (
        list.classList.contains('show') &&
        !list.contains(e.target) &&
        !btn.contains(e.target)
      ) {
        list.classList.remove('show');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

export function initHeader() {
  initDropdowns();
}

export function initHeader2() {
  // placeholder for future header2 initialization
}