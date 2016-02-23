// BXSLIDER
$(document).ready(function(){
  $('.bxslider').bxSlider();
    
    var filtres = $('.portfolio-items').isotope({
      itemSelector: '.portfolio-element',
      layoutMode: 'fitRows'
    });
    
    $('#tous-button').on('click', function(){
        filtres.isotope({ filter : null });
    });
    
    $("#web-button").on('click', function(){        
        filtres.isotope({ filter : '.web'});
    }); 
    
    $('#photo-button').on('click', function(){
        filtres.isotope({ filter : '.photo'});
    });
    
    $('#design-button').on('click', function(){
        filtres.isotope({ filter : '.design'});
    });
    
    $('.btn.btn-danger.btn-submenu').on('click', function(){
        $('.btn-active').removeClass('btn-active');
        $(this).addClass('btn-active');
    });    
});
// FIN BXSLIDER

// BACK TO TOP //
  jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 250,
        /* offset_opacity = 1200,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced */
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});     
// FIN BACK TO TOP 

// SECTION TAILLE ECRAN
      var winHeight = $(window).height();
      var paddingTopHeight = winHeight * 0.4;
      $('.home').css('min-height', winHeight);
      $('.home').css('padding-top', paddingTopHeight);
});
// FIN SECTION TAILLE ECRAN

// SMOOTH SCROLL & CLASS ACTIVE
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.navbar-nav li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
// FIN SMOOTH & CLASS ACTIVE

// BURGER MENU DISPARAIT QUAND ON CLICK
$(function(){ 
     var navMain = $("#bs-example-navbar-collapse-1");
     navMain.on("click", "a", null, function () {
         navMain.collapse('hide');
     });
 });
// FIN BURGER MENU

