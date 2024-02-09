document.getElementById('validar').addEventListener('click', function() {
    var cantidad1 = parseInt(document.getElementById('sticker1').value) || 0;
    var cantidad2 = parseInt(document.getElementById('sticker2').value) || 0;
    var cantidad3 = parseInt(document.getElementById('sticker3').value) || 0;
    var total = cantidad1 + cantidad2 + cantidad3;
    
    if (total <= 10) {
        document.getElementById('resultado').innerText = 'Total stickers seleccionados: ' + total;
    } else {
        document.getElementById('resultado').innerText = 'Has seleccionado demasiados stickers.';
    }
});
