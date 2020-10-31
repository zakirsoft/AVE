// product view slider
$(document).ready(function () {
    $('.single-product__image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:
    '<span class="nextArrow"><i class="fas fa-chevron-right"></i> </span>',
    prevArrow:
    '<span class="prevArrow"><i class="fas fa-chevron-left"></i> </span>',
    });
    });