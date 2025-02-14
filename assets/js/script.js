var navLine = document.querySelector("body > div.container > div").clientHeight;
var navbar = document.querySelector(".navbar");
var open = document.querySelector(".mobileNavToggle");
var navigate = document.querySelectorAll(".navigate");


var mobileMenu = document.querySelector('.mobileMenu');
var cover = document.querySelector('.cover');
var close = document.querySelector('.close');
var tp = document.getElementsByClassName('tp');
const root = document.querySelector(":root"); //grabbing the root element
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
  	let y = window.scrollY;
  	navbar.style.background = "rgba(40, 40, 40, 0.9)";
  if (y > 300) {
  	console.log("scroll")}	
  else{
  	navbar.style.background = "transparent";
  }

  });
  
open.addEventListener('click', ()=>{
	mobileMenu.style.display = "block";
  cover.style.display = "block";
})
close.addEventListener('click', ()=>{
	mobileMenu.style.display = "none";
  cover.style.display = "none";
})