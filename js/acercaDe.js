const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

dark.addEventListener('click', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
})

function darkMobile(){
window.addEventListener('load', function(){
dark.addEventListener('touchend', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
}, false)
})
}
