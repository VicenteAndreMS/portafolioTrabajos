function ocultarHeader(){
    document.getElementById('mostrar').className = 'mostrar';
    document.getElementById('ocultar').className = 'noBoton';
    document.getElementById('headerCambiar').className = 'headerCambiar';
    document.getElementById('presentacionCambiar').className = 'noDisplay';
    document.getElementById('navbar').className = 'navbarCambio';
    document.getElementById('navbar-nombre-cambio').className = 'navbar-nombre';
}
function mostrarHeader(){
     document.getElementById('mostrar').className = 'noDisplay';
     document.getElementById('ocultar').className = 'ocultar';
     document.getElementById('headerCambiar').className = 'header';
     document.getElementById('presentacionCambiar').className = 'presentacion';
     document.getElementById('navbar').className = 'navbar';
     document.getElementById('navbar-nombre-cambio').className = 'navbar-nombre-oculto';
 }