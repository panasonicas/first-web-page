"use strict";

$(document).ready(function(){

$('[data-fancybox=ingal2]').fancybox({
    loop: true,
    wheel: "auto",
});
   
});

var slider = tns({
    container: '.my-slider',
    items: 2,
    // slideBy: 'page',
    autoplay: true,
    mouseDrag:true,
    slideShow: {
        autoStart: true,
        autoplayTimeout: 1000,
      },
  });
