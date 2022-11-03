/**ROLES
 * 1: admin,
 * 2: cliente
 */
usuarioForm = document.getElementById('usuario');
contraseñaForm = document.getElementById('contraseña');
buttonForm = document.getElementById('button');

function obtenerListaUsuarios() { 
    let listaUsuarios = JSON.parse(localStorage.getItem(''));

    if (listaUsuarios == null) { 
        listaUsuarios =
            [
            ['1', 'Pabs', 'Monestel', 'pablo.monestel@gmail.com', '1pablo9', '1987-10-12', '1'],
            ['2', 'Olman', 'Santamaría', 'olman@gmail.com', '1olman9', '1993-04-17', '2'],
            ]
    }
    return listaUsuarios;

}

function validarCredenciales(pCorreo, pContraseña) {
    let listaUsuarios = obtenerListaUsuarios();
    let bAcceso = false;

    for (let i = 0; i < listaUsuarios.length; i++){
        if (pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios[i][4]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }

    return bAcceso;

}