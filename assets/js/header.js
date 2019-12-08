function toggle(el) {
    el.classList.toggle('open');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    nav.classList.toggle('open');
    header.classList.toggle('open');
  }