
// Menu burger //
var btn = document.querySelector(".btn");
var close = document.querySelector("#closebtn");
var sbm = document.getElementById("sbm");
function closeNav() {
    sbm.classList.remove("active");
};
function openNav() {
    sbm.classList.add("active");
};
btn.addEventListener("click", openNav);
close.addEventListener("click", closeNav);
// Menu burger //


// Apparition de la modal connexion //
var user = document.querySelector("#user")
var affi = document.querySelector(".connexion")
var back = document.querySelector(".back")
var body = document.querySelector("body")
var fer = document.querySelector("#closed")

function connexion(){
    affi.classList.remove("hidden")
    back.classList.remove("hidden")
    body.classList.add("scrollx")
}

function fermer(){
    affi.classList.add("hidden")
    back.classList.add("hidden")
    body.classList.remove("scrollx")
}

user.addEventListener("click",connexion);
fer.addEventListener("click",fermer);
// Apparition de la modal connexion //
