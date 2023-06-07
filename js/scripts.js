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

// // email.js
// document.getElementById("form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent form submission
//   sendEmail();
// });

// function sendEmail() {
//   // Get form values
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;

//   // Prepare email parameters
//   var templateParams = {
//     from_name: name,
//     from_email: email,
//     from_subject: subject,
//     to_name: "Alexis", // Recipient's name
//     message: message,
//   };

//   // Send the email
//   emailjs.init("7ZFErJYAPNY5vE_w5");
//   emailjs.send("service_dggjnsd", "template_ptmtspe", templateParams).then(
//     function (response) {
//       console.log("Email sent! :)");
//       alert("Your message has been sent! 👍🏽 I'll get back to you soon 😃");
//     },
//     function (error) {
//       console.error("Error sending email :(");
//     }
//   );
// }