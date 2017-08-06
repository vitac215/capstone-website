$(function() {
    /* scrolldown animate */
    window.sr = ScrollReveal();

    let config = {
        distance: '100%',
        duration: 800,
        easing: 'linear',
        opacity: 0,
        scale: 1,
        mobile: false,
    }

    let configLeft = Object.assign({}, config);
    configLeft.origin = 'left';
    let configRight = Object.assign({}, config);
    configRight.origin = 'right';

    sr.reveal($('.solution').children(), configLeft);
    sr.reveal($('.process').children(), configRight);
});
