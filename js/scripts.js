// scroll sections active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });
};

// scroll reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-container, .sectionHeading', { origin: 'top' });
ScrollReveal().reveal('.skills-box, .projectCards, .contactSection form', { origin: 'bottom'});
ScrollReveal().reveal('.home-container h1', { origin: 'left'});