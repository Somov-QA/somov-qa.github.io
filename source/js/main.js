$.fn.MessageBox = function(msg) {
    alert(msg);
};

$(document).ready(function(){
	var menu = $("#Menu");
	var menuA = $("#MenuA");
	var menuB = $("#MenuB");
	var menuC = $("#MenuC");
	var menuD = $("#MenuD");
	var menuE = $("#MenuE");
	var menuF = $("#MenuF");

	var panelA = $("#PanelFilesA");
	var panelB = $("#PanelFilesB");
	var panelC = $("#PanelFilesC");
	var panelD = $("#PanelFilesD");
	var panelE = $("#PanelFilesE");
	var panelF = $("#PanelFilesF");

	var window = $("#window");
	var window_title = $("#window_title");
	var window_content = $("#window_content");

	function ResetMenu() {
		window.hide("slow");
		window_title.hide("slow");
		window_content.hide("slow");

		menu.removeClass("start-menu");
		$(".menu-item").removeClass("start-menu-item");
		$(".menu-item-text").removeClass("start-menu-item-text");
		
		panelA.hide("slow");
		menuA.removeClass("start-menu-item-img-a");
		menuA.removeClass("menu-item-selected");
		panelB.hide("slow");
		menuB.removeClass("start-menu-item-img-b");
		menuB.removeClass("menu-item-selected");
		panelC.hide("slow");
		menuC.removeClass("start-menu-item-img-c");
		menuC.removeClass("menu-item-selected");
		panelD.hide("slow");
		menuD.removeClass("start-menu-item-img-d");
		menuD.removeClass("menu-item-selected");
		panelE.hide("slow");
		menuE.removeClass("start-menu-item-img-e");
		menuE.removeClass("menu-item-selected");
		panelF.hide("slow");
		menuF.removeClass("start-menu-item-img-f");
		menuF.removeClass("menu-item-selected");
	}

	function ResetFiles() {
		$(".file-image-hover").removeClass("file-image-hover");
	}

	menuA.click(function(){
		ResetMenu();
		panelA.show("slow");
		menuA.addClass("menu-item-selected");
	});

	menuB.click(function(){
		ResetMenu();
		panelB.show("slow");
		menuB.addClass("menu-item-selected");
	});

	menuC.click(function(){
		ResetMenu();
		panelC.show("slow");
		menuC.addClass("menu-item-selected");
	});

	menuD.click(function(){
		ResetMenu();
		panelD.show("slow");
		menuD.addClass("menu-item-selected");
	});

	menuE.click(function(){
		ResetMenu();
		panelE.show("slow");
		menuE.addClass("menu-item-selected");
	});

	menuF.click(function(){
		ResetMenu();
		panelF.show("slow");
		menuF.addClass("menu-item-selected");
	});

	$.fn.ReadFile = function(filename) {
		ResetFiles();
		this.addClass("file-image-hover");
		window.show("slow");
		window_title.show();
		window_content.show();
		
        $.get(filename, function(txt){
        	window_content.html(txt);
        	this.addClass("file-image-hover");
        	window.show("slow");
			window_title.show();
			window_content.show();
        });
    };
    
});