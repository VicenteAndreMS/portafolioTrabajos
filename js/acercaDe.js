const dark = document.querySelector('#boton-acercaDeCambio');
const acercaDe = document.querySelector('.acercaDe');

dark.addEventListener('click', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
})

function darkMobile(){
dark.addEventListener('touchend', e =>{
    acercaDe.classList.toggle('acercaDeModoOscuro');
}, false)

function startup(){
    var el = document.getElementsByTagName("boton-acercaDe")[0];
    el.addEventListener("touchend",handleStart,false);
}
}
