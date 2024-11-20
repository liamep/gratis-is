// Initialiser EmailJS
(function () {
  emailjs.init("96A_97V95NtNCtRdk"); // Sett inn din offentlige nøkkel fra EmailJS
})();

// Legg til event listener for skjemaet
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Forhindre siden fra å laste på nytt

    // Send e-posten ved hjelp av EmailJS
    emailjs
      .sendForm("service_z2fqfaf", "template_wmn7dp9", this)
      .then(() => {
        alert("Meldingen ble sendt!");
        this.reset(); // Tøm skjemaet
      })
      .catch((error) => {
        console.error("Feil ved sending:", error);
        alert("Det oppstod en feil. Prøv igjen.");
      });
  });
