<?php

    $destino = "vicente.andre.ms2@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $mensaje = $_POST["mensaje"];
    $contenido = "Nombre: " . $nombre . '\nCorreo: ' . $correo . '\nMensaje: ' . $mensaje;

    if(!empty($nombre) && !empty($correo) && !empty($mensaje)){
    mail('vicente.andre.ms2@gmail.com','Contacto',$contenido);
    header('Location: index.php');
    }
?>