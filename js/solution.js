$(function() {
    /* detect user agent */
    userAgent = window.navigator.platform;
    if (userAgent !== "MacIntel") {
        $(".prototype iframe").addClass("hide");
    }
});
