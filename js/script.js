$('.peppermint').Peppermint({
    dots: true,
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000,
    stopSlideshowAfterInteraction: true,
    onSetup: function (n) {
        console.log('Peppermint setup done. Slides found: ' + n);
    }
});