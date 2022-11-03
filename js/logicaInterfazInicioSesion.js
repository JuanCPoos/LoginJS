document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    let sCorreo = "";
    let sContrasena = "";
    let bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasena = document.querySelector('#txtContrasena').value;

    bAcceso = validarCredenciales(sCorreo, sContrasena);
    
    if (bAcceso == true) {
        ingresar();
    }

   }
    /* esta función se ejecuta cuando el acceso es correcto - 
        switch -> si el rol es case 1, nos redirige a admin.html
                -> si el rol es case 2 nos redirige a cliente.html */
    function ingresar() { 
        let rol = sessionStorage.getItem('rolUsuarioActivo');
        switch (rol) {
            case '1':
                window.location.href = "admin.html";
                break;
            case '2':
                window.location.href = "cliente.html";
                break;
            default:
                window.location.href="index.html";
                break;
        }
   }
    

