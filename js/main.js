(function($) {
        //preloader start
     $(window).load(function() {
    $("#loading").fadeOut(1200);
    
})

        //preloader end cssload-spinner cssload-sball
        //Nav bar Start
        $(window).on('scroll', function() {
                if ($(window).scrollTop()) {
                    $('nav').addClass('black');
                } else {
                    $('nav').removeClass('black');
                }
            }) //Nav bar End

//sidenav start
$(document).ready(function(){
    $('#icon').click(function(){
      $('ul').toggleClass('active');
    });
  });
//sidenav end

  $(document).ready(function(){
        $('#hello').slicknav({
            'label' : 'aaShop',
        });
    });
  //


$("#test").owlCarousel({
            items:1,
            loop:true,
            // autoplay:true
        });



$(".owl-slider").owlCarousel({
            items:4,
            loop:true,
             autoplay:true,
            autoplayTimeout:2000,
            smartSpeed :900,
autoplayHoverPause:true,

responsiveClass: true,
    responsive: {
        0:{
          items: 1
        },
        480:{
          items: 2
        },
        769:{
          items: 3
        },1000:{
          items: 4
        }
    }

        });

$(".brand-slider").owlCarousel({
            items:8,
            loop:true,
             autoplay:true,
            autoplayTimeout:2000,
            smartSpeed :900,
autoplayHoverPause:true       
        });

$('.foot-gall-pop').magnificPopup({
            type: 'image',
              removalDelay: 300,
             gallery: {
    // options for gallery
    enabled: true
  },


        });
//



// elevatyzoom


 $(".xzoom, .xzoom-gallery").xzoom({tint: '#777', Xoffset: 15});
// 









var quantitiy=0;
   $('.pluse').click(function(e){
        
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
            
            $('#quantity').val(quantity + 1);

          
            // Increment
        
    });

     $('.minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());
        
        // If is not undefined
      
            // Increment
            if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });





        
           $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        // var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');


    });
            // magnific-popup start
        
        //magnific-popup end

        // counter js start
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
        // counter js end
        $(".about-testimonials").owlCarousel({
            items: 1,
            loop: true, // dots:true
            // autoplay: true
        });
        $("hello").accordion({
            heightStyle: "content"
        });
        // woo js
        new WOW({
            offset: 100,
            mobile: true
        }).init();

  
    }






    (jQuery));