
$(function() {

var accordion = function(){
  var data = $('.accordion').attr('data-accordion')
  
  $('.accordion-header').on('click', function(){
  	    $(this).next('.accordion-body').not(':animated').slideToggle()
  })
}
$('.slide-two').owlCarousel({
      loop:true,
    responsive:{
            0:{
                items: 1,
                nav:true   
            },
            481:{
                    items: 2,
                    nav:true    
                },           
            768:{
                    items: 3,
                    nav:true    
                },            
            992:{
                    items: 4,
                    nav:true    
                }
        },
    navText : "",
    margin: 20,
    dotsEach: 1
});
accordion();	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

$(".slide_celling").animated("fadeInUp");

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu ul").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu ul ").fadeOut(600);
			$(".top_mnu ul li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu ul").fadeIn(600);
			$(".top_mnu ul li a").addClass("fadeInUp animated");
		};
	});


var owl = $(".slider");

owl.owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        }
    },
    navText : "", 
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    transitionStyle : "fade"     
});
$(".next").click(function() {
	owl.trigger('next.owl.carousel');
})
$(".prev").click(function() {
	owl.trigger('prev.owl.carousel');
});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

$(".celling .tab").click(function() {
    $(".celling .tab ").removeClass("active").eq($(this).index()).addClass("active");
    $(".celling .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.slide-three').owlCarousel({
      loop:true,
    responsive:{
        0:{
            items: 1,
            nav:true   
        },
        480:{
            items: 2,
            nav:true   
        },        
        780:{
                items: 3,
                nav:true    
            },
        1080:{
                items: 4,
                nav:true   
            }  

    },
    margin: 40,
    navText : "",
    dotsEach: 1
});


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});
        $(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });