document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});
const images = [
  'img/3rd.jpg',                      
  'img/1st.jpeg',
  'img/2nd.jpeg',
  'img/4th.jpeg',
  'img/5th.jpeg'
];

let index = 0;
const slider = document.getElementById('slides');

// Set initial background image
slider.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
  index = (index + 1) % images.length;
  slider.style.backgroundImage = `url(${images[index]})`;
}, 5000); // Change image every 3 seconds
const elements = document.querySelectorAll('.slide-up');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5, // Trigger when 50% of the element is visible
});

elements.forEach((element) => {
  observer.observe(element);
});