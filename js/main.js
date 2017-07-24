$(function() {
    /* load navbar and footer*/
    $("#footer").load("components/footer.html");
    $("#navbar").load("components/navbar.html", function() {
        /* if toggler icon is clicked and navbar is shown, change navbar color */
        $(".navbar-toggler").click(function(){
            var collapseHide = $(".navbar-collapse").hasClass("show");
            if (!collapseHide) {
                $(".mainnav").addClass("mainnav-colored");
            }
        });
    });

    var offsetHeight = 70;

    /* smooth scrolling */
    $('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});


    /* navbar color change after scrolling */
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > offsetHeight) {
			$(".mainnav").addClass("mainnav-colored");
		}
		else{
			$(".mainnav").removeClass("mainnav-colored");
		}
	});
});
