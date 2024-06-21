
$('.parent-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1200,
    prevArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="prev-slick"><i class="fa-solid fa-chevron-right"></i></button>`,
});

$('.main-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1800,
    prevArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="prev-slick"><i class="fa-solid fa-chevron-right"></i></button>`,
});


