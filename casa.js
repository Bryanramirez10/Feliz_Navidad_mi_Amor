// Elementos del DOM
const muñeco = document.getElementById('muñeco');
const pensamiento = document.getElementById('pensamiento');
const mensajeBienvenida = document.getElementById('mensajeBienvenida');
const taza = document.getElementById('taza');
const santa = document.getElementById('santa');
const mensajeSanta = document.getElementById('mensajeSanta');
const btnSorpresa = document.getElementById('btnSorpresa'); // Botón de sorpresa
const videoContainer = document.getElementById('videoContainer'); // Contenedor del video
const videoSorpresa = document.getElementById('videoSorpresa'); // Video de la sorpresa
const musicaFondo = document.getElementById('audioFondo'); // Música de fondo
const buttonContainer = document.getElementById('buttonContainer'); // Contenedor del botón para la redirección

// Array de pensamientos del muñeco
const pensamientos = [
    "¡Bienvenida a mi casa, amorcito!",
    "Aquí está mucho más calentito",
    "Hace frío allá afuera, ¿verdad?",
    "Te he preparado una bebida caliente",  // Aquí aparece la taza
    "Ahora que te tomaste el chocolatito",
    "Amor dejame decirte algunas cosas",
    "Antes que nada, Feliz navidad mi amorcito🎅🏻🎄🥳",
    "Creeme que esto lo estoy haciendo desde el sabado",
    "Pero el sabado antes de inscribir",
    "Osea desde el 14 de Diciembre jijij",
    "Para que fuera mas especial que nunca",
    "Y que todo me saliera como yo queria",
    "Que no fuera algo simple sino algo bonito",
    "Porque te mereces algo bonito, asi que te mereces esto y mucho mass",
    "La verdad te extraño mucho mi amor",
    "Pero prosiguiendo con lo que te quiero decir",
    "Amor se que esta navidad fue diferente",
    "Sabes, te sere bien sincero",
    "Me pongo siempre en tu lugar sabes?",
    "Es decir, ya pasaron 5 meses desde lo de tu hermano",
    "Y aunq para muchas personas ya paso mucho tiempo",
    "Creo que a ti te sigue doliendo como el primer dia",
    "Pienso siempre en ti sabes?",
    "Por eso no me importa que no me respondas los mensajes",
    "Siempre te enviare mas y mas para saber de ti",
    "Para pedirte que tengas cuidado",
    "Porque me interesa demasiado que te sientas bien",
    "Y que si no te sientes bien, poder platicarlo",
    "Se muy bien que hablar no solucionara tus problemas",
    "Creo que no puedo solucionar tus problemas en general",
    "Pero si creo que puedo demostrarte mi amor y no dejarte solita",
    "Y asi de esa manera que duela cada vez menos",
    "Entonces por eso trato de cada dia demostrarte mi amor enviandote algo bonito",
    "Diciendote algo lindo, estando pendiente de ti",
    "Aunq se que no siempre me dices cuando no te sientes bien",
    "Y eso no es algo que me agrade",
    "Se que esta navidad esta siendo diferente",
    "Se que es muy dificil el saber que tu hermano no esta",
    "Se que lo extrañas cada dia",
    "Y se que te encantaria que el estuviera aun, y pudiera verte",
    "Pudiera hablarte y estar contigo, creeme que todo eso lo se",
    "Y por eso no me extraña que no siempre estes bien",
    "Lo que no comparto y me molesta, es el hecho que no me lo digas",
    "Que no me digas cuando te sientes mal",
    "Creo que cualquier cosa puedo hacer para que te sientas bien",
    "Osea, yo se que a ti te duele que no este tu hermano",
    "Se que hay momentos en los q lo pudas extrañar aun mas, como navidad",
    "Por eso hice esto para que pudieras leerlo",
    "Ahora bien, si yo supiera exactamente cuando no estas bien",
    "Crees que no haria algo tambien amor?",
    "Si yo ya te dije muchas veces q estoy para ti, pero mas q decirtelo",
    "Me encanta demostrartelo y creo que es lo mejor que puedo hacer",
    "Y creo que ya me extendi bastante amor porque esto no es lo unico jijijij",
    "Por favor jamas dudes de mi amor hacia ti, sii?",
    "Que creeme que intento demostrarte siempre mi amor",
    "Por favor el dia que sientas que estoy raro",
    "O el dia que sientas que no te demostre mucho mi amor",
    "Por favor dimelo si?",
    "Prefiero mil veces aclararte mi amor y demostrarte lo mucho que ti amuu",
    "A que saques concluciones en tu mente que no son asi mi amorcito",
    "Asi que tii amuuu muchote mi amorr, te deseo una linda y feliz navidaddd",
    "Y hice esto por muchas cosas",
    "1-Ti amu con todo mi corazon y te lo estoy demostrando asi",
    "(Virtual porque no te e visto, cuando te vea te lo demuestro en persona)",
    "2-Como se que extrañas a tu hermanito, me imagine que puedes llegar a sentirte mal",
    "Asi que me estoy adelantando antes que tu no me respondas y te sientas mal",
    "Porque se que si te sientes mal no me vas a ni siquiera contestar",
    "Y tampoco me diras que te sientes mal",
    "Asi que creeme que yo lo se y se que extrañas a tu hermanito",
    "Asi que nada mas me queda decirte por ahorita amor",
    "Ti amuuuu con toyo mi corazonnnn💖",
    "(Solo para que sepas, el video que veras, lo grabe 2 veces)",
    "(Al final me extendi demasiado hablando )",
    "(Y de cierta manera me desvie un poquito de lo que queria decirte)",
    "(Jijiji, que pena amor, te enseño los bloopers en persona)",
    "(Usa audifonos amor)",
    "Amor pero antes de tocar el boton, dejame decirte",
    "Es un video largo, perdonnn amor queria que fuera mas corto pero lo resumii",
    "Y puess es lo mas corto q pude amor, peydon",
    "Asi que si no puedes verlo hoy, creeme que no hay problema mi amor",
    "Se y reconozco que es un video bien largo",
    "Pero me nacio hacerlo asi, asi que cuando puedas princesa",
];

