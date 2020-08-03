$(window).on('load', function() {
    setTimeout(function() {
        try {
            loadScript();
        } catch (err) {
            console.log(err);
        }
    }, 4000);
});





//Smooth scroll
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
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
});

//Back to top button
$(function() {
    var btn = $('.backtotop');

    $(window).scroll(function() {
        if ($(window).scrollTop() < 100) {
            btn.addClass('hidden');
        } else {
            btn.removeClass('hidden');
        }
    });
});