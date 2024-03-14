var puntuacionUsuario = 0;
var puntuacionMaquina = 0;



function jugar(eleccionUsuario) {
    const opciones = ['Piedra', 'Papel', 'Tijera', 'Lagarto', 'Spock'];
    const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    actualizarResultado(eleccionUsuario, eleccionMaquina);
    const resultado = obtenerResultado(eleccionUsuario, eleccionMaquina);
    actualizarPuntuacion(resultado);
    alert(`Tu elección: ${eleccionUsuario}\nElección de la computadora: ${eleccionMaquina}\nResultado: ${resultado}`);
}



function actualizarResultado(eleccionUsuario, eleccionMaquina) {
    document.getElementById('tuEleccion').innerText = eleccionUsuario;
    document.getElementById('maquinaEleccion').innerText = eleccionMaquina;
    document.getElementById('seleccionar').innerText = ''; // Limpia el mensaje de resultado
}



function obtenerResultado(usuario, maquina) {
    if (usuario === maquina) {
        return 'Es un empate.';
    }

    const posibilidades = {
        'Piedra': ['Tijera', 'Lagarto'],
        'Papel': ['Piedra', 'Spock'],
        'Tijera': ['Papel', 'Lagarto'],
        'Lagarto': ['Papel', 'Spock'],
        'Spock': ['Piedra', 'Tijera']
    };

    if (posibilidades[usuario].includes(maquina)) {
        puntuacionUsuario++;
        return '¡Ganaste!';
    } else {
        puntuacionMaquina++;
        return '¡Perdiste!';
    }
}



function actualizarPuntuacion(resultado) {
    document.getElementById('usuarioPuntuacion').innerText = puntuacionUsuario;
    document.getElementById('maquinaPuntuacion').innerText = puntuacionMaquina;
}



function reiniciar() {
    puntuacionUsuario = 0;
    puntuacionMaquina = 0;
    actualizarPuntuacion();
    document.getElementById('seleccionar').innerText = '¡Selecciona una opción!';
    document.getElementById('tuEleccion').innerText = '';
    document.getElementById('maquinaEleccion').innerText = '';
}



function mostrarReglas() {
    document.getElementById('contenedorReglas').style.display = 'block';
}



function ocultarReglas() {
    document.getElementById('contenedorReglas').style.display = 'none';
}
