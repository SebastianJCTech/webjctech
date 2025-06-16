// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".carousel-slide");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const prevBtn = document.querySelector(".carousel-btn.prev");

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Autoplay carousel
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Particles.js config
  particlesJS("particles-js", {
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      color: { value: "#00ffc3" },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ffc3",
        opacity: 0.4,
        width: 1
      },
      move: {
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  });
});
