$(document).ready(function(){

  //icon-hamberger
	$('#hamburger-icon').click(function(){
		$(this).toggleClass('open');
		$('.main-nav').toggleClass('main-nav-on');
	});


	//main slider
	$('.art2-slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
	  // autoplay: true,
  	// autoplaySpeed: 4000,
  	nextArrow: '<button type="button" class="slick-next"></button>',
  	prevArrow: '<button type="button" class="slick-prev"></button>',
  	responsive: [
	  	{
	  		breakpoint: 768,
	  		settings: {
	  			slidesToShow: 1,
	  			slidesToScroll: 1,
	  			dots: false
	  		}
	  	},
	  	{
	  		breakpoint: 480,
	  			settings: {
	  			slidesToShow: 1,
	  			slidesToScroll: 1,
	  			centerMode: true,
	  			centerPadding: '45px',
                      dots: false,
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

  // $('.food-title').click(function(){
  // 	$(this).siblings('.food-text').fadeToggle();
  // })

  //food-text show/hide
  // var allPanels = $('.food-text').hide();
  $('.food-title').click(function(){
  	$('.food-text').slideUp().parent().removeClass('food-list-on');
  	$(this).siblings('.food-text').slideDown().parent().addClass('food-list-on');;
    return false;
  });


});
