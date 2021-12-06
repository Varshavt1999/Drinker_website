let hamburger = document.querySelector(".hamburger");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
console.log(menu)
let bodyContainer = document.getElementById("body-container");

hamburger.addEventListener("click",()=>{
    bodyContainer.classList.toggle("active");
    menu.classList.toggle("active");
    close.classList.toggle("active");
    hamburger.classList.toggle("active");
})
close.addEventListener("click",()=>{
    bodyContainer.classList.toggle("active");
    menu.classList.toggle("active");
    close.classList.toggle("active");
    hamburger.classList.toggle("active");
});

let readButton = document.querySelector(".read-button");
let text = document.querySelector(".read-more");

readButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let msg = "Read Less"
    text.classList.toggle("active");
    text.inneText = msg;
})