// Variables para seguimiento de pensamientos
let indicePensamiento = 0;
let haMostradoUltimaFrase = false; // Bandera para verificar si ya se mostró la última frase

// Función para mostrar el pensamiento
function mostrarPensamiento() {
    if (haMostradoUltimaFrase) return; // No hacer nada si ya se mostró la última frase

    pensamiento.textContent = pensamientos[indicePensamiento]; // Mostrar el pensamiento actual
    pensamiento.style.visibility = 'visible'; // Hacer visible el cuadro de pensamiento

    // Mostrar la taza si es el pensamiento de bebida caliente
    if (pensamientos[indicePensamiento] === "Te he preparado una bebida caliente") {
        taza.style.visibility = 'visible'; // Mostrar la taza
    } else {
        taza.style.visibility = 'hidden'; // Ocultar la taza si no es el pensamiento de bebida caliente
    }

    // Si hemos llegado a la última frase, marcamos que ya se mostró y mostramos el botón
    if (indicePensamiento === pensamientos.length - 1) {
        haMostradoUltimaFrase = true;
        mostrarBotonSorpresa(); // Muestra el botón al finalizar las frases
    } else {
        indicePensamiento = (indicePensamiento + 1) % pensamientos.length; // Avanzar al siguiente pensamiento
    }

    // Posicionar el cuadro de pensamiento sobre la cabeza del muñeco
    const muñecoRect = muñeco.getBoundingClientRect(); // Obtener la posición y tamaño del muñeco
    pensamiento.style.left = `${muñecoRect.left + muñecoRect.width / 2 - pensamiento.offsetWidth / 2}px`; // Centrar el pensamiento
    pensamiento.style.bottom = `${window.innerHeight - muñecoRect.top + 10}px`; // Ajustar la posición sobre la cabeza
}

// Función para mover el muñeco
function moverMuñeco() {
    muñeco.classList.add('mover'); // Añadir la clase para la animación

    // Después de la animación, eliminar la clase para poder reutilizarla
    setTimeout(() => {
        muñeco.classList.remove('mover');
    }, 500); // Duración de la animación
}

