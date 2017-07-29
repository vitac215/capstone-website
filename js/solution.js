$(function() {
    /* detect user agent */
    userAgent = window.navigator.platform;
    console.log(userAgent);
    if (userAgent !== "MacIntel") {
        $(".prototype iframe").addClass("hide");
    }
});
