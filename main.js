document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = newsletterForm.querySelector("input[type=email]");
      var email = input ? input.value : "";
      window.location.href =
        "mailto:mark@silvertonecoadventures.com?subject=Newsletter%20signup&body=" +
        encodeURIComponent(email);
    });
  }

  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.querySelector("#name").value;
      var email = contactForm.querySelector("#email").value;
      var message = contactForm.querySelector("#message").value;
      var subject = "Adventure inquiry from " + name;
      var body = message + "\n\nReply to: " + email;
      window.location.href =
        "mailto:mark@silvertonecoadventures.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
});
