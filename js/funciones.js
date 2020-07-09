function abrirAlerta() {
    alert("Hola esto es un alert!!");
    console.log(5 + 10);
}

function login() {
    var mensaje = document.getElementById('mensaje')
    var usuario = document.getElementById('textUser');
    var contrasena = document.getElementById('txtPass');

    console.log(usuario.value + " " + contrasena.value);

    if (usuario.value == "admin" && contrasena.value == "admin") {
        mensaje.innerHTML = "Ok. Usuario logueado.";
        location.href = "pagina2.html";
    }
    else {
        mensaje.innerHTML = "Usuario no logueado.";
        location.href = "pagina1.html";
    }
}

function hacerAlgo() {
    var reloj = document.getElementById('reloj');
    reloj.innerHTML = new Date();
}

//hacerAlgo();

setInterval(hacerAlgo, 1000)