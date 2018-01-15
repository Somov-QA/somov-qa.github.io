$(document).ready(function(){

	//alert($(window).width()+'\n'+$(window).height())

	$(window).on('load', function(){
		if ($(window).width() <= '400'){
			$(".PanelMenu").hide();
			$(".Content").addClass("ContentScroll");
			$(".Content").removeClass("Content");
			return this;
		}
	});

	$(window).on('resize', function(){
		if ($(window).width() <= '400'){
			$(".PanelMenu").hide();
			$(".Content").addClass("ContentScroll");
			$(".Content").removeClass("Content");
			return this;
		}else if($(window).width() <= '770'){
			$(".PanelMenu").hide();
			return this;
		}else{
			$(".PanelMenu").show();
			$(".ContentScroll").addClass("Content");
			$(".ContentScroll").removeClass("ContentScroll");
			return this;
		}
	});


});