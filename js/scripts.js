// scripts.js - Main JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  console.log("Website loaded successfully!");

  // Example: Form submission handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // For GitHub Pages, you'd typically use a service like Formspree
      // This is just an example showing form data
      console.log("Form submitted with the following data:");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      alert(
        "Thanks for your message! Since this is a static site on GitHub Pages, you would need to integrate with a form service to actually send this message."
      );

      // Reset the form
      contactForm.reset();
    });
  }

  // You can add more JavaScript functionality here
});
