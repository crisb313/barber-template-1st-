const button = document.getElementById("button"),
nav = document.getElementById("nav");

button.addEventListener('click',()=> {
    nav.classList.toggle("visible")
})