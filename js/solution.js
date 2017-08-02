$(function() {
    /* detect user agent */
    userAgent = window.navigator.platform;
    if (userAgent !== "MacIntel") {
        $(".prototype iframe").addClass("hide");
    }

    // setTimeout(function() {
        /* scrolldown animate */
        window.sr = ScrollReveal();

        let duration = 800;
        let config = {
            distance: '100%',
            duration: duration,
            easing: 'linear',
            opacity: 0,
            scale: 1,
            mobile: true,
        }

        let configLeft = Object.assign({}, config);
        configLeft.origin = 'left';
        let configRight = Object.assign({}, config);
        configRight.origin = 'right';

        sr.reveal($('.feature1 .pickup'), configLeft, duration/2);
        sr.reveal($('.feature2 .pickup'), configRight, duration/2);
        sr.reveal($('.feature3 .pickup'), configLeft, duration/2);
    // }, 2000);

});
