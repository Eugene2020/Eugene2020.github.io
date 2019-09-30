$('.slider-mobile').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-for'
});
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-mobile',
    //centerMode: true,
    focusOnSelect: true,
    adaptiveHeight: true
});
$('#accordionExample').on('hidden.bs.collapse', function () {
    $('.slider-for')[0].slick.animateHeight();
});
$('#accordionExample').on('shown.bs.collapse', function () {
    $('.slider-for')[0].slick.animateHeight();
})