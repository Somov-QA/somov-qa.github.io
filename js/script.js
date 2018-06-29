$(document).ready(function(){

	$(window).scroll(function(){
		var scrolled = $(this).scrollTop();
		$("#backgroundImage").css({
			"transform" : "translate(0%, -" + scrolled / 25 + "%)"
		});
	});

});