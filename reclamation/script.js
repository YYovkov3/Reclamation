const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach((container) => {
    const textOverlay = container.querySelector('.text-overlay');

    container.addEventListener('mouseenter', () => {
        textOverlay.style.opacity = 1;
    });

    container.addEventListener('mouseleave', () => {
        textOverlay.style.opacity = 0;
    });
});

function updateHawaiiTime() {
    const hawaiiOffset = -10; // Часова разлика на Хавай спрямо UTC (GMT-10)

    const now = new Date();
    const hawaiiTime = new Date(now.getTime() + hawaiiOffset * 60 * 60 * 1000);

    const hours = String(hawaiiTime.getUTCHours()).padStart(2, '0');
    const minutes = String(hawaiiTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(hawaiiTime.getUTCSeconds()).padStart(2, '0');

    const hawaiiClockElement = document.querySelectorAll('#hawaii-clock');
    hawaiiClockElement.forEach((element) => {
        element.textContent = `${hours}:${minutes}:${seconds}`;
    });
}

setInterval(updateHawaiiTime, 1000);

function updateDominicanTime() {
    const dominicanOffset = -4; // Часова разлика на Доминикана спрямо UTC (GMT-4)

    const now = new Date();
    const dominicanTime = new Date(now.getTime() + dominicanOffset * 60 * 60 * 1000);

    const hours = String(dominicanTime.getUTCHours()).padStart(2, '0');
    const minutes = String(dominicanTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(dominicanTime.getUTCSeconds()).padStart(2, '0');

    const dominicanClockElement = document.querySelectorAll('#dominican-clock');
    dominicanClockElement.forEach((element) => {
        element.textContent = `${hours}:${minutes}:${seconds}`;
    });
}

// Актуализираме времето на всеки секунда
setInterval(updateDominicanTime, 1000);

function updatePomorieTime() {
    const pomorieOffset = 3; // Часова разлика на Поморие спрямо UTC (GMT+3)

    const now = new Date();
    const pomorieTime = new Date(now.getTime() + pomorieOffset * 60 * 60 * 1000);

    const hours = String(pomorieTime.getUTCHours()).padStart(2, '0');
    const minutes = String(pomorieTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(pomorieTime.getUTCSeconds()).padStart(2, '0');

    const pomorieClockElement = document.querySelectorAll('#pomorie-clock');
    pomorieClockElement.forEach((element) => {
        element.textContent = `${hours}:${minutes}:${seconds}`;
    });
}

// Актуализираме времето на всеки секунда
setInterval(updatePomorieTime, 1000);


const images = [
    "istock-1196861791-159474-800x450.jpg",
    "honolulu.webp", 
    "20230123-hawaii-fa.jpg",
];
  
const imageElement = document.querySelector(".havai");
let currentImageIndex = 0;
  
function changeHawaiiImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = images[currentImageIndex];
    imageElement.src = imageUrl;
}
  
setInterval(changeHawaiiImage, 10000);

// За Доминикана
const dominicanImages = [
    "iberostar-dominicana-all-inclusive-0.jpg",
    "republica-dominicana-busca-atraer-turistas-g.jpg", 
    "Republica-Dominicana-recupera-80-de-turistas-del-2019.jpeg",
];
  
const dominicanImageElement = document.querySelector(".dominicana");
let currentDominicanImageIndex = 0;
  
function changeDominicanImage() {
    currentDominicanImageIndex = (currentDominicanImageIndex + 1) % dominicanImages.length;
    const dominicanImageUrl = dominicanImages[currentDominicanImageIndex];
    dominicanImageElement.src = dominicanImageUrl;
}
  
setInterval(changeDominicanImage, 10000);

const pomorieImages = [
    "1658744994-263-010-pomorie.jpg",
    "150_1.jpg", 
    "thumb_1024x663_Pomorie.jpg",
];
  
const pomorieImageElement = document.querySelector(".Pomorie");
let currentPomorieImageIndex = 0;
  
function changePomorieImage() {
    currentPomorieImageIndex = (currentPomorieImageIndex + 1) % pomorieImages.length;
    const pomorieImageUrl = pomorieImages[currentPomorieImageIndex];
    pomorieImageElement.src = pomorieImageUrl;
}
  
setInterval(changePomorieImage, 10000);

const banskoImages = [
    "iberostar-dominicana-all-inclusive-0.jpg",
    "278_4680.jpg", 
    "0609167001635708349_1663092_920x517.webp",
];
  
const banskoImageElement = document.querySelector(".Bansko");
let currentBanskoImageIndex = 0;
  
function changeBanskoImage() {
    currentBanskoImageIndex = (currentBanskoImageIndex + 1) % banskoImages.length;
    const banskoImageUrl = banskoImages[currentBanskoImageIndex];
    banskoImageElement.src = banskoImageUrl;
}
  
setInterval(changePomorieImage, 10000);
  
