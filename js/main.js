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
    
    
    // FORM VALIDATION
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true
                },
                phone:{
                    required:true
                    
                },
                message: {
                    required:true
                }


            },
            messages: {
                name: {
                    required: "The *Name field is required!"
                },
                phone:{
                    required: 'The *Phone number field is required'
                    
                },
                message: {
                    required:'The *Message field is required!'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });













});//end document.ready


