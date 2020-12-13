/* global $*/
$(function() {
    $('.slider').slick( {
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        dotsClass:'slide-dots'
    });
});




 
