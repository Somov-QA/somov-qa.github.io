(function(){
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

	$("#MenuA").click(function(){
		panelA.show();
		menuA.addClass("menu-item-selected");
		panelB.hide();
		menuB.removeClass("menu-item-selected");
		panelC.hide();
		menuC.removeClass("menu-item-selected");
		panelD.hide();
		menuD.removeClass("menu-item-selected");
		panelE.hide();
		menuE.removeClass("menu-item-selected");
		panelF.hide();
		menuF.removeClass("menu-item-selected");
	});

	$("#MenuB").click(function(){
		panelA.hide();
		menuA.removeClass("menu-item-selected");
		panelB.show();
		menuB.addClass("menu-item-selected");
		panelC.hide();
		menuC.removeClass("menu-item-selected");
		panelD.hide();
		menuD.removeClass("menu-item-selected");
		panelE.hide();
		menuE.removeClass("menu-item-selected");
		panelF.hide();
		menuF.removeClass("menu-item-selected");
	});
}());