(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    burgerMenu: document.querySelector('.mob-nav-menu')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.burgerMenu.addEventListener('click', toggleBurgerMenu)

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  function toggleBurgerMenu(e) {
    if (e.target.nodeName !== "A") {
      return
    } else {
      refs.menu.classList.toggle('is-hidden');
      document.body.classList.toggle('no-scroll');
    }
  }
})();
