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