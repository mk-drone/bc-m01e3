$(function(){
    let carousel = $("#carousel");
    let carouselUl = $("#carousel ul");
    let interval;

    carousel.on("mouseenter", stopSlider);
    carousel.on("mouseleave", runSlider);



    function stopSlider(){
       clearInterval(interval);
    }

    function runSlider(){
        interval = setInterval(slideRight, 2000);
    }

    function moveSlideLeft(){
        let firstLi = $('#carousel ul li').first();
        let lastLi = $('#carousel ul li').last();
        lastLi.after(firstLi);
        $(this).css({marginLeft: 0});
    }

    function slideLeft(){
        carouselUl.animate({marginLeft: -400}, 500, moveSlideLeft);
    }

    function slideRight(){
        let firstLi = $('#carousel ul li').first();
        let lastLi = $('#carousel ul li').last();
        // lastLi.after(firstLi);
        firstLi.before(lastLi);
        carouselUl.css({marginLeft: -400});
        carouselUl.animate({marginLeft: 0}, 500);
    }
    
    /** INIT */
    runSlider();
});