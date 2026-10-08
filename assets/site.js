document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
const closeMenu = () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
};
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);
document.getElementById('year').textContent = new Date().getFullYear();
