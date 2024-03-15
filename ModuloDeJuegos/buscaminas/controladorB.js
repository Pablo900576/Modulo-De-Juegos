const matriz = [];
const filas = 10;
const columnas = 10;

function inicializar(){
    
    for(var i=0; i<filas; i++){
        matriz.push([]);
        for(var j=0; j<columnas; j++){
            matriz[i].push(0);
        }
    }

    var minas = 8;
    while (minas>0){
        var fila = Math.floor(Math.random() * filas);
        var columna = Math.floor(Math.random() * columnas);
        if(matriz[fila][columna] == 0){
            matriz[fila][columna] = 1;
            minas--;
        }
    }
    botones();
}

function botones(){
    var html ="";
    for(var i=0; i<filas; i++){
        html += '<div>';
        for(var j=0; j<columnas; j++){
            html += '<button type="button" onclick="quitarContorno(event.target,'+i+','+j+')"></button>';
        }
        html += '</div>';
    }
    document.getElementById('matriz').innerHTML = html;

}


function quitarContorno(button, fila, columna){
    if(matriz[fila][columna] == 1){
        button.style.backgroundColor = 'black';
        button.disabled = true;
        alert("TRUUUFAAAA!");
    }else if(trufaCerca(fila, columna)){
        button.style.backgroundColor = 'red';
        button.disabled = true;
       
    }else{
        button.style.backgroundColor = 'white';
        button.disabled = true;
        
    }
   
    
}

function trufaCerca(fila, columna){
    for(i = fila-1; i<= fila +1; i++){
        for(j=columna-1; j<=columna+1; j++){
            if(i>=0 && j>=0 && i<filas && j<columnas && (i!= fila || j!= columna)){
                if(matriz[i][j] == 1){
                    return true;
                }
            }
        }
    }
    return false;
}

function mostrarReglas() {
    document.getElementById('contenedorReglas').style.display = 'block';
}



function ocultarReglas() {
    document.getElementById('contenedorReglas').style.display = 'none';
}



var traducciones={
    "es":{
        "titulo":"EL BUSCATRUFAS",
        "reglas":"Reglas",
        "regla1":"Trufa cercana",
        "regla2":"No hay trufa ni trufas cerca",
        "regla3":"BOOM!"
    },
    "en":{
        "titulo":"TRUFFLESWEEPERS",
        "reglas":"Rules",
        "regla1":"Truffle nearby",
        "regla2":"No truffle or truffles nearby",
        "regla3":"BOOM!"
    },
    "pt":{
        "titulo":"CAÇA-TRUFAS",
        "reglas":"Réguas",
        "regla1":"Nos arredores Trufa",
        "regla2":"Sem trufas ou trufas nas proximidades",
        "regla3":"BOOM!"
    },
    "fr":{
        "titulo":"DRAGUEURS DE TRUFFES",
        "reglas":"Règlement",
        "regla1":"Truffe à proximité",
        "regla2":"Pas de truffe ou de truffes à proximité",
        "regla3":"BOOM!"
    }
}
    document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('titulo').innerHTML = traducciones[idiomaSeleccionado].titulo;
        document.getElementById('reglas').innerHTML = traducciones[idiomaSeleccionado].reglas;
        document.getElementById('regla1').innerHTML = traducciones[idiomaSeleccionado].regla1;
        document.getElementById('regla2').innerHTML = traducciones[idiomaSeleccionado].regla2;
        document.getElementById('regla3').innerHTML = traducciones[idiomaSeleccionado].regla3;
    })
})