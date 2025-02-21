const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

menuIcon.onclick = () => {
    navLinks.classList.toggle("active");
};

navItems.forEach((item) => {
    item.onclick = () => {
        navLinks.classList.remove("active");
    };
});
// animacao do texto
document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Dev Full Stack", "Analista de Sistema"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];

        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        document.querySelector(".typing").textContent = letter;

        let typeSpeed = 50;
        if (isDeleting) {
            typeSpeed = 45;
        }

        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    })();
});
