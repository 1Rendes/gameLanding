const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  console.log(window.scrollY);

  if (window.scrollY) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
