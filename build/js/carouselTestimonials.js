var slideIndex=1;function plusSlidesTestimonials(e){showSlidesTestimonials(slideIndex+=e)}function currentSlideTestimonials(e){showSlidesTestimonials(slideIndex=e)}function showSlidesTestimonials(e){var s,l=document.getElementsByClassName("mySlidesTestimonials"),i=document.getElementsByClassName("dot-testimonials");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";for(s=0;s<i.length;s++)i[s].className=i[s].className.replace(" active","");l[slideIndex-1].style.display="flex",i[slideIndex-1].className+=" active"}showSlidesTestimonials(slideIndex);
//# sourceMappingURL=carouselTestimonials.js.map