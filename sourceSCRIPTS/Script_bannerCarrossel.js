// Array com os caminhos das imagens
const images = [
    './assets/image1.jpg',
    './assets/image2.jpg',
    './assets/image3.jpg'
];

let currentIndex = 0;

const header = document.querySelector('.banner');

function updateBackground() {
    header.style.backgroundImage = `url(${images[currentIndex]})`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
}

// Inicializa o carrossel
updateBackground();

// Isso faz mudar a imagem automaticamente a cada 5 segundos
setInterval(showNextImage, 5000);
