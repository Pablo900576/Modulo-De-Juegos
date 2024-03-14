function cambiarIdioma() {
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

cambiarIdioma(); 