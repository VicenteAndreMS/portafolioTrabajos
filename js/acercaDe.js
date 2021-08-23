const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

dark.addEventListener('touchend', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
})
