/* NAVBAR SHADOW ON SCROLL */

window.addEventListener("scroll", function(){

const nav = document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";

}

else{

nav.style.boxShadow = "none";

}

});



/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});



/* PRODUCT CARD HOVER EFFECT */

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

card.addEventListener("mousemove", (e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

card.style.transform =
`rotateX(${-(y-rect.height/2)/20}deg) rotateY(${(x-rect.width/2)/20}deg) scale(1.05)`;

});

card.addEventListener("mouseleave", ()=>{

card.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});



/* PAGE FADE IN */

window.addEventListener("load", ()=>{

document.body.style.opacity = "1";

});



/* AMAZON REDIRECT TRACKER */

function buyAmazon(url){

alert("Redirecting to Amazon to complete purchase.");

window.open(url, "_blank");

}



/* MOBILE NAV MENU */

function toggleMenu(){

const menu = document.getElementById("mobileMenu");

if(menu.style.display === "block"){

menu.style.display = "none";

}

else{

menu.style.display = "block";

}

}
