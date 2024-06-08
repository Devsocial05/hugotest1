$(document).ready(function () {
    function CountDownTimer  () {
        left_days1 = document.getElementById("days1");
        left_hours1 = document.getElementById("hours1");
        left_minutes1 = document.getElementById("minutes1");
        left_seconds1 = document.getElementById("seconds1");
        left_days2 = document.getElementById("days2");
        left_hours2 = document.getElementById("hours2");
        left_minutes2 = document.getElementById("minutes2");
        left_seconds2 = document.getElementById("seconds2");
     
        }
        function showRemaining (){
        now = new Date();
     
        days1 = 12 - now.getDay(); ;
        hours1 = 23 - now.getHours();
        minutes1 = 59 - now.getMinutes();
        seconds1 = 59 - now.getSeconds();
        left_days1.innerHTML = days1 + "<span class=\"small\"> days </span>"
        left_hours1.innerHTML = hours1 + "<span class=\"small\"> hours</span>";
        left_minutes1.innerHTML = minutes1 + "<span class=\"small\">mins</span>";
        left_seconds1.innerHTML = seconds1 + "<span class=\"small\">secs</span>";
        days2 = 12 - now.getDay(); ;
        hours2 = 23 - now.getHours();
        minutes2 = 59 - now.getMinutes();
        seconds2 = 59 - now.getSeconds();
        left_days2.innerHTML = days2 + "<span class=\"small\"> days </span>"
        left_hours2.innerHTML = hours2 + "<span class=\"small\"> hours</span>";
        left_minutes2.innerHTML = minutes2 + "<span class=\"small\">mins</span>";
        left_seconds2.innerHTML = seconds2 + "<span class=\"small\">secs</span>";
        }
    timer = setInterval (showRemaining, 1000) 
    CountDownTimer() ;    

    /* **** Navigation Toggle Start **** */
    $(".navbar-collapse a").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    /* **** Navigation Toggle End **** */



    /* **** sticky **** */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $("header").addClass("nav-new");
        } else {
            $("header").removeClass("nav-new");
        }
    });
    /* **** sticky **** */



    /* **** AOS **** */
    AOS.init({
        once:true,
    });
    /* **** End AOS **** */
    

    /* **** Slider ***** */
    $(".hero-slider").slick({
        arrows: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,        
    });

    $(".test-slider").slick({
        arrows: true,
        loop: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 4500,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,        
    });
    /* ***** End Slider **** */

    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
          }
        });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '500');
    });

    
});
