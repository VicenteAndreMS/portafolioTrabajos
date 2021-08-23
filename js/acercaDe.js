const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

function darkMobile(){
dark.addEventListener('click', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
})
}

