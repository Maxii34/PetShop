const navbar = document.getElementById("navbar-secondary");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Definimos desde qué posición queremos que empiece a ocultarse
  const threshold = 300;

  if (scrollTop > threshold) {
    // Si va hacia abajo
    if (scrollTop > lastScrollTop) {
      navbar.classList.add("hide-nav");
    } else {
      // Si va hacia arriba
      navbar.classList.remove("hide-nav");
    }
  }

  lastScrollTop = scrollTop;
});

//Cards extras

const toggleBtn = document.getElementById("toggleCards");
const extraCards = document.querySelectorAll(".extra-card");

toggleBtn.addEventListener("click", () => {
  // Comprobamos si hay alguna carta oculta
  const anyHidden = Array.from(extraCards).some(card => card.classList.contains("d-none"));

  if (anyHidden) {
    // Mostrar todas las tarjetas
    extraCards.forEach((card) => card.classList.remove("d-none"));
    toggleBtn.textContent = "Mostrar menos";
  } else {
    // Ocultar todas las tarjetas
    extraCards.forEach((card) => card.classList.add("d-none"));
    toggleBtn.textContent = "Mostrar más";
  }
});


