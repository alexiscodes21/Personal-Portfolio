// Toggle the navbar menu visibility
document.getElementById("navbar-toggle").addEventListener("click", function () {
  var navbarMenu = document.getElementById("navbar-menu");
  if (navbarMenu.style.display === "none") {
    navbarMenu.style.display = "block";
  } else {
    navbarMenu.style.display = "none";
  }
});

// Move the navbar menu items back to the original location in larger viewports
window.addEventListener("resize", function () {
  var navbarMenu = document.getElementById("navbar-menu");
  var navbarToggle = document.getElementById("navbar-toggle");
  if (window.innerWidth > 600) {
    navbarMenu.style.display = "flex";
    navbarToggle.style.display = "none";
  } else {
    navbarMenu.style.display = "none";
    navbarToggle.style.display = "block";
  }
});

// Initialize the display based on the viewport width
window.addEventListener("load", function () {
  var navbarMenu = document.getElementById("navbar-menu");
  var navbarToggle = document.getElementById("navbar-toggle");
  if (window.innerWidth > 600) {
    navbarMenu.style.display = "flex";
    navbarToggle.style.display = "none";
  } else {
    navbarMenu.style.display = "none";
    navbarToggle.style.display = "block";
  }
});

// Scroll sections active link 
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
    }
  });
};

// Scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-container, .sectionHeading", { origin: "top" });
ScrollReveal().reveal(".skills-container, .projects-container, .contactSection form", { origin: "bottom" });
ScrollReveal().reveal(".home-container h1", { origin: "left" });
