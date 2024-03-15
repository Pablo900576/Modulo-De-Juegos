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
        /*const idiomaSeleccionado = document.getElementById('selectorIdioma').value;
        const textoHistoria = this.traducciones[idiomaSeleccionado].historia;
        const textoOpciones = this.traducciones[idiomaSeleccionado].opciones;*/
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
                { texto: 'Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.', siguiente:'portugal2'}
            ]
        },
        tercerTrimestre: {
            texto: 'Estas en Junio, no te queda nada ya y tienes la elección final.',
            opciones: [
                { texto: 'Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!', siguiente: 'finMalo'},
                { texto: 'Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.', siguiente:'fin'}
            ]
        },

        portugal2:{
            texto: 'Lo pierdes casi todo y en la ultima lo metes todo al 33 confiando en que el NANOGOD te de su sabiduria.',
            opciones: [
                {texto: 'El nano está contigo y sale el 33.', siguiente: 'portugalRico'},
                {texto: 'Lo pierdes todo.', siguiente: 'portugalPobre'},
                {texto: 'Antes de que salga el número te vas por cagao y te vas a tomar unas al master.', siguiente: 'finBueno'}
            ]
        },

        portugalRico:{
            texto:'Te haces multimillonario y te casas con una de las portuguesas. GGWP',
            opciones:[]
        },
        portugalPobre:{
            texto:'Eres un desgraaciao, te tenias que haber quedado con tu gran profesor Julio e intentar terminar DAM, una pena que ahora te encuentres en Lisboa pidiendo en la puerta de un Mercadinho.',
            opciones:[]
        },

        finBueno:{
            texto:'Una retirada a tiempo siempre es una victoria, aunque has llegado tarde al master te encuentras allí a la gran Inesota y empezais un romance muy bonito y duradero. GGWP'
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




var traducciones = {
    "es": {
        historia: {
            intro: "Estás en la puerta del IES Fleming y tienes que entrar para afrontar un maravilloso año de DAM, te dan una elección, entras al instituto o no?",
            comienzo: "El curso se empieza a hacer mucho más pesado con el paso de los meses, llega diciembre y te dan otra elección, sigues o te vas?",
            segundoTrimestre: "A mitad de trimestre ves que programacion es completamente imposible y te llega una oferta maravillosa. Irte de fiesta 3 meses a Portugal, aceptas o te quedas?",
            portugal: "Te lo pasas de locos en Portugal con esas 2 pero tu cartera empieza a estar vacía y tienes que tomar una decisión.",
            portugal2: "Lo pierdes casi todo y en la ultima lo metes todo al 33 confiando en que el NANOGOD te de su sabiduria.",
            portugalRico: "Te haces multimillonario y te casas con una de las portuguesas. GGWP",
            portugalPobre: "Eres un desgraaciao, te tenias que haber quedado con tu gran profesor Julio e intentar terminar DAM, una pena que ahora te encuentres en Lisboa pidiendo en la puerta de un Mercadinho.",
            tercerTrimestre: "Estas en Junio, no te queda nada ya y tienes la elección final.",
            finBueno: "Una retirada a tiempo siempre es una victoria, aunque has llegado tarde al master te encuentras allí a la gran Inesota y empezais un romance muy bonito y duradero. GGWP",
            fin: "Unas jarrinas y unos billares siempre vienen bien, buena eleccion sabio maestro.",
            finMalo: "Intentar terminar el curso nunca fue una buena opción. La Rottweiler te atrapa y terminas muriendo bajo unas terribles lesiones muy lentas y dolorosas."
        },
        opciones: {
            "Sí, entrar y ver klk.": "Sí, entrar y ver klk.",
            "No, mejor me voy a tomar unas al Master.": "No, mejor me voy a tomar unas al Master.",
            "Ya que estoy aqui sigo hasta el final.": "Ya que estoy aquí sigo hasta el final.",
            "Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.": "Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.",
            "Aceptas y te vas con dos portuguesas tremendas a vivir la vida.": "Aceptas y te vas con dos portuguesas tremendas a vivir la vida.",
            "Te quedas a intentar el último tramo de tu peor pesadilla.": "Te quedas a intentar el último tramo de tu peor pesadilla.",
            "Aceptas tu error e intentas terminar el curso aun yendo por detras.": "Aceptas tu error e intentas terminar el curso aun yendo por detrás.",
            "Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado 'DAM', te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.": "Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado 'DAM', te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.",
            "Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.": "Sigues en Portugal y te vas a un casino a jugártelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.",
            "Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!": "Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!",
            "Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.": "Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una pérdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.",
            "El nano está contigo y sale el 33.": "El nano está contigo y sale el 33.",
            "Lo pierdes todo.": "Lo pierdes todo.",
            "Antes de que salga el número te vas por cagao y te vas a tomar unas al master.": "Antes de que salga el número te vas por cagao y te vas a tomar unas al master."
        }
    },
    "en": {
        historia:{
            intro: "You are at the door of IES Fleming and you have to enter to face a wonderful year of DAM, they give you a choice, do you enter the institute or not?",
            comienzo:"The course begins to get much heavier as the months go by, December arrives and they give you another choice, do you continue or leave?",
            segundoTrimestre:"Halfway through the quarter you see that programming is completely impossible and you get a wonderful offer. Partying for 3 months in Portugal, do you accept or stay?",
            portugal:"You have a crazy time in Portugal with those 2 but your wallet starts to be empty and you have to make a decision.",
            portugal2:"Lo pierdes casi todo y en la ultima lo metes todo al 33 confiando en que el NANOGOD te de su sabiduria.",
            portugalRico:"You become a multimillionaire and marry one of the Portuguese women. GGWP",
            portugalPobre: "You are a disgrace, you should have stayed with your great teacher Julio and tried to finish DAM, a shame that now you find yourself in Lisbon begging at the door of a Mercadinho.",
            tercerTrimestre:"You are in June, you have nothing left and you have the final choice.",
            finBueno:"A withdrawal on time is always a victory, even if you arrived late to the master you meet the great Inesota there and you start a very beautiful and lasting romance. GGWP",
            fin:"Some jars and some billiards always come in handy, good choice wise teacher.",
            finMalo:"Trying to finish the course was never a good option. The Rottweiler catches you and you end up dying under terrible, very slow and painful injuries."
        },
        opciones:{
            "Si,entrar y ver klk.":"Yes, come in and see klk.",
            "No, mejor me voy a tomar unas al Master.":"No, I'd better go take some to the Master.",
            "Ya que estoy aqui sigo hasta el final.":"Since I'm here I'll continue until the end.",
            "Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.":"Accept defeat and go with the wise teachers who chose the side of good and go have a drink with them.",
            "Aceptas y te vas con dos portuguesas tremendas a vivir la vida.":"You accept and go with two tremendous Portuguese women to live life.",
            "Te quedas a intentar el último tramo de tu peor pesadilla.":"You stay to try the last leg of your worst nightmare.",
            "Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado 'DAM', te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.": "You return home repentant but you do not return to that hell called 'DAM', you go with your former colleagues to those wonderful jugs they tell you about.",
            "Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.":"You're still in Portugal and you're going to a casino to gamble everything, obviously those two tremendous Portuguese women are still there with you.",
            "Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!":"You finish the course, you pass everything and you have a spectacularly wonderful summer!!!!!!!!!!!!!",
            "Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.": "You have not passed Programming, Databases and Development Environments the entire course, you see it as a waste of time and you decide to accompany your classmates and abandon the course.",
            "El nano está contigo y sale el 33.":"The nano is with you and comes out on the 33rd.",
            "Lo pierdes todo.":"You lose everything.",
            "Antes de que salga el número te vas por cagao y te vas a tomar unas al master.":"Before the number comes out, you're going to get shit and go take some to the master."
        }
    },
    "pt": {
        historia:{
            intro: "Você está na porta do IES Fleming e tem que entrar para enfrentar um ano maravilhoso de DAM, eles te dão uma escolha, você entra no instituto ou não?",
            comienzo:"O curso começa a ficar bem mais pesado com o passar dos meses, chega dezembro e te dão outra escolha, você continua ou sai?",
            segundoTrimestre:"No meio do semestre você vê que a programação é completamente impossível e recebe uma oferta maravilhosa. Vai festejar 3 meses em Portugal, aceita ou fica?",
            portugal:"Você passa momentos loucos em Portugal com esses 2, mas sua carteira começa a ficar vazia e você tem que tomar uma decisão.",
            portugal2:"Você perde quase tudo e no último você coloca tudo em 33 confiando que o NANOGOD lhe dará a sua sabedoria.",
            portugalRico:"Você se torna multimilionário e se casa com uma das portuguesas. GGWP",
            portugalPobre: "Você é uma vergonha, deveria ter ficado com o seu grande professor Júlio e tentado terminar o DAM, uma pena que agora você está em Lisboa mendigando na porta de um Mercadinho.",
            tercerTrimestre:"Você está em junho, não tem mais nada e tem a escolha final.",
            finBueno:"Uma retirada na hora certa é sempre uma vitória, mesmo que você chegue atrasado ao mestre você conhece lá a grande Inesota e inicia um romance muito lindo e duradouro. GGWP",
            fin:"Alguns potes e algumas mesas de bilhar sempre são úteis, boa escolha, professor sábio.",
            finMalo:"entar terminar o percurso nunca foi uma boa opção. O Rottweiler te pega e você acaba morrendo com ferimentos terríveis, muito lentos e dolorosos."
        },
        opciones:{
            "Si,entrar y ver klk.":"Sim, entre e veja klk.",
            "No, mejor me voy a tomar unas al Master.":"Não, é melhor eu levar alguns para o Mestre.",
            "Ya que estoy aqui sigo hasta el final.":"Já que estou aqui continuarei até o fim.",
            "Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.":"Aceite a derrota e vá com os professores sábios que escolheram o lado do bem e vá tomar um drink com eles.",
            "Aceptas y te vas con dos portuguesas tremendas a vivir la vida.":"Você aceita e vai com duas portuguesas tremendas viver a vida.",
            "Te quedas a intentar el último tramo de tu peor pesadilla.":"Você fica para tentar a última etapa do seu pior pesadelo.",
            "Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado 'DAM', te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.": "Você volta para casa arrependido, mas não volta para aquele inferno chamado 'DAM', você vai com seus ex-colegas para aqueles jarros maravilhosos de que eles falam.",
            "Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.":"Você ainda está em Portugal e vai para um cassino jogar tudo, obviamente aquelas duas portuguesas tremendas ainda estão lá com você.",
            "Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!":"Você termina o curso, passa em tudo e tem um verão espetacularmente maravilhoso!!!!!!!!!!!!!",
            "Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.": "Você não passou no curso inteiro de Programação, Bancos de Dados e Ambientes de Desenvolvimento, você vê isso como uma perda de tempo e decide acompanhar seus colegas e abandonar o curso.",
            "El nano está contigo y sale el 33.":"O nano está com você e sai dia 33.",
            "Lo pierdes todo.":"Você perde tudo.",
            "Antes de que salga el número te vas por cagao y te vas a tomar unas al master.":"Antes que o número saia, você vai pegar uma merda e vai levar para o mestre."
        }
    },
    "fr": {
        historia:{
            intro: "Vous êtes à la porte de l'IES Fleming et vous devez y entrer pour affronter une merveilleuse année de DAM, ils vous donnent le choix, entrez-vous à l'institut ou pas ?",
            comienzo:"Le cours commence à devenir beaucoup plus lourd au fil des mois, décembre arrive et on te donne un autre choix, tu continues ou tu pars ?",
            segundoTrimestre:"En milieu de trimestre, vous constatez que la programmation est complètement impossible et vous recevez une superbe offre. Partir faire la fête pendant 3 mois au Portugal, acceptez-vous ou restez-vous ?",
            portugal:"Vous passez un moment fou au Portugal avec ces 2 mais votre portefeuille commence à être vide et vous devez prendre une décision.",
            portugal2:"Vous perdez presque tout et dans le dernier vous mettez tout à 33 en espérant que le NANOGOD vous donnera sa sagesse.",
            portugalRico:"Vous devenez multimillionnaire et vous épousez une des femmes portugaises. GGWP",
            portugalPobre: "Tu es une honte, tu aurais dû rester avec ton grand professeur Julio et essayer de finir DAM, dommage que maintenant tu te retrouves à Lisbonne en train de mendier à la porte d'un Mercadinho",
            tercerTrimestre:"Vous êtes en juin, vous n'avez plus rien et vous avez le choix final.",
            finBueno:"Un retrait à temps est toujours une victoire, même si vous arrivez en retard chez le maître, vous y rencontrez la grande Inesota et vous commencez une très belle et durable romance. GGWP",
            fin:"Certains bocaux et quelques billards sont toujours utiles, bon choix, professeur avisé.",
            finMalo:"Essayer de terminer le parcours n'a jamais été une bonne option. Le Rottweiler vous rattrape et vous finissez par mourir sous des blessures terribles, très lentes et douloureuses."
        },
        opciones:{
            "Si,entrar y ver klk.":"Oui, entre et vois klk.",
            "No, mejor me voy a tomar unas al Master.":"Non, je ferais mieux d'aller en apporter au Maître.",
            "Ya que estoy aqui sigo hasta el final.":"Puisque je suis là, je continuerai jusqu'au bout.",
            "Aceptar la derrota e ir con los sabios maestros que eligieron el lado del bien e irse a tomar unas con ellos.":"Acceptez la défaite et partez avec les sages professeurs qui ont choisi le côté du bien et allez boire un verre avec eux.",
            "Aceptas y te vas con dos portuguesas tremendas a vivir la vida.":"Vous acceptez et partez avec deux formidables femmes portugaises vivre la vie.",
            "Te quedas a intentar el último tramo de tu peor pesadilla.":"Tu restes pour tenter la dernière étape de ton pire cauchemar.",
            "Vuelves para tu casa arrepentido pero no vuelves a ese infierno llamado 'DAM', te vas con tus excompañeros a esas maravillosas jarras de las que te hablan.": "Vous rentrez chez vous repentant mais vous ne retournez pas dans cet enfer appelé 'DAM', vous allez avec vos anciens collègues dans ces merveilleuses cruches dont ils vous parlent",
            "Sigues en Portugal y te vas a un casino a jugartelo todo, obviamente esas dos tremendas portuguesas siguen ahí contigo.":"Tu es toujours au Portugal et tu vas au casino pour tout jouer, évidemment ces deux formidables Portugaises sont toujours là avec toi.",
            "Terminas el curso, apruebas todo y pasas un verano espectacularmente maravilloso!!!!!!!!!!!!!":"Vous terminez le cours, vous réussissez tout et vous passez un été spectaculairement merveilleux !!!!!!!!!!!!!",
            "Llevas sin aprobar Programación, Bases de Datos y Entornos de Desarrollo todo el curso, lo ves una perdida de tiempo y decides acompañar a tus compañeros y abandonar el curso.": "Vous n'avez pas réussi l'intégralité du cours Programmation, Bases de données et Environnements de développement, vous y voyez une perte de temps et vous décidez d'accompagner vos camarades et d'abandonner le cours.",
            "El nano está contigo y sale el 33.":"Le nano est avec vous et sort le 33.",
            "Lo pierdes todo.":"Tu perds tout.",
            "Antes de que salga el número te vas por cagao y te vas a tomar unas al master.":"Avant que le numéro ne sorte, tu vas te faire chier et aller en apporter au maître."
        }
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('selectorIdioma').addEventListener('change', function(){
        var idiomaSeleccionado=this.value;

        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].intro;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].comienzo;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].segundoTrimestre;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].portugal;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].portugal2;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].portugalRico;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].portugalPobre;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].tercerTrimestre;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].finBueno;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].fin;
        document.getElementById('historia').innerHTML = traducciones[idiomaSeleccionado]['historia'].finMalo;
    })
});

window.onload = () => {
    const juego = new Juego(miHistoria);
    juego.iniciar();
};
