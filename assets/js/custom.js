/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
/*fixed menu*/
AOS.init({
  once: true
})
$("body").on("click", ".ajax-add-to-cart", function (event) {
  event.preventDefault();
  var query =
    "id_product=" +
    $(this).attr("data-id-product") +
    "&qty=" +
    $(this).attr("data-minimal-quantity") +
    "&token=" +
    $(this).attr("data-token") +
    "&add=1&action=update";
  var actionURL = prestashop["urls"]["base_url"] + "index.php?controller=cart";
  $(".ajax-add-to-cart").removeClass("addtocart-selected");
  $(this).addClass("addtocart-selected");
  $(this).removeClass("checked");
  $(this).addClass("checking");
  var callerElement = $(this);
  $.post(actionURL, query, null, "json")
    .then(function (resp) {
      if (jpb_addtocart == "ajax_cartbottom");
      prestashop.emit("updateCart", {
        reason: {
          idProduct: resp.id_product,
          idProductAttribute: resp.id_product_attribute,
          linkAction: "add-to-cart",
        },
      });

      $(callerElement).removeClass("checking");
      $(callerElement).addClass("checked");
      window.setTimeout(function () {
        $(callerElement).removeClass("checked");
      }, 3000);
    })
    .fail(function (resp) {
      prestashop.emit("handleError", {
        eventType: "addProductToCart",
        resp: resp,
      });
    });
});
function view_as() {
  var viewGrid = $(".view-grid"),
    viewList = $(".view-list"),
    productList = $(".product_list");
  viewGrid.click(function (e) {
    productList.removeClass("products-list-in-row");
    productList.addClass("products-list-in-column");
    $(this).addClass("active");
    viewList.removeClass("active");
    e.preventDefault();
  });
  viewList.click(function (e) {
    productList.removeClass("products-list-in-column");
    productList.addClass("products-list-in-row");
    viewGrid.removeClass("active");
    $(this).addClass("active");
    e.preventDefault();
  });
}
jQuery(function ($) {
  "use strict";
  $(".view-grid").addClass("active");
  view_as();
});

jQuery(function ($) {
  "use strict";
  if ($(".customs-carousel-product").length) {
    var customsCarouselProduct = $(".customs-carousel-product");
    var rtl = false;
    if ($("body").hasClass("rtl")) rtl = true;
    customsCarouselProduct.owlCarousel({
      responsiveClass: true,
      responsive: {
        1199: {
          items: 3,
        },
        991: {
          items: 3,
        },
        768: {
          items: 2,
        },
        481: {
          items: 2,
        },
        361: {
          items: 1,
        },
        0: {
          items: 1,
        },
      },
      rtl: rtl,
      margin: 0,
      nav: true,
      dots: false,
      autoplay: true,
      slideSpeed: 200,
      loop: false,
    });
  }
});
function back_to_top() {
  $("#back-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
}
jQuery(function ($) {
  "use strict";
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
      $("#back-to-top").stop().fadeIn(300);
    } else if ($(window).scrollTop() < $("header").outerHeight()) {
      $("#back-to-top").stop().fadeOut(300);
    }
  });
});

$(window).load(function () {
  back_to_top();
});
/**********************HOME PAGE **************************/
$(window).load(function () {
  if ($(".slider").length > 0)
    $(".slider").fractionSlider({
      slideTransition: jmsslider_trans,
      slideEndAnimation: jmsslider_end_animate,
      transitionIn: jmsslider_trans_in,
      transitionOut: jmsslider_trans_out,
      fullWidth: jmsslider_full_width,
      delay: jmsslider_delay,
      timeout: jmsslider_duration,
      speedIn: jmsslider_speed_in,
      speedOut: jmsslider_speed_out,
      easeIn: jmsslider_ease_in,
      easeOut: jmsslider_ease_out,
      controls: jmsslider_navigation,
      pager: jmsslider_pagination,
      autoChange: jmsslider_autoplay,
      pauseOnHover: jmsslider_pausehover,
      backgroundAnimation: jmsslider_bg_animate,
      backgroundEase: jmsslider_bg_ease,
      responsive: jmsslider_responsive,
      dimensions: jmsslider_dimensions,
      fullscreen: true,
    });
});

if ($(".hotdeal-carousel").length) {
  var hotdealCarousel = $(".hotdeal-carousel");
  var rtl = false;
  if ($("body").hasClass("rtl")) rtl = true;
  hotdealCarousel.owlCarousel({
    responsiveClass: true,
    responsive: {
      1199: {
        items: h_itemsDesktop,
      },
      991: {
        items: h_itemsDesktopSmall,
      },
      767: {
        items: h_itemsTablet,
      },
      600: {
        items: h_itemsMobile,
      },
      320: {
        items: 1,
      },
      200: {
        items: 1,
      },
    },
    rtl: rtl,
    margin: 0,
    nav: h_nav,
    dots: h_pag,
    autoplay: h_auto_play,
    loop: true, // Added loop option here
    rewindNav: false,
    navigationText: ["", ""],
    slideBy: 1,
    slideSpeed: 200,
    autoplayTimeout: 3500,
  });
}

