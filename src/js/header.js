const header = document.querySelector('.header');
const mobMenu = document.querySelector('.mobile-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY) {
    header.classList.add('scrolled');
    mobMenu.classList.add('mob-scrolled');
  } else {
    header.classList.remove('scrolled');
    mobMenu.classList.remove('mob-scrolled');
  }
});
