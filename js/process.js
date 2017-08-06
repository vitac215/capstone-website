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

    sr.reveal($('.numbers .multi-parent').children(), configDown, 50);
    sr.reveal($('.interview').children(), configLeft);
    sr.reveal($('.research').children(), configLeft);
    sr.reveal($('.visioning').children(), configRight);
    sr.reveal($('.storyboard').children(), configLeft);
    sr.reveal($('.ridealong').children(), configRight);
    sr.reveal($('.prototype').children(), configLeft);
    sr.reveal($('.testing').children(), configRight);
});
