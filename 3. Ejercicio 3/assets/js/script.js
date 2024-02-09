document.getElementById('ingresar').addEventListener('click', function() {
    var d1 = document.getElementById('digito1').value;
    var d2 = document.getElementById('digito2').value;
    var d3 = document.getElementById('digito3').value;
    var contrasena = d1 + d2 + d3;
    
    if (contrasena === '911' || contrasena === '714') {
        document.getElementById('validacion').innerText = 'Contraseña correcta';
    } else {
        document.getElementById('validacion').innerText = 'Contraseña incorrecta';
    }
});
