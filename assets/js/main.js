document.addEventListener("DOMContentLoaded", ()=>{
    $(document).ready(function(){
        $(".slider-wrap").owlCarousel({
            items: 1,
            navContainer: ".slider-arrows",
            dotsContainer: ".slider-nav-dots",
            navText: ['<svg width="31" height="10" viewBox="0 0 31 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.001 5H0.999023M0.999023 5L5.00137 1M0.999023 5L5.00137 9" stroke="white"/></svg>', '<svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.999023 8H31.001M31.001 8L26.9986 4M31.001 8L26.9986 12" stroke="white"/></svg>'],
            navClass: ['slider-arrows__item slider-arrows-item slider-arrows-item--left', 'slider-arrows__item slider-arrows-item slider-arrows-item--right'],
            dotClass: "slider-nav-dots__item",
            itemClass: "slider-item",
        });
        $(".paint-slider-wrap").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            dotsContainer: ".paint-slider-dots",
            dotClass: "paint-slider-dots__item",
            itemClass: "paint-slider-item",
        });
    });

    let colorsItems, colorsItemContent, colorsItemToggle, height;
    colorsItems = document.querySelectorAll(".colors-info-item-title");
    colorsItems.forEach((colorsItem)=>{
        colorsItem.addEventListener("click", ()=>{
            colorsItemToggle = colorsItem.querySelector(".colors-info-item-title-toggle");
            colorsItemContent = colorsItem.parentNode.querySelector(".colors-info-item-content");
            colorsItemContent.classList.toggle("show");
            height = 0;
            for(let i = 0; i < colorsItemContent.childElementCount; i++){
                height += colorsItemContent.children[i].offsetHeight;
            }
            if(!colorsItemContent.hasAttribute("style")){
                colorsItemContent.style.maxHeight = height + "px";
            }
            else{
                colorsItemContent.removeAttribute("style");
            }
            colorsItemToggle.classList.toggle("show");
            colorsItem.classList.toggle("show");
            colorsItem.parentNode.classList.toggle("show");
        });
    });
});