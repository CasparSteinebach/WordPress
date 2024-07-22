// main.js

document.addEventListener('DOMContentLoaded', function() {
  // Mobiel menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
          mobileMenu.classList.toggle('hidden');
      });
  }

  // Smooth scroll voor anker links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Lazy loading voor afbeeldingen
  if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const image = entry.target;
                  image.src = image.dataset.src;
                  image.classList.remove('lazy');
                  imageObserver.unobserve(image);
              }
          });
      });

      document.querySelectorAll('img.lazy').forEach(img => imageObserver.observe(img));
  }

  // Form validatie
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
      form.addEventListener('submit', function(event) {
          if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
          }
          form.classList.add('was-validated');
      }, false);
  });
});
