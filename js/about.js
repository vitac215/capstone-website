$(function() {
    /* scrolldown animate */
    window.sr = ScrollReveal();

    let config = {
        distance: '100%',
        duration: 600,
        easing: 'linear',
        opacity: 0,
        scale: 1,
        mobile: false,
    }

    let configLeft = Object.assign({}, config);
    configLeft.origin = 'left';
    let configRight = Object.assign({}, config);
    configRight.origin = 'right';
    let configDown = Object.assign({}, config);
    configRight.origin = 'down';

    sr.reveal($('.team .multi-item'), configDown, 50);
    sr.reveal($('.mhci').children(), configLeft);
});
