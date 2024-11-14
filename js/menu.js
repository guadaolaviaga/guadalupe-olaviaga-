const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.navegacion');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('active');
});