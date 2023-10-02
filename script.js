//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const soundName = button.id;
        playSound(soundName);
    });
});

stopButton.addEventListener('click', () => {
    stopAllSounds();
});

function playSound(name) {
    const audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function stopAllSounds() {
    const audioElements = document.querySelectorAll('audio');
    audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
    });
}
