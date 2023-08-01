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