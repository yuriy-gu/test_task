$(document).ready(function(){

	//link animation to anchor
	$("a[href*='#']").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 777);
    e.preventDefault();
    return false;
   });

	//icon-hamberger
	$('#hamburger-icon').click(function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('main-nav-on');
	});


	//main slider
	$('.sect2-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		// autoplay: true,
		// autoplaySpeed: 4000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		adaptiveHeight: true,
		responsive: [
				{
			breakpoint: 992,
			settings: {
				arrows: false
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: false,
				arrows: false
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '55px',
				dots: false,
				arrows: false
			}
		}
		]
	});

	// food-slider
	$('.food-slider').slick({
		infinite: true,
		slidesToShow: 5,
		speed: 300,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				initialSlide: 1,
				arrows: false
			}
		}
		]
	});

	//food-slider active
	$('.slick-slide').on('click',function(){
		$('.slick-track').children().removeClass('food-active');
		$(this).addClass("food-active");
	});

	//food description show/hide
	$('.food-info').click(function(){
		$('.food-content').eq($(this).data('item')).fadeIn().siblings('.food-content').fadeOut()
	})

  $(window).resize(function(){
    var windowWidth = $(window).width();
    if(windowWidth <= 768) {
			$('.food-title').addClass('food-title-show').removeClass('food-title-on');
			$('.food-text').css({'display': 'none'});
    } else {
    	$('.food-title').removeClass('food-title-show');
    	$('.food-text').css({'display': 'block'});
    }
		//food scrollbar
  	if($(this).width()>768){
			$(".scroll").mCustomScrollbar({
				theme: "my-theme",
				scrollButtons: {enable:false}
			});     
      } else{
        $("#food-scroll").mCustomScrollbar("destroy"); //destroy scrollbar 
      }
  });

	
	
    $(window).resize(function(){
    }).trigger("resize");
	

	//food-text show/hide
	$('body').on('click', '.food-title-show', function(){
		$('.food-text').slideUp().removeClass('food-title-on').prev().removeClass('food-title-on');
		$(this).next('.food-text').slideDown().addClass('food-title-on').prev().addClass('food-title-on');
		return false;
	});

});

