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