/**
* Template Name: Presento - v1.1.1
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);



if (document.readyState == "loading")
{
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready();  
}

///REMOVE BUTTON

function ready()
{

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
// console.log(removeCartItemButtons)
for(var i = 0 ; i<removeCartItemButtons.length; i++)
{
var button = removeCartItemButtons[i]
button.addEventListener('click', removeCartItem)
}
}

function quantityInputs()
{
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i =0; i < quantityInputs.length; i++)
    {
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }
}
// ADD TO CARTS
function addToCartButtons()
{


var addToCartButtons = document.getElementsByClassName('bag-btn')
for (var i = 0; i < addToCartButtons.length; i++)
{
    button.addEventListener('click',addToCartButtons)
}
}

function removeCartItem(event) 
{
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();
}

function quantityChanged(event)
{
    var input = event.target
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updateCartTotal();
}
function addToCartClicked(event)
{
  var button =  event.target   
  var shopItem = button.parentElement.parentElement
  var title  = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  var imageSrc = shopItem.getElementsByClassName('product-img')[0].src;
  addItemToCart(title,price,imageSrc)
}

function addItemCart(title, price, imageSrc)
{
   var cartRow = document.createElement('div');
   cartRow.innerText = title;
   var cartItem = document.getElementsByClassName('cart-items')[0];
   var cartItemsNames = document.getElementsByClassName('cart-item-title');
  //  for (var i=0; i<cartItemsNames.length; i++)
  //  {
  //    if (cartItemsNames.[i].innerText == title)
  //    {
  //      alert ('This item is already added to cart');
  //      return;
  //    }
  //  }
    var cartRowContents = ` <div class="cart-items- cart-column">
                  <img src="${imageSrc}" width="100" height="100" alt="">
                  <span class="cart-item-title">${title}</span>
                </div>
                <span class="price">
                <span class="cart-price cart-column">${price}</span></span>
                 
                <div class="cart-quantity cart-column">
                  <input type="number" class="cart-quantity-input"  value="1">
                  <button type="button"  class="btn btn-danger">Remove</button></span>
                </div>`
        cartRow.innerHTML = cartRowContents;
        cartItem.append(cartRow);
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem);
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged);
}

function updateCartTotal()
{
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0;
    for (var i =  0; i < cartRows.length; i++)
    {
        var cartRow = cartRows[i]
        var priceElement  = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    total = (Math.round(total * 100)/100);
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
} 