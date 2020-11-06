
function navFun(){
//get hamburger--icon
const ham = document.querySelector('#hamburger--icon');

function navOpen(e){
    e.preventDefault();

//get overlay
const overlay = document.querySelector('.overlay');

overlay.classList.add('show');
//get close--icon
const close = document.querySelector('#close--icon');
  
function navClose(){
    e.preventDefault();
    
overlay.classList.remove('show');
    
}

close.addEventListener('click', navClose);

//events
}
//add click-event
ham.addEventListener('click', navOpen);




}




//window-event
window.addEventListener('DOMContentLoaded', navFun);