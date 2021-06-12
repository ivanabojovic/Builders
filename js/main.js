$(document).ready(function () {


    //OWL CAROUSEL
    if ($('.owl-carousel').length > 0) {


        $('.testimonial-slider').owlCarousel({

            items: 1,
            loop: true,
            autoplay: true,
        });
    }
    //counter up 

    $('.achievements-value').counterUp({
        delay: 10,
        time: 1000
    });


    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


    //ANIMATION 

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
            console.log(position);
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });












});//end document.ready


