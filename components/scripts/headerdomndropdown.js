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

  const submenuBtn = document.querySelector('.submenu-toggle');
  const submenuList = document.querySelector('.submenu-list');

  const closeSubmenu = () => {
    if (!submenuBtn || !submenuList) return;
    submenuList.classList.remove('show');
    submenuBtn.setAttribute('aria-expanded', 'false');
  };

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

      if (!willShow) closeSubmenu();
    });
  });

  if (submenuBtn && submenuList) {
    submenuBtn.addEventListener('click', e => {
      e.stopPropagation();
      const willShow = !submenuList.classList.contains('show');
      submenuList.classList.toggle('show');
      submenuBtn.setAttribute('aria-expanded', willShow ? 'true' : 'false');
    });
  }

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

    if (
      submenuBtn &&
      submenuList &&
      submenuList.classList.contains('show') &&
      !submenuList.contains(e.target) &&
      !submenuBtn.contains(e.target)
    ) {
      closeSubmenu();
    }
  });
}

export function initHeader() {
  initDropdowns();
}

export function initHeader2() {
  // placeholder for future header2 initialization
}