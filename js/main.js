/**ROLES
 * 1: admin,
 * 2: cliente
 */
usuarioForm = document.getElementById('usuario');
contraseñaForm = document.getElementById('contraseña');
buttonForm = document.getElementById('button');

function login() {
    let user, pass;

    user = document.getElementById('usuario').value;
    pass = document.getElementById('contraseña').value;

    if (user == 'Miguel' && pass == '1234') {
        window.location = 'pagina.html';
    }
        

}

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

function validarCredenciales() {
    
}