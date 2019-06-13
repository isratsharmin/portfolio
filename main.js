$(document).ready(function () {
  $('.menu-toggler').on('click',function(){
      $(this).toggleClass('open');
	  $('.top-nav').toggleClass('open');
  });
  
  $('.top-nav .nav-link').on('click',function(){
      $('.menu-toggler').removeClass('open');
	  $('.top-nav').removeClass('open');
  });
  
 /*$('nav a[href*="#"]').on('click',function(){
      $('html, body').animate(keyframes{
		  scroll: $($(this).attr('href')).offset().top - 100
	  }, options:2000);
  });*/
  $("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$('#up').on('click',function(){
	$('html, body').animate({
		scrollTop:0
	})
});
AOS.init({
	//easing: 'ease';
	duration: 1800,
	once: true
});
});