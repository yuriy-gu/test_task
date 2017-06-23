$(document).ready(function() {
	
	var number = 0;
	var animationWait = 0;
	var interval = 0;
	var timer;
	
	timer = setInterval(function() { 
		
		$('#down-arrow').click();
		
	}, 2500);
	
	
	/* Window Functions, to set timers when the user closes the page */
	$(window).blur(function() {
		
		clearInterval(timer);
		
	});
	
	$(window).focus(function() {
	
		timer = setInterval(function() { 
			
			$('#down-arrow').click();
			
		}, 2500);
		
	});
	
	
	/* Default Image */
	
	$('#side-images [id^=image]:first').appendTo('#main-image').fadeIn();
	
	
	/* Go Up! */
	
	$('#up-arrow').click(function() { 	
		
		if(animationWait == 0) {
			animationWait = 1;
			$('#main-image [id^=image]').attr('style', '');
			$('#main-image [id^=image]').addClass('fading').css({'display':'block'}).clone().appendTo('#side-images');
			
			$('#side-images [id^=image]').animate({bottom: '100px'}, 250, function() {
						
				$('#side-images [id^=image]').attr('style', '');
				
				/* Only run animation once */
				if(number == 0) {
					$('#side-images [id^=image]:first').appendTo('#main-image').fadeIn();	
					++number;
				}
				
			});
			
			/* Set timeout so animation is done */
			setTimeout( function() { 
			
				animationWait = 0
				$('#main-image .fading').remove(); 
				$('#side-images .fading').removeClass('fading');
			
			}, 450);
			
			number = 0;
		}
		
	});
	
	/* When hovering clear the interval, because 
	the user is interacting */
	$('#image-rotate').hover(function() {
	
		clearInterval(timer);
	
	}, function() {
	
		timer = setInterval(function() { 
			
			$('#down-arrow').click();
			
		}, 2500);
		
	});
	
	/* Go Down */
	$('#down-arrow').click(function() {
		
		/* Check if animating */
		if(animationWait == 0) {
			animationWait = 1;
			$('#main-image [id^=image]').css({'display' : 'block'}).addClass('fading').clone().prependTo('#side-images');
			$('#side-images [id^=image]').css({'top': '-100px'});
			
			$('#side-images [id^=image]').animate({top: '0'}, 250, function() {
						
				$('#side-images [id^=image]').attr('style', '');
				/* Only run animation once */
				if(number == 0) {	
					
					$('#side-images [id^=image]:last').appendTo('#main-image').fadeIn();
					++number; 
				}
				
			});
			
			/* Change animation after a certain amount of
			time */
			setTimeout( function() { 
			
				animationWait = 0
				$('#main-image .fading').remove(); 
				$('#side-images .fading').removeClass('fading');
			
			}, 450);
			number = 0;
		}
	
	
	});
	

});