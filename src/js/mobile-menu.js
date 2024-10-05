const menuButton = document.querySelector('.menu-button');
const mobMenu = document.querySelector('.mobile-menu');
const closeButton = document.querySelector('.close-button');
const backdrop = document.querySelector('.backdrop');

menuButton.addEventListener('click', () => {
  mobMenu.classList.toggle('hidden');
  backdrop.classList.toggle('is-hidden');
});
closeButton.addEventListener('click', () => {
  mobMenu.classList.toggle('hidden');
  backdrop.classList.toggle('is-hidden');
});
mobMenu.addEventListener('click', e => {
  if (e.target.nodeName === 'A') {
    mobMenu.classList.toggle('hidden');
    backdrop.classList.toggle('is-hidden');
  }
});
backdrop.addEventListener('click', e => {
  if (e.target.classList.contains('backdrop')) {
    mobMenu.classList.toggle('hidden');
    backdrop.classList.toggle('is-hidden');
  }
});
