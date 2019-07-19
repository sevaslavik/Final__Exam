"use strict";

;(function($){

    $('#js-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slideToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button class="slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
               breakpoint: 667,
               settings: {
                   arrows: false,
                   slidesToShow: 1,
                   slideToScroll: 1,
                   adaptiveHeight: true
               } 
            },
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,  
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

}(jQuery));

;(function($){
    $('.js-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button class="slider-arrow-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider-arrow-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                arrows: false,
                prevArrow: false,
                nextArrow: false,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                dots: false,  
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
}(jQuery));

    // Initialize and add the map
function initMap() {
    // The location of indonesia
    var indonesia = {lat: -7.9307512, lng: 112.6355576},
        image = {
        url: '../img/Pin.svg',
        size: new google.maps.Size(150, 150),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 40),
        scaledSize: new google.maps.Size(50, 50)
    };
    // The map, centered at indonesia
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15, 
            center: indonesia
    });
    // The marker, positioned at Indonesia
    var marker = new google.maps.Marker({
        position: indonesia,
        map: map,
        icon: image
    });   
}

;(function($){
var acordeon = $('.js-acordeon'),
    img = $('.js-img'),
    description = $('.js-description');

    acordeon.on('click', function() {
        $(this).find('.js-description').toggleClass('is-active');
    });

}(jQuery));


;(function($){
var upButton = $('.js-up'),
    downButton = $('.js-down'),
    container = $('.js-container');

    container.hide();

    upButton.on('click', function(event) {
        container.hide(1400);
        downButton.show(1400);
    });

    downButton.on('click', function() {
        $(this).hide(1400);
        container.show(1400);
    });

}(jQuery));

;(function($){
    var burgerMenu = $('.js-burger-menu'),
        burgerBtn = $('.js-burger');

        burgerBtn.on('click', function() {
        burgerMenu.toggle(300);
        });
}(jQuery));
