$(document).ready(function() {
    $("form").submit(function(event) {
        $("fieldset").removeClass("err");
        event.preventDefault();
        err = 0;
        if ($(".must input[name='name']").val() == "" || $(".must input[name='name']").val().trim().length < 1) {
            $(".must input[name='name']").parent().addClass("err");
            err++;
        }
        if ($(".must input[name='email']").val() == "" || $(".must input[name='email']").val().trim().length < 1) {
            $(".must input[name='email']").parent().addClass("err");
            err++;
        }
        if ($(".must input[name='subject']").val() == "" || $(".must input[name='subject']").val().trim().length < 1) {
            $(".must input[name='subject']").parent().addClass("err");
            err++;
        }
        if ($(".must #description").val().trim().length < 1) {
            $(".must #description").parent().addClass("err");
            err++;
        }

        if (err) {
            $(".hlaska").show().fadeOut(0).fadeIn(1000);
            return false;
        }
        this.submit();
    });

    $(".carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: true,
        autoPlayTimeout: 5000,
    });

    function rollOut() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
});
