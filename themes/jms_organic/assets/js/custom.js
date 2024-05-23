/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
 /*fixed menu*/

 jQuery(document).ready(function($) {
		$('.jms-megamenu').jmsMegaMenu({    			
			event: jmmm_event,
			duration: jmmm_duration
		});	
});	
$('body').on('click', '.ajax-add-to-cart', function (event) {	
	event.preventDefault();
	var query = 'id_product=' + $(this).attr('data-id-product') + '&qty='+ $(this).attr('data-minimal-quantity') + '&token=' + $(this).attr('data-token') + '&add=1&action=update';
	var actionURL = prestashop['urls']['base_url'] +  'index.php?controller=cart';		
	$('.ajax-add-to-cart').removeClass('addtocart-selected');
	$(this).addClass('addtocart-selected');
	$(this).removeClass('checked');
	$(this).addClass('checking');
	var callerElement = $(this);
	$.post(actionURL, query, null, 'json').then(function (resp) {		
		if(jpb_addtocart == 'ajax_cartbottom');
	    prestashop.emit('updateCart', {
	        reason: {
	          idProduct: resp.id_product,
	          idProductAttribute: resp.id_product_attribute,
	          linkAction: 'add-to-cart'
	        }
	    });
		
		$(callerElement).removeClass('checking');
		$(callerElement).addClass('checked');
		window.setTimeout( function() {$(callerElement).removeClass('checked');}, 3000 );
	}).fail(function (resp) {
	    prestashop.emit('handleError', { eventType: 'addProductToCart', resp: resp });
	});
});
function view_as() { 
    var viewGrid = $(".view-grid"),
        viewList = $(".view-list"),
        productList = $(".product_list");
		viewGrid.click(function (e) {       
        productList.removeClass("products-list-in-row");
        productList.addClass("products-list-in-column");
        $(this).addClass('active');
        viewList.removeClass("active");
        e.preventDefault()
    });
    viewList.click(function (e) {       
        productList.removeClass("products-list-in-column");
        productList.addClass("products-list-in-row");
        viewGrid.removeClass("active");
        $(this).addClass('active');        
        e.preventDefault()
    })
}
jQuery(function ($) {
    "use strict";
    $(".view-grid").addClass('active');
    view_as();
});

jQuery(function ($) {
	"use strict";
	if($(".customs-carousel-product").length) {
		  var customsCarouselProduct = $(".customs-carousel-product");
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;
		customsCarouselProduct.owlCarousel({
			responsiveClass:true,
			responsive:{            
				1199:{
                  items:3
				},
				991:{
					items:3
				},
				768:{
					items:2
				},
				481:{
					items:2
				},
				361:{
					items:1
				},
				0:{
					items:1
				}
			},
			rtl: rtl,
			margin: 0,
			nav: true,
			dots: false,
			autoplay: true,
			slideSpeed: 200,
			loop:false,
		});
	}
});
function back_to_top() {   
    $('#back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 500);
        return false;
    })
}
jQuery(function ($) {
    "use strict";
    $(window).scroll(function () {
     if ($(window).scrollTop() >= 30) {
      $("#back-to-top").stop().fadeIn(300);
     } else if ($(window).scrollTop() < $('header').outerHeight()) {
      $("#back-to-top").stop().fadeOut(300);
     }
    });
});

$(window).load(function () {     
    back_to_top(); 
});

var initialLoad = true;
$(document).ready(function() {	
	if(initialLoad){
		setTimeout(function() {
			jQuery('.preloader').fadeOut();
		}, 3000);		
		initialLoad = false;
	}
});
$(document).ready(function() {
	$('.location_map').click(function(event) {
		$('.location_map').toggleClass('open');
	});
});
/**********************HOME PAGE **************************/
$(window).load(function(){
		if($('.slider').length > 0)
		$('.slider').fractionSlider({	
			'slideTransition' : jmsslider_trans,
			'slideEndAnimation' : jmsslider_end_animate,
			'transitionIn' : jmsslider_trans_in,
			'transitionOut' : jmsslider_trans_out,
			'fullWidth' : jmsslider_full_width,
			'delay' : jmsslider_delay,
			'timeout' : jmsslider_duration,
			'speedIn' : jmsslider_speed_in,
			'speedOut' : jmsslider_speed_out,
			'easeIn' : jmsslider_ease_in,
			'easeOut' : jmsslider_ease_out,
			'controls' : jmsslider_navigation,
			'pager' : jmsslider_pagination,
			'autoChange' : jmsslider_autoplay,
			'pauseOnHover' : jmsslider_pausehover,
			'backgroundAnimation' : jmsslider_bg_animate,
			'backgroundEase' : jmsslider_bg_ease,
			'responsive' : jmsslider_responsive,
			'dimensions' : jmsslider_dimensions,
			'fullscreen' : true
		});
});

