$(function() {

    $('.partners__list').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 1000,
        slidesToShow: 4,

        autoplay: true
    });

    $('.hero__slider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplaySpeed: 10000,
        autoplay: true,
        fade: true
    });

    $('.reviews__inner').slick({
        dots: true,
        arrows: true
    });
    


});