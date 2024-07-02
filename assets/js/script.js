
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
