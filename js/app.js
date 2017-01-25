$(function() {

    $('nav a').on('click', function(e) {
        e.preventDefault();
        $('nav').find('.current-active').removeClass('current-active');
        $(this).addClass('current-active');
        var c = $(this).text();
        switch (c) {
            case 'About':

                $('body').animate({ scrollTop: $('#about').offset().top - 150 }, 2000);
                break;
            case 'Portfolio':

                $('body').animate({ scrollTop: $('#portfolio').offset().top - 50 }, 2000);
                break;
            case 'Contact Me':

                $('body').animate({ scrollTop: $('#contact').offset().top - 50 }, 2000);
                break;
            default:
                $('body').animate({ scrollTop: $('#about').offset().top - 150 }, 2000);
                break;



        }
    });
});