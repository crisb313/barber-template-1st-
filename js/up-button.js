const upButton = document.querySelector(".up-button")

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        upButton.style.opacity = "1";
        upButton.style.visibility = "visible";
    } else {
        upButton.style.opacity = "0";
        upButton.style.visibility = "hidden";
    }
});

upButton.addEventListener("click",() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});