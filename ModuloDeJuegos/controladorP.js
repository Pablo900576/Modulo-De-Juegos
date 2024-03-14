/*function cambiarIdioma() {
    var selector = document.getElementById("selectorIdioma");
    var idiomaSeleccionado = selector.value;
    fetch('traduccionP.json')
        .then(response => response.json())
        .then(data => actualizarTraducciones(data[idiomaSeleccionado]));
}

function actualizarTraducciones(traducciones) {
    document.getElementById("sheldon").innerHTML = traducciones["sheldon"];
    document.getElementById("buscaminas").innerHTML = traducciones["buscaminas"];
    document.getElementById("simonDice").innerHTML = traducciones["simonDice"];
    document.getElementById("historia").innerHTML = traducciones["historia"];
}

cambiarIdioma();*/
var traducciones={
    "es":{
        "sheldon": "PIEDRA PAPEL Y TIJERA",
        "buscaminas":"BUSCATRUFAS",
        "simonDice":"JULIO DICE",
        "historia":"HISTORIA TO GUAPA"
    },
    "en":{
        "sheldon": "ROCK, PAPER AND SCISSORS",
        "buscaminas":"TRUFFLESWEEPERS",
        "simonDice":"JULIO SAYS",
        "historia":"BEAUTIFUL STORY"
    },
    "pt":{
        "sheldon": "PEDRA, PAPEL E TESOURA",
        "buscaminas":"CAÇA-TRUFAS",
        "simonDice":"JULIO DIZ",
        "historia":"BELA HISTÓRIA"
    },
    "fr":{
        "sheldon": "PIERRE, PAPIER ET CISEAUX",
        "buscaminas":"DRAGUEURS DE TRUFFES",
        "simonDice":"JULIO DIT",
        "historia":"BELLE HISTOIRE"
    }
}
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('sheldon').innerHTML = traducciones[idiomaSeleccionado].sheldon;
        document.getElementById('buscaminas').innerHTML = traducciones[idiomaSeleccionado].buscaminas;
        document.getElementById('simonDice').innerHTML = traducciones[idiomaSeleccionado].simonDice;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado].historia;
    
    })
})
