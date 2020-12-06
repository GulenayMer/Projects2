const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const close = document.getElementById("close");



// ------------ Event listeners --------------- //

// toggle navigation
toggle.addEventListener("click", () =>
    document.body.classList.toggle("show-nav")
);


// show model
open.addEventListener("click", () => modal.classList.add("show-modal"));

// close model
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// hide modal on outside click
//top most object in the browser- -window
window.addEventListener("click", e => {
if(e.target == modal){
    modal.classList.remove("show-modal")
} else {
    false
}

// e.target == modal ?  modal.classList.remove("show-modal") : false;
})