document.getElementById('imagen').addEventListener('click', function() {
    var img = document.getElementById('imagen');
    if (img.style.border === '2px solid red') {
        img.style.border = '2px solid transparent';
    } else {
        img.style.border = '2px solid red';
    }
});
