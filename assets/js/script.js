var navLine = document.querySelector("body > div.container > div").clientHeight;
var navbar = document.querySelector(".navbar");
var open = document.querySelector(".mobileNavToggle");
var navigate = document.querySelectorAll(".navigate");
var scroll = document.querySelector(".scroll");

var mobileMenu = document.querySelector('.mobileMenu');
var cover = document.querySelector('.cover');
var close = document.querySelector('.close');
var tp = document.getElementsByClassName('tp');
const root = document.querySelector(":root");
root.style.setProperty("--pseudo-top", navLine + 'px');

var change = document.getElementsByClassName('collaspe');
var i;
var j;

for (i = 0; i < change.length; i++) {
    change[i].addEventListener("click", function() {
        this.classList.toggle("wide");

    });
}

for (j = 0; j < navigate.length; j++) {
    navigate[j].addEventListener("click", function() {
        mobileMenu.style.display = "none";

        cover.style.display = "none";
    });
}


window.addEventListener('scroll', () => {
    scroll.style.display = "flex";
    let y = window.scrollY;
    navbar.style.background = "rgba(40, 40, 40, 0.9)";
    if (y > 300) {
        root.style.setProperty("--pseudo-bar", 'none');
        scroll.style.transform = "scale(1.0)";
    } else {
        root.style.setProperty("--pseudo-bar", 'block');
        scroll.style.transform = "scale(0)";
        navbar.style.background = "transparent";
    }

});

open.addEventListener('click', () => {
    mobileMenu.style.display = "block";
    cover.style.display = "block";
})
close.addEventListener('click', () => {
    mobileMenu.style.display = "none";
    cover.style.display = "none";
})