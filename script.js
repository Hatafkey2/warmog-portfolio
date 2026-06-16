const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    formMessage.textContent = "Your message has been sent successfully!";
    contactForm.reset();
  });
}
