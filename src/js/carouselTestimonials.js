var slideIndex = 1;
showSlidesTestimonials(slideIndex);

// Next/previous controls
function plusSlidesTestimonials(n) {
    showSlidesTestimonials((slideIndex += n));
}

// Thumbnail image controls
function currentSlideTestimonials(n) {
    showSlidesTestimonials((slideIndex = n));
}

function showSlidesTestimonials(n) {
    var i;
    var slides = document.getElementsByClassName("mySlidesTestimonials");
    var dots = document.getElementsByClassName("dot-testimonials");
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
