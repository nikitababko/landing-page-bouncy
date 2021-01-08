(function () {
    const header = document.querySelector(".header");
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            header.classList.add("header--fixed");
        } else {
            header.classList.remove("header--fixed");
        }
    };
})();

(function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const burgerBtn = document.querySelector(".burger-menu__btn");
    const headerNav = document.querySelector(".nav");

    burgerMenu.addEventListener("click", () => {
        burgerBtn.classList.toggle("burger-menu__btn--active");
        headerNav.classList.toggle("nav--active");
    });
})();
