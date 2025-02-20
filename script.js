// Lista de videos con sus títulos (las indicaciones NO cambian)
const videos = [
    { src: "InOut.mp4", title: "Ejercicio de empuje y salida" },
    { src: "Mancuernas.mp4", title: "Ejercicio del nadador" },
    { src: "ElevacionBanda.mp4", title: "Ejercicio de elevación" },
    { src: "RotacionBrazo.mp4", title: "Ejercicio de Rotación Manguito" },
    { src: "tiroConArco.mp4", title: "Ejercicio de Tiro con Arco" }
];

let currentIndex = 0;

const videoPlayer = document.getElementById("video-player");
const videoSource = document.getElementById("video-source");
const tituloVideo = document.getElementById("titulo-video");
const prevButton = document.getElementById("prev-video");
const nextButton = document.getElementById("next-video");
const videoContainer = document.getElementById("video-container");

// Función para cargar el video
function loadVideo(index) {
    if (index >= 0 && index < videos.length) {
        currentIndex = index;
        videoSource.src = videos[currentIndex].src;
        videoPlayer.load();
        tituloVideo.textContent = videos[currentIndex].title;
    }
}

// Botones de navegación
prevButton.addEventListener("click", () => {
    if (currentIndex > 0) loadVideo(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
    if (currentIndex < videos.length - 1) loadVideo(currentIndex + 1);
});

// GESTOS TÁCTILES (Deslizar para cambiar de video)
let touchStartX = 0;
let touchEndX = 0;

videoContainer.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

videoContainer.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    let swipeThreshold = 50; // Mínimo desplazamiento para considerar un swipe

    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe a la izquierda (siguiente video)
        if (currentIndex < videos.length - 1) loadVideo(currentIndex + 1);
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe a la derecha (video anterior)
        if (currentIndex > 0) loadVideo(currentIndex - 1);
    }
}

// Cargar el primer video al inicio
loadVideo(currentIndex);
