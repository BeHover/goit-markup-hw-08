(() => {
  const refs = {
    menuBtn: document.querySelector("[data-menu-button]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.menuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menuBtn.classList.toggle("is-open");
    refs.menu.classList.toggle("is-open");
  }
})();