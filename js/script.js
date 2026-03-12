// ===== NAVBAR SHADOW ON SCROLL =====

window.addEventListener("scroll", function () {

const nav = document.querySelector("nav");

if (window.scrollY > 50) {
nav.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
} 
else {
nav.style.boxShadow = "none";
}

});



// ===== SMOOTH SCROLL =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior: "smooth"
});

});

});



// ===== SIMPLE BUTTON FEEDBACK =====

const buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

button.style.transform = "scale(0.95)";

setTimeout(() => {
button.style.transform = "scale(1)";
}, 150);

});

});



// ===== FADE-IN EFFECT ON PAGE LOAD =====

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});
