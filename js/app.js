/* ----------- loading screen -----------------*/
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disappear");
}


/* ------------- arrow animation ----------------*/
function arrowAnimation() {
    document.querySelector('.arrow').style.animationIterationCount = "infinite";
    console.log( document.getElementsByClassName('arrow'));
}
arrowAnimation()


/* ------------- open menu --------------- */
var menuBtn = document.querySelector('#menu')
var menu = document.querySelector('.menu-content')
console.log(menuBtn)
console.log(menu)

menuBtn.addEventListener("click", openMenu);

function openMenu(){
    menu.classList.add("show-menu");
}   

/* ---------------close menu ----------------- */
var closeBtn = document.querySelector('#closeBtn');
console.log(closeBtn)

closeBtn.addEventListener('click', closeMenu);

function closeMenu(){
    menu.classList.remove("show-menu");
}