$(document).on("ready", function () {
  "use strict";
  var rtl = false;
  if ($("body").hasClass("rtl")) rtl = true;
  if ($(".slider-for").length > 0) {
    $(".slider-for").slick({
      rtl: rtl,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 500,
      asNavFor: ".slider-nav",
    });
    $(".slider-nav").slick({
      rtl: rtl,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      centerPadding: "0px",
      centerMode: true,
      focusOnSelect: true,
      arrows: true,
      margin: "10px",
      speed: 500,
    });
  }
});
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if ($("body").hasClass("home_1") && scroll > 112 && $(window).width() > 0) {
      $(".block-menu").addClass("fixed-top");
    } else {
      $(".block-menu").removeClass("fixed-top");
    }
    if ($("body").hasClass("home_1") && scroll > 0 && $(window).width() < 992) {
      $(".navtopo").addClass("fixed-top");
    } else {
      $(".navtopo").removeClass("fixed-top");
    }
    if ($("body").hasClass("home_2") && scroll > 50 && $(window).width() > 0) {
      $(".navtop").addClass("fixed-top");
    } else {
      $(".navtop").removeClass("fixed-top");
    }
    if ($("body").hasClass("home_3") && scroll > 0 && $(window).width() > 0) {
      $(".navtopt").addClass("fixed-top");
    } else {
      $(".navtopt").removeClass("fixed-top");
    }
  });
  new WOW().init();
});



// subscription script start
document.addEventListener('DOMContentLoaded', (event) => {
  emailjs.init('e8f1HRfPLNjvCnOqO'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS

  document.getElementById('newsletter-input').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the email value
    const email = document.getElementById('email2').value;

    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send email
    const templateParams = {
      email: email // Ensure this key matches the placeholder in your EmailJS template
    };

    emailjs.send('service_i5p2ur8', 'template_qpf388g', templateParams)
      .then(function (response) {
        alert('Mail sent successfully!');
        // Clear input field after successful email send
        document.getElementById('newsletter-input').reset();
      }, function (error) {
        alert('Invalid email address. Please try again.');
      });
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

// subscription script end

// contact us script start
document.addEventListener('DOMContentLoaded', (event) => {
  emailjs.init('e8f1HRfPLNjvCnOqO'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS

  document.getElementById('modal_form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validate email
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Send email
    const templateParams = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    emailjs.send('service_xrhegg3', 'template_qpf388g', templateParams)
      .then(function (response) {
        alert('Connection successful!');
        // Clear input fields after successful email send
        document.getElementById('modal_form').reset();
      }, function (error) {
        alert('Connection failed. Please try again.');
      });
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});
// contact us script end


// auto slider start


$('.slide-nav').on('click', function (e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function () {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});

// Autoslide feature
var autoSlideInterval = setInterval(function () {
  var current = $('.flex--active').data('slide');
  var next = current + 1 > $('.flex__container').length ? 1 : current + 1;

  $('.slide-nav[data-slide=' + next + ']').click();
}, 5000); // Change slide every 5 seconds

// Pause autoslide on hover
$('.slider__warpper, .slide-nav').hover(function () {
  clearInterval(autoSlideInterval);
}, function () {
  autoSlideInterval = setInterval(function () {
    var current = $('.flex--active').data('slide');
    var next = current + 1 > $('.flex__container').length ? 1 : current + 1;

    $('.slide-nav[data-slide=' + next + ']').click();
  }, 5000); // Change slide every 5 seconds
});

// auto slider end
document.addEventListener("DOMContentLoaded", function () {
  var openMenuBtn = document.getElementById('openMenuBtn');
  var closeMenuBtn = document.getElementById('closeMenuBtn');
  var offcanvasMenu = document.getElementById('offcanvasMenu');
  var body = document.body;
  var overlay = document.getElementById('overlay');

  // Function to open the offcanvas menu
  function openMenu() {
    offcanvasMenu.classList.add('open');
    body.classList.add('overlay_menu');
    document.addEventListener('click', closeMenuHandler);
  }

  // Function to close the offcanvas menu
  function closeMenu() {
    offcanvasMenu.classList.remove('open');
    body.classList.remove('overlay_menu');
    document.removeEventListener('click', closeMenuHandler);
  }

  // Toggle menu on open button click
  openMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevents the click event from propagating to the document
    openMenu();
  });

  // Close menu on close button click
  closeMenuBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    closeMenu();
  });

  // Close menu when clicking outside of it
  function closeMenuHandler(event) {
    if (!offcanvasMenu.contains(event.target) && event.target !== openMenuBtn) {
      closeMenu();
    }
  }
});