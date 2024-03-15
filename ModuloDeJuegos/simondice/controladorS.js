const colores = ["rojo", "azul", "verde", "amarillo"];
let Julio = [];
let jugador = [];
let puntuacion = 0;

function comenzar(){
    Julio=[];
    jugador=[];
    puntuacion = 0;
    actualizarPuntuacion();
    colorSecuencia();
    mostrarSecuencia();
}

function colorSecuencia(){
    const colorAleatorio = colores[Math.floor(Math.random()*4)];
    Julio.push(colorAleatorio);
}

function mostrarSecuencia(){
    let i=0;
    const intervalo=setInterval(() => {
       resaltarColor(Julio[i]);
       i++;
       
       if(i>=Julio.length){
        clearInterval(intervalo);
        empezarEntrada();
       }
    }, 500);
}

function resaltarColor(color){
    const colorBoton= document.getElementById(color)
    colorBoton.style.opacity="0.4";

    setTimeout(()=>{
        colorBoton.style.opacity="1";
    },250);
}

function empezarEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor => botonesColor.addEventListener("click", manejarEntrada));
}

function manejarEntrada(event){
    const colorSeleccionado = event.target.id;
    resaltarColor(colorSeleccionado);
    jugador.push(colorSeleccionado);

    if(verificarEntrada()){
        if(jugador.length === Julio.length){
            puntuacion++;
            actualizarPuntuacion();
            jugador=[];
            colorSecuencia();
            setTimeout(mostrarSecuencia, 500);
        }
    }
    else{
        terminarJuego();
    }
    
}

function verificarEntrada(){
    for(let i = 0; i<jugador.length; i++){
        if(jugador[i] !== Julio[i]){
            return false;
        }
    }
    return true;
}

function terminarJuego(){
    alert(`JUEGO TERMINADO! Tu puntuacion final es: ${puntuacion}`);
    reiniciarJuego();
}

function actualizarPuntuacion(){
    document.getElementById("valorPuntuacion").textContent = puntuacion;
}

function reiniciarJuego(){
    Julio = [];
    jugador=[];
    puntuacion=0;
    actualizarPuntuacion();
    finEntrada();
}

function finEntrada(){
    const botonesColores=document.querySelectorAll(".color");
    botonesColores.forEach(botonesColor=>botonesColor.removeEventListener("click", manejarEntrada));
}

function mostrarReglas() {
    document.getElementById('contenedorReglas').style.display = 'block';
}
function ocultarReglas() {
    document.getElementById('contenedorReglas').style.display = 'none';
}



var traducciones={
    "es":{
        "dice":"DICE",
        "puntuacionn":"Puntuación:",
        "empezar":"Jugar",
        "reglas":"Reglas",
        "texto":"En este juego de 'Simón Dice', pondremos a prueba tu memoria y habilidades de observación. El objetivo del juego es seguir una secuencia de colores y sonidos generada por la computadora. El juego se volverá más desafiante a medida que avances, ya que la secuencia se hará más larga y complicada. ¡Veamos quién puede llegar más lejos y obtener la puntuación más alta!"
    },
    "en":{
        "dice":"SAYS",
        "puntuacionn":"Scoring:",
        "empezar":"Start",
        "reglas":"Rules",
        "texto":"In this 'Simon Says' game, we will test your memory and observation skills. The object of the game is to follow a computer-generated sequence of colors and sounds. The game will become more challenging as you progress, as the sequence will become longer and more complicated. Let's see who can go the furthest and get the highest score!"
    },
    "pt":{
        "dice":"DIZ",
        "puntuacionn":"Pontuação:",
        "empezar":"Brincar",
        "reglas":"Réguas",
        "texto":"Neste jogo 'Simon Says', testaremos suas habilidades de memória e observação. O objetivo do jogo é seguir uma sequência de cores e sons gerada por computador. O jogo se tornará mais desafiador à medida que você progride, pois a sequência se tornará mais longa e complicada. Vamos ver quem consegue ir mais longe e obter a maior pontuação!"    },
    "fr":{
        "dice":"DIT",
        "puntuacionn":"Ponctuation:",
        "empezar":"Commencer",
        "reglas":"Règlement",
        "texto":"Dans ce jeu « Simon dit », nous mettrons à l’épreuve votre mémoire et vos capacités d’observation. Le but du jeu est de suivre une séquence de couleurs et de sons générée par ordinateur. Le jeu deviendra plus difficile au fur et à mesure que vous progresserez, car la séquence deviendra plus longue et plus compliquée. Voyons qui peut aller le plus loin et obtenir le meilleur score !"
    }
}
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('dice').innerHTML=traducciones[idiomaSeleccionado].dice;
        document.getElementById('puntuacionn').innerHTML = traducciones[idiomaSeleccionado].puntuacionn;
        document.getElementById('empezar').innerHTML = traducciones[idiomaSeleccionado].empezar;
        document.getElementById('reglas').innerHTML = traducciones[idiomaSeleccionado].reglas;
        document.getElementById('texto').innerHTML = traducciones[idiomaSeleccionado].texto;
    
    })
})
