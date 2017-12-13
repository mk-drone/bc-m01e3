$(function(){

    let carouselUl = $("#carousel ul");

    // carouselUl.css("marginLeft",-400);
    function slideLeft(){
        carouselUl.animate({marginLeft: -400}, 500, function (){
            // console.log(this);
            let firstLi = $('#carousel ul li').first();
            let lastLi = $('#carousel ul li').last();

            lastLi.after(firstLi);
            $(this).css({marginLeft: 0});
        });
    }
    function slideRight(){
        let firstLi = $('#carousel ul li').first();
        let lastLi = $('#carousel ul li').last();

        // lastLi.after(firstLi);
        firstLi.before(lastLi);
        carouselUl.css({marginLeft: -400});

        carouselUl.animate({marginLeft: 0}, 500);
    }
    let interval = setInterval(slideRight, 2000);

    let carousel = $("#carousel");
    carousel.on("mouseenter", function(e){
        clearInterval(interval);
    });
    
    carousel.on("mouseleave", function(e){
        interval = setInterval(slideRight, 2000);
    });
});