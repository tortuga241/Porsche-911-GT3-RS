console.log("Hello world!");

//Открыть/закрыть меню
const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
});



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

//Анимация 911 на банере
window.addEventListener("DOMContentLoaded", () => {
  const car = document.getElementById("car");
  setTimeout(() => {
    car.classList.add("opacity-100");
  }, 100);
});

//Анимация цифр (второй блок)
function animateCounter(el, duration = 700) {
  const target = parseFloat(el.getAttribute("data-target"));
  let startTime = null;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function updateCounter(currentTime) {
    if (!startTime) startTime = currentTime;
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = easeOutCubic(progress);
    const value = (easedProgress * target).toFixed(target % 1 === 0 ? 0 : 1);

    el.textContent = value; // обновляем только число

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

const mainPart = document.getElementById("mainPart");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll(".counter").forEach(counter => {
        animateCounter(counter, 800);
      });
      observer.unobserve(mainPart);
    }
  });
}, { threshold: 0.3 });

observer.observe(mainPart);
