document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);
document.querySelector('#btnLimpiar').addEventListener('click', limpiar);

/* función para verificar si el navegador soporta el trabajo Storage*/
/* function verificarStorage(){
    if(typeoff(Storage) !== 'undefined'){
        iniciarSesion();
    }else{
        
    }
} */


/* función para tomar los datos ingresados en input de correo y password, validarlos y derivar
* al tipo de rol de usuario. Si el bool bAcesso es true se ejecuta la función ingresar()*/
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
                window.location.href = "index.html";
                alert('usuario incompatible');
                break;
        }
}
/*función para poner en blanco los input de html */   
function limpiar() { 
    document.querySelector('#txtCorreo').value = '';
    document.querySelector('#txtContrasena').value = '';
    let bAcceso = false;
}

/* función para limpiar con clear() los datos almacenados en el navegador, local o de pestaña */
function limpiarStorage(){
    localStorage.clear();
    sessionStorage.clear();
}

