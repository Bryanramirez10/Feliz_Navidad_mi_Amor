// Generar copos de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    // Posición aleatoria horizontal
    const leftPosition = Math.random() * 100; // 0 a 100%
    snowflake.style.left = `${leftPosition}%`;

    // Duración aleatoria de la animación (entre 2 y 4 segundos)
    const duration = Math.random() * 2 + 2; // Duración entre 2 y 4 segundos
    snowflake.style.animationDuration = `${duration}s`;

    // Agregar al body
    document.body.appendChild(snowflake);

    // Eliminar copo después de que caiga
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}

// Generar copos de nieve cada segundo
setInterval(createSnowflake, 1000);

// Elementos del DOM
const muñeco = document.getElementById('muñeco');
const pensamiento = document.getElementById('pensamiento');
const mensajeBienvenida = document.getElementById('mensajeBienvenida');
const irCasaBtn = document.getElementById('irCasaBtn'); // El botón "Ir a la casa"

// Array de pensamientos del muñeco
const pensamientos = [
    "Amorrrr",
    "Feliz Navidad Princesaa🎄🎅🏻",
    "Amor, para que veas esto",
    "Paso un rato de estres",
    "Porque queria que me saliera como yo queriaa",
    "Y esto que estas leyendo, lo volvi a escribir",
    "Es mas, hay una version anterior que si te soy sincero",
    "Me gusto bastante, pero era diferente y mas larga",
    "Y tenian que ser 2 partes",
    "Una antes de navidad y otra ese dia pero pues siento que podia hacerlo mas corto",
    "Asi que lo hice asi amor",
    "Pero ahorita vamonos mejor a mi casa, hace mucho frioo",
    "Se q soy un muñeco de nieve pero hace frio",
    "Y esta nevandoo, para nada Bryan puso la nieve jijijiji",
    "Vamonos amor   ",
];

// Variable para seguir el índice de pensamientos
let indicePensamiento = 0;

// Función para mostrar el pensamiento
function mostrarPensamiento() {
    pensamiento.textContent = pensamientos[indicePensamiento]; // Mostrar el pensamiento actual
    pensamiento.style.visibility = 'visible'; // Hacer visible el cuadro de pensamiento

    // Aumentar el índice de pensamientos
    indicePensamiento = (indicePensamiento + 1) % pensamientos.length;

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

// Función para ocultar el mensaje de bienvenida
function ocultarMensaje() {
    mensajeBienvenida.style.visibility = 'hidden';
}

// Función para mostrar el botón "Ir a la casa" después de mostrar todos los pensamientos
function mostrarBotonIrACasa() {
    // Mostrar el botón después de un pequeño retraso
    setTimeout(() => {
        irCasaBtn.style.display = 'block'; // Mostrar el botón
        mensajeBienvenida.style.display = 'none'; // Ocultar el mensaje de bienvenida
    }, 1000); // Esperar 1 segundo antes de mostrar el botón
}

// Event listener para interactuar con el muñeco
function interaccionMuñeco() {
    moverMuñeco();         // Mueve el muñeco
    mostrarPensamiento();  // Muestra el siguiente pensamiento
    ocultarMensaje();      // Oculta el mensaje de bienvenida

    // Si todos los pensamientos han sido mostrados, mostrar el botón
    if (indicePensamiento === 0) {
        mostrarBotonIrACasa();
    }
}

// Detectar clic y toque en el muñeco
muñeco.addEventListener('click', interaccionMuñeco); // Para PC (clic)
muñeco.addEventListener('touchstart', interaccionMuñeco); // Para dispositivos táctiles

// Mostrar el muñeco al cargar la página
window.onload = () => {
    muñeco.style.visibility = 'visible'; // Asegura que el muñeco se muestre inmediatamente al cargar
};
 
// Función para redirigir a la página "casa.html"
function irACasa() {
    window.location.href = 'casa.html'; // Redirigir al archivo "casa.html"
}
