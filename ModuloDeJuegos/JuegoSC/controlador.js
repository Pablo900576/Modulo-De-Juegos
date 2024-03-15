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


var traducciones={
    "es":{
        "juego":"Piedra, papel, tijera, lagarto o spock",
        "puntuacionUsuario":"Tu puntuación:",
        "puntuacionMaquina":"Puntuación de la máquina:",
        "seleccionar":"¡Selecciona una opción!",
        "eleccion1":"Tu elección:",
        "eleccion2":"Elección de la computadora: ",
        "reiniciar":"Volver a jugar",
        "reglas":"Reglas",
        "reglass":"Reglas del Juego",
        "regla1":"Tijeras cortan papel",
        "regla2":"Papel cubre piedra",
        "regla3":"Piedra aplasta lagarto",
        "regla4":"Lagarto envenena Spock",
        "regla5":"Spock destruye tijeras",
        "regla6":"Tijeras decapitan lagarto",
        "regla7":"Lagarto come papel",
        "regla8":"Papel desaprueba Spock",
        "regla9":"Spock vaporiza piedra",
        "regla10":"Piedra aplasta tijeras"
    },
    "en":{
        "juego":"Rock, paper, scissors, lizard or spock",
        "puntuacionUsuario":"Your score:",
        "puntuacionMaquina":"Machine Score:",
        "seleccionar":"Select an option!",
        "eleccion1":"Your choice:",
        "eleccion2":"Choice of Computer:",
        "reiniciar":"Replay",
        "reglas":"Rules",
        "reglass":"Rules of the Game",
        "regla1":"Scissors cut paper",
        "regla2":"Paper Covers Stone",
        "regla3":"Stone Crushes Lizard",
        "regla4":"Lizard Poisons Spock",
        "regla5":"Spock Destroys Scissors",
        "regla6":"Scissors decapitate lizard",
        "regla7":"Lizard Eats Paper",
        "regla8":"Paper disapproves Spock",
        "regla9":"Spock Vaporizes Stone",
        "regla10":"Stone Crushes Scissors"
    },
    "pt":{
        "juego":"Pedra, papel, tesoura, lagarto ou spock",
        "puntuacionUsuario":"Sua pontuação:",
        "puntuacionMaquina":"Pontuação da máquina:",
        "seleccionar":"Selecione uma opção!",
        "eleccion1":"Sua escolha:",
        "eleccion2":"Escolha do computador:",
        "reiniciar":"Rejogar",
        "reglas":"Réguas",
        "reglass":"Regras do Jogo",
        "regla1":"Tesoura de papel cortado",
        "regla2":"Papel Cobre Pedra",
        "regla3":"Pedra Crushes Lagarto",
        "regla4":"Lagarto Venenos Spock",
        "regla5":"Spock destrói tesoura",
        "regla6":"Tesoura decapita lagarto",
        "regla7":"Lagarto come papel",
        "regla8":"Paper desaprova Spock",
        "regla9":"Spock vaporiza pedra",
        "regla10":"Pedra Esmaga Tesoura"
    },
    "fr":{
        "juego":"Pierre, papier, ciseaux, lézard ou spock",
        "puntuacionUsuario":"Votre score :",
        "puntuacionMaquina":"Score de la machine :",
        "seleccionar":"Sélectionnez une option !",
        "eleccion1":"Votre choix:",
        "eleccion2":"Choix de l'ordinateur :",
        "reiniciar":"Rejouer",
        "reglas":"Règlement",
        "reglass":"Règles du jeu",
        "regla1":"Ciseaux découpant du papier",
        "regla2":"Couvertures en papier Pierre",
        "regla3":"Pierre écrase lézard",
        "regla4":"Un lézard empoisonne Spock",
        "regla5":"Spock détruit les ciseaux",
        "regla6":"Les ciseaux décapitent le lézard",
        "regla7":"Lézard mange du papier",
        "regla8":"Le papier désapprouve Spock",
        "regla9":"Spock vaporise la pierre",
        "regla10":"Stone Crushes Ciseaux"
    }
}
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('juego').innerHTML = traducciones[idiomaSeleccionado].juego;
        document.getElementById('puntuacionUsuario').innerHTML = traducciones[idiomaSeleccionado].puntuacionUsuario;
        document.getElementById('puntuacionMaquina').innerHTML = traducciones[idiomaSeleccionado].puntuacionMaquina;
        document.getElementById('seleccionar').innerHTML = traducciones[idiomaSeleccionado].seleccionar;
        document.getElementById('eleccion1').innerHTML = traducciones[idiomaSeleccionado].eleccion1;
        document.getElementById('eleccion2').innerHTML = traducciones[idiomaSeleccionado].eleccion2;
        document.getElementById('reiniciar').innerHTML = traducciones[idiomaSeleccionado].reiniciar;
        document.getElementById('reglas').innerHTML = traducciones[idiomaSeleccionado].reglas;
        document.getElementById('reglass').innerHTML = traducciones[idiomaSeleccionado].reglass;
        document.getElementById('regla1').innerHTML = traducciones[idiomaSeleccionado].regla1;
        document.getElementById('regla2').innerHTML = traducciones[idiomaSeleccionado].regla2;
        document.getElementById('regla3').innerHTML = traducciones[idiomaSeleccionado].regla3;
        document.getElementById('regla4').innerHTML = traducciones[idiomaSeleccionado].regla4;
        document.getElementById('regla5').innerHTML = traducciones[idiomaSeleccionado].regla5;
        document.getElementById('regla6').innerHTML = traducciones[idiomaSeleccionado].regla6;
        document.getElementById('regla7').innerHTML = traducciones[idiomaSeleccionado].regla7;
        document.getElementById('regla8').innerHTML = traducciones[idiomaSeleccionado].regla8;
        document.getElementById('regla9').innerHTML = traducciones[idiomaSeleccionado].regla9;
        document.getElementById('regla10').innerHTML = traducciones[idiomaSeleccionado].regla10;
    
    })
})