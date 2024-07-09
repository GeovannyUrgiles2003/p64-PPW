document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cargar').addEventListener('click', function() {
        var imagen = document.getElementById('imagen');
        imagen.src = 'img/duki.jpg'; 
        imagen.style.display = 'block'; 
    });

    document.getElementById('eliminar').addEventListener('click', function() {
        var imagen = document.getElementById('imagen');
        imagen.src = '';
        imagen.style.display = 'none'; 
    });
});
