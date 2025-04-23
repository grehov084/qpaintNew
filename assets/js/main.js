console.log(1);

$(document).ready(function(){
    $(".slider-wrap").owlCarousel({
        items: 1,
        navContainer: ".slider-arrows",
        dotsContainer: ".slider-nav-dots",
        navText: ['<svg width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.001 5H0.999023M0.999023 5L5.00137 1M0.999023 5L5.00137 9" stroke="white"/></svg>', '<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999023 8H31.001M31.001 8L26.9986 4M31.001 8L26.9986 12" stroke="white"/></svg>'],
        navClass: ['slider-arrows__item slider-arrows-item slider-arrows-item--left', 'slider-arrows__item slider-arrows-item slider-arrows-item--right'],
        dotClass: "slider-nav-dots__item",
    });
  });