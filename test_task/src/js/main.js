var width = $('.slider__item').css({ width: $(window).width() }),
     slideWidth = $('.slider__item').outerWidth(),
     currentSlide=parseInt($('.slider_wrapper').data('current'));

$('.next').click(function () {
    currentSlide++;
    if(currentSlide>=$('.slider_wrapper').children().length)
    {
        currentSlide=0;   
    }
    $('.slider_wrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
})

$('.prev').click(function () {
    currentSlide--;
    if(currentSlide < 0)
    {
        currentSlide=$('.slider_wrapper').children().length-1;
    }
    $('.slider_wrapper').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
})