if($(".categorytab-carousel").length) {		
		var categorytabCarousel = $(".categorytab-carousel");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		categorytabCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:cattab_itemsDesktop
				},
				991:{
					items:cattab_itemsDesktopSmall
				},
				768:{
					items:cattab_itemsTablet
				},
				481:{
					items:cattab_itemsMobile
				},
				361:{
					items:1
				},
				0:{
					items:1
				}
			},
			rtl: rtl,
			margin:0,
			nav: navtab,
			dots: pagtab,
			autoplay: autotab,
			slideSpeed: 800,
		});
	}
	
	 
	if($(".blog-carousel").length) {
			var blogCarousel = $(".blog-carousel");		
			var rtl = false;
			if ($("body").hasClass("rtl")) rtl = true;				
			blogCarousel.owlCarousel({
				responsiveClass:true,
				responsive:{			
					1199:{
						items:blog_itemsDesktop
					},
					991:{
						items:blog_itemsDesktopSmall
					},
					768:{
						items:blog_itemsTablet
					},
					481:{
						items:blog_itemsMobile
					},
					0: {
						items:1
					}
				},
					rtl: rtl,
					margin:30,
					nav: p_nav_blog,
			        dots: p_pag_blog,
					autoplay:auto_play_blog,
					slideSpeed: 800,	
			});
		}
		
		if($(".hotdeal-carousel").length) {
	 	var hotdealCarousel = $(".hotdeal-carousel");
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		hotdealCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:h_itemsDesktop
				},
				991:{
					items:h_itemsDesktopSmall
				},
				767:{
					items:h_itemsTablet
				},
				600:{
					items:h_itemsMobile
				},
				320:{
					items:1
				}
			},
			rtl: rtl,
			margin: 0,
		    nav: h_nav,
		    dots: h_pag,
			autoplay:h_auto_play,
		    rewindNav: false,
		    navigationText: ["", ""],
		    slideBy: 1,
		    slideSpeed: 200	
		});
	 }
  
	if($(".testimonial-carousel").length) {
			var testimonialCarousel = $(".testimonial-carousel");		
			var rtl = false;
			if ($("body").hasClass("rtl")) rtl = true;				
			testimonialCarousel.owlCarousel({
				responsiveClass:true,
				responsive:{			
					1199:{
						items:testi_itemsDesktop
					},
					991:{
						items:testi_itemsDesktopSmall
					},
					768:{
						items:testi_itemsTablet
					},
					481:{
						items:testi_itemsMobile
					},
					0: {
						items:1
					}
				},
					rtl: rtl,
					margin:30,
					nav: p_nav_testi,
			        dots: p_pag_testi,
					autoplay:auto_play_testi,
					slideSpeed: 800,	
			});

		}
		if($(".producttab-carousel").length) {		
		var producttabCarousel = $(".producttab-carousel");			
		var rtl = false;
		if ($("body").hasClass("rtl")) rtl = true;				
		producttabCarousel.owlCarousel({
			responsiveClass:true,
			responsive:{			
				1199:{
					items:tab_itemsDesktop
				},
				991:{
					items:tab_itemsDesktopSmall
				},
				768:{
					items:tab_itemsTablet
				},
				481:{
					items:tab_itemsMobile
				},
				361:{
					items:1
				},
				0:{
					items:1
				}
			},
			rtl: rtl,
			margin:30,
			nav: p_nav_tab,
			dots: p_pag_tab,
			autoplay: auto_play_tab,
			slideSpeed: 800,
		});
	}
	
	$(document).on('ready', function() {
	  "use strict";
	  var rtl = false;
	  if ($("body").hasClass("rtl")) rtl = true;  
	  if($('.slider-for').length > 0) {
		  $('.slider-for').slick({
		   rtl:rtl,
		   slidesToShow: 1,
		   slidesToScroll: 1,
		   arrows: false,
		   dots:false,
		   speed: 500,	  
		   asNavFor: '.slider-nav'
		  });
		  $('.slider-nav').slick({
		   rtl:rtl,
		   slidesToShow: 3,
		   slidesToScroll: 1,
		   asNavFor: '.slider-for',
		   dots: false,
		   centerPadding: '0px',
		   centerMode: true,
		   focusOnSelect: true,
		   arrows: true,
		   margin:"10px",
		   speed: 500,
		  });
	  }	
 });
$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
         if ($("body").hasClass("home_1")&& scroll > 112 && $(window).width() > 0) {
            $('.block-menu').addClass('fixed-top');
			
        } else {
            $('.block-menu').removeClass('fixed-top');		
			
        }
         if ($("body").hasClass("home_1")&& scroll > 0 && $(window).width() < 992) {
            $('.navtopo').addClass('fixed-top');
			
        } else {
            $('.navtopo').removeClass('fixed-top');		   
        }
         if ($("body").hasClass("home_2")&& scroll > 50 && $(window).width() > 0) {
            $('.navtop').addClass('fixed-top');
			
        } else {
            $('.navtop').removeClass('fixed-top');		
			
        }
         if ($("body").hasClass("home_3")&& scroll > 0 && $(window).width() > 0) {
            $('.navtopt').addClass('fixed-top');
			
        } else {
            $('.navtopt').removeClass('fixed-top');		
			
        }
        
    });
	new WOW().init();
});