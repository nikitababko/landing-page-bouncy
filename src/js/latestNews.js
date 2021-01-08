// Toggle info
const activeBtn = document.querySelectorAll(".more__btn");

activeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("more__btn--active");

        let newsContent = document.querySelector(".more__content");
        newsContent.classList.toggle("more__content--active");
        newsContent.classList.toggle("fade");
    });
});

// Carousel
var slideIndex = 1;
showSlidesNews(slideIndex);

// Next/previous controls
function plusSlidesNews(n) {
    showSlidesNews((slideIndex += n));
}

// Thumbnail image controls
function currentSlideNews(n) {
    showSlidesNews((slideIndex = n));
}

function showSlidesNews(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesNews");
    var dots = document.getElementsByClassName("dot-news");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}
