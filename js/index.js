$(document).ready(function(){
	// header
    $('.nav-icon i').click(function(){
        $('nav').slideToggle(500)
    })


    // fix nav

    var nav_fix = $('.banner-serv').offset().top

     $(window).scroll(function(){

        var nav=$(this).scrollTop()
        if(nav > nav_fix){
            $('header').addClass('header-style')
            $('header').slideDown(1000)
        }

        else{
           
            $('header').removeClass('header-style')
            
        }
    })



    // client row

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:0,
        nextArrow:0,
        autoplay:true,
        infinite:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

})