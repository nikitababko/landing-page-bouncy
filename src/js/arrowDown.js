const arrowBtn = document.querySelector(".arrow__btn");
arrowBtn.addEventListener("click", () => {
    let homeHeght = document.getElementById("home").offsetHeight;
    window.scrollBy(0, homeHeght);
});
