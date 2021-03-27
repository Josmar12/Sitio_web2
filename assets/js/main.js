let menuClick = document.getElementById('menu-click');
let enlaces = document.querySelector('.enlaces-header');

menuClick.addEventListener('click', (a) => {
    enlaces.classList.toggle('click');
});