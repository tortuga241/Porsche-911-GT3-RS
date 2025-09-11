console.log("Hello world!");

const butAudio = document.getElementById('butSound');
const audio = new Audio('./audio/engine.mp3');

audio.loop = true;

function playSound() {
    audio.currentTime = 0;
    audio.play();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
}

butAudio.addEventListener("mousedown", playSound);
butAudio.addEventListener("mouseup", stopSound);

butAudio.addEventListener("touchstart", playSound);
butAudio.addEventListener("touchend", stopSound);



//Плавный скролл для анимации
let scrolled = false; 

window.addEventListener("scroll", () => {
  if (!scrolled && window.scrollY > 5) {
    scrolled = true;
    document.getElementById("mainPart").scrollIntoView({
      behavior: "smooth"
    });
  }
});