// Función para mostrar Santa con una animación suave
function mostrarSanta() {
    santa.classList.add('visible'); // Añadir la clase 'visible' para hacerlo aparecer
    mensajeSanta.style.visibility = 'visible'; // Mostrar el mensaje de Santa
}

// Función para ocultar el mensaje de bienvenida
function ocultarMensaje() {
    mensajeBienvenida.style.visibility = 'hidden';
}

// Función para mostrar el botón sorpresa
function mostrarBotonSorpresa() {
    btnSorpresa.style.visibility = 'visible';
    btnSorpresa.style.display = 'inline-block';
}

// Función para bajar gradualmente el volumen de la música de fondo
function bajarVolumenMusica() {
    const fadeInterval = setInterval(() => {
        if (musicaFondo.volume > 0.1) {
            musicaFondo.volume -= 0.1; // Reduce el volumen gradualmente
        } else {
            clearInterval(fadeInterval); // Detiene el intervalo cuando el volumen es muy bajo
            musicaFondo.volume = 0; // Asegura que el volumen esté en 0
        }
    }, 100); // Ajusta el tiempo entre cada cambio de volumen
}

// Función para restaurar el volumen de la música de fondo
function restaurarVolumenMusica() {
    const fadeInterval = setInterval(() => {
        if (musicaFondo.volume < 1) {
            musicaFondo.volume += 0.1; // Aumenta el volumen gradualmente
        } else {
            clearInterval(fadeInterval); // Detiene el intervalo cuando el volumen alcanza el máximo
            musicaFondo.volume = 1; // Asegura que el volumen esté en 1
        }
    }, 100);
}

// Función para mostrar el video de sorpresa
function mostrarVideo() {
    // Oculta el botón y muestra el contenedor del video
    btnSorpresa.style.visibility = 'hidden';
    btnSorpresa.style.display = 'none';

    bajarVolumenMusica(); // Baja el volumen de la música de fondo

    videoContainer.style.visibility = 'visible';
    videoContainer.style.display = 'block';

    // Usamos la API de YouTube para controlar la reproducción
    const player = new YT.Player('youtubeVideo', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });

    // Play the video
    player.playVideo();
}

// Función para manejar el estado del video
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        restaurarVolumenMusica(); // Restaura el volumen de la música de fondo
        mostrarBotonDebajoDelVideo(); // Muestra el botón debajo del video
    }
}

// Función para mostrar el botón debajo del video
function mostrarBotonDebajoDelVideo() {
    // Aseguramos que el botón esté visible y centrado
    buttonContainer.style.visibility = 'visible';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px'; // Fijamos en la parte inferior
    buttonContainer.style.left = '50%';
    buttonContainer.style.transform = 'translateX(-50%)';
    buttonContainer.style.zIndex = '1000'; // Asegura que esté sobre otros elementos
}

// Event listener para el botón de sorpresa
btnSorpresa.addEventListener('click', mostrarVideo);

// Event listener para interactuar con el muñeco
function interaccionMuñeco() {
    moverMuñeco();         // Mueve el muñeco
    mostrarPensamiento();  // Muestra el siguiente pensamiento
    ocultarMensaje();      // Oculta el mensaje de bienvenida
}

// Detectar clic y toque en el muñeco
muñeco.addEventListener('click', interaccionMuñeco); // Para PC (clic)
muñeco.addEventListener('touchstart', interaccionMuñeco); // Para dispositivos táctiles

// Mostrar el muñeco al cargar la página
window.onload = () => {
    setTimeout(() => {
        muñeco.style.visibility = 'visible'; // Mostrar muñeco después de cargar
        mostrarSanta(); // Muestra Santa con su mensaje
    }, 2000); // Espera 2 segundos para mostrar el muñeco
};
// Función para redirigir a la página de fuegos artificiales
function goToFireworks() {
    window.location.href = "fireworks.html"; // Redirige a la página de los fuegos artificiales
}