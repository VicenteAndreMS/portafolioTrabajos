const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

dark.addEventListener('click', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
})