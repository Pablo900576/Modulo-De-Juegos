class Juego {
    constructor(historia) {
        this.historia = historia;
        this.estadoActual = null;
    }

    iniciar() {
        this.estadoActual = this.historia.intro;
        this.renderizar();
    }

    hacerElección(indiceElección) {
        const siguienteNombreEstado = this.estadoActual.opciones[indiceElección].siguiente;
        this.estadoActual = this.historia.estados[siguienteNombreEstado];
        this.renderizar();
    }

    renderizar() {
        document.getElementById('historia').innerHTML = `<p>${this.estadoActual.texto}</p>`;
        const contenedorOpciones = document.getElementById('opciones');
        contenedorOpciones.innerHTML = '';

        this.estadoActual.opciones.forEach((opción, índice) => {
            const botón = document.createElement('button');
            botón.innerText = opción.texto;
            botón.addEventListener('click', () => this.hacerElección(índice));
            contenedorOpciones.appendChild(botón);
        });
    }
}

const miHistoria = {
    intro: {
        texto: 'Estás en la puerta del IES Fleming y tienes que entrar para afrontar un maravilloso año de DAM, te dan una elección, entras al instituto o no?',
        opciones: [
            { texto: 'Sí, entrar y ver klk.', siguiente: 'comienzo' },
            { texto: 'No, mejor me voy a tomar unas al Master.', siguiente: 'fin' }
        ]
    },
    estados: {
        comienzo: {
            texto: 'El curso se empieza a hacer mucho más pesado con el paso de los meses, llega diciembre y te dan otra elección, sigues o te vas?',
            opciones: [
                { texto: 'Ya que estoy aqui sigo hasta el final.', siguiente: 'segundoTrimestre' },
                { texto: 'Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.', siguiente: 'fin' }
            ]
        },
        segundoTrimestre: {
            texto: 'A mitad de trimestre ves que programacion es completamente imposible y te llega una oferta maravillosa. Irte de fiesta 3 meses a Portugal, aceptas o te quedas?',
            opciones: [
                { texto: 'Aceptas y te vas con dos portuguesas tremendas a vivir la vida.', siguiente: 'portugal' },
                { texto: 'Te quedas a intentar el último tramo de tu peor pesadilla.', siguiente: 'tercerTrimestre' }
            ]
        },
        portugal: {
            texto: 'Te lo pasas de locos en Portugal con esas 2 pero tu cartera empieza a estar vacía y tienes que tomar una decisión.',
            opciones: [
                { texto: 'Aceptas tu error e intentas terminar el curso aun yendo por detras.', siguiente: 'tercerTrimestre'},
                { texto: 'Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado "DAM", te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.', siguiente:'fin'},
                { texto: 'Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.', siguiente:'portugalFinal'}
            ]
        },
        tercerTrimestre: {
            texto: 'Estas en Junio, no te queda nada ya y tienes la elección final.',
            opciones: [
                { texto: 'Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!', siguiente: 'finMalo'},
                { texto: 'Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.', siguiente:'fin'}
            ]
        },

        fin: {
            texto: 'Unas jarrinas y unos billares siempre vienen bien, buena eleccion sabio maestro.',
            opciones: []
        },
        
        finMalo: {
            texto: 'Intentar terminar el curso nunca fue una buena opción. La Rottweiler te atrapa y terminas muriendo bajo unas terribles lesiones muy lentas y dolorosas.',
            opciones: []
        }
    }
};

window.onload = () => {
    const juego = new Juego(miHistoria);
    juego.iniciar();
};
