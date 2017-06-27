$(function() {

  //mobile menu
  $('.toggle-menu').click(function() {
  	$(this).toggleClass('on');
  	$('.main-menu').slideToggle();
  })


  //animated sections
  $(".sect1-item-wrap ").animated("zoomIn");
  $(".section-head h2, .section-head p, .section-head h3").animated("fadeIn");
  // $(".slider .slide").animated("fadeIn");
  // $(".homesect.section_8 .forms").animated("fadeInRight");
  // $(".homesect.section_8 .p").animated("fadeIn");


  //section waypoint animation
    $("#section2").waypoint(function() {
    $(".sect2__content-item").each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.addClass("sect2__content-item-on");
      }, 300*index);
    });
  }, {
    offset : "30%"
  });

  $('#section4 h2').waypoint(function() {
    $('.sect4 .card').each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.removeClass('card-off').addClass('card-on');        
      }, 100*index);
    })
  }, {
    offset : '30%'
  });


  $('#section6 h2').waypoint(function() {
    $('#section6 .team').each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.removeClass('team-off').addClass('team-on');        
      }, 100*index);
    })
  }, {
    offset : '30%'
  });


  //waypoint svg animation
  var waypointsvg = new Waypoint({
    element: $("#section5"),
    handler: function(dir) {
      
      if (dir === "down") {

        $("#section5 .tc-item").each(function(index) {
          var ths = $(this);
          setTimeout(function() {
            var myAnimation = new DrawFillSVG({
              elementId: "tc-svg-" + index
            });
            ths.children(".tc-content").addClass("tc-content-on");
          }, 700*index);
        });

      };
      this.destroy();
    },
    offset: '35%'
  });

  //slider
  $(".slider").owlCarousel({
    items : 1,
    nav : true,
    navText : "",
    loop : true,
    autoplay : true,
    autoplayHoverPause : true,
    fluidSpeed : 600,
    autoplaySpeed : 600,
    navSpeed : 600,
    dotsSpeed : 600,
    dragEndSpeed : 600
  });

});
