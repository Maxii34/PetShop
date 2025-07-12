  const navbar = document.getElementById('navbar-secondary');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Definimos desde qué posición queremos que empiece a ocultarse
    const threshold = 100;

    if (scrollTop > threshold) {
      // Si va hacia abajo
      if (scrollTop > lastScrollTop) {
        navbar.classList.add('hide-nav');
      } else {
        // Si va hacia arriba
        navbar.classList.remove('hide-nav');
      }
    }

    lastScrollTop = scrollTop;
  });