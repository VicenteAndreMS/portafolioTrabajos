const boton = document.querySelector('.nav-toggle');
const menuVisible = document.querySelector('.menuDiv');
const navbarArriba = document.querySelector('.navbar-arriba')
const navToggle = document.querySelector('.nav-toggle');

boton.addEventListener('click', () =>{
    menuVisible.classList.toggle('menuVisible');
    navbarArriba.classList.toggle('navbar-arribaCambio');
    navToggle.classList.toggle('nav-toggleCambio');

})