const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

dark.addEventListener('click', e =>{
    acercaDe.classList = 'acercaDeModoOscuro';
})

function darkMobile(){
dark.addEventListener('touchend', e =>{
    acercaDe.classList = 'acercaDeModoOscuro';
})
}