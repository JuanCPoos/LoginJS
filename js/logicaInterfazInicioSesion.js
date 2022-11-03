document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    let sCorreo = "";
    let sContrasena = "";
    let bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sCorreo, sContrasena);

    
}