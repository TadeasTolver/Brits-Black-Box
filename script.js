// Navigation: -------------------------------------------------------------------------------------------------------------------------------
const navLinks = document.querySelector(".nav-links");
const navBtn = document.querySelector(".nav-btn");
const body = document.querySelector("body")

let navBtnClicked = false

navBtn.addEventListener("click", () => {
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navBtnClicked = true;
        setTimeout(() => {navBtnClicked = false}, 10)
    }
});

body.addEventListener("click", () => {
    if (navBtnClicked === false) {
        navLinks.style.display = "none";
    }
});

