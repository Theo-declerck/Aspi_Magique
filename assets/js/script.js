
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

// Choix des biens //
function choixbien(){
    var select = document.querySelector("#selection1").value;
    var canap =document.querySelector(".canap")
    var nbplace = document.querySelector(".nbplace")
    switch (select) {
        case 'canape':
            if (nbplace.classList.contains("hidden")){

            }else{
                nbplace.classList.add("hidden")
            }
            canap.classList.remove("hidden")
            
            break;
        case 'matelas':
            if (canap.classList.contains("hidden")){

            }else{
                canap.classList.add("hidden")
            }
            nbplace.classList.remove("hidden")
            break;
        case 'tapis':
            console.log("Tapis pas encore disponoble")
            break;
        default:
            console.log("Veuillez sélectionner un bien...");
    }
}

function choixplace() {
    var selection2 = document.querySelector("#selection2").value
    var p1 = document.querySelector(".p1");
    var p2 = document.querySelector(".p2");

    switch (selection2) {
        case 'un':
            if (!p2.classList.contains("hidden")) {
                p2.classList.add("hidden");
            }
            p1.classList.remove("hidden");
            break;
        case 'deux':
            if (!p1.classList.contains("hidden")) {
                p1.classList.add("hidden");
            }
            p2.classList.remove("hidden");
            break;
        default:
            console.log(selection2);
    }
}

// Choix des biens //
