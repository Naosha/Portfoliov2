// Navigation
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const landingText = document.querySelector('.landing-text');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Hamburger turns into x
  navList.classList.toggle('active'); // Nav is full page
  landingText.classList.toggle('active'); // Landing text not visible
});

links.forEach((link) =>
  link.addEventListener('click', () => {
    hamburger.classList.remove('active'); // Hamburger not x anymore
    navList.classList.remove('active'); // Full page nav disappears
    landingText.classList.remove('active'); // Landing text visible

    links.forEach((link) => link.classList.remove('active')); // Remove active class from all nav links
    link.classList.add('active'); // Add active to clicked link
  })
);

// Change link to active when scrolling
changeLinkState = () => {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
};

changeLinkState();
window.addEventListener('scroll', changeLinkState);

// Typing effect
const typing = new Typed('.text', {
  strings: ['', 'Web Developer', 'Freediver', 'Musician', 'Problem Solver'],
  typeSpeed: 80,
  backSpeed: 40,
  loop: true,
});

// Click plane to email

const plane = document.querySelector('.paperplane');
plane.addEventListener('click', () => {});
