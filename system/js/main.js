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

	function ResetMenu(){
		panelA.hide();
		menuA.removeClass("menu-item-selected");
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
	}

	menuA.click(function(){
		ResetMenu();
		panelA.show();
		menuA.addClass("menu-item-selected");
	});

	menuB.click(function(){
		ResetMenu();
		panelB.show();
		menuB.addClass("menu-item-selected");
	});

	menuC.click(function(){
		ResetMenu();
		panelC.show();
		menuC.addClass("menu-item-selected");
	});

	menuD.click(function(){
		ResetMenu();
		panelD.show();
		menuD.addClass("menu-item-selected");
	});

	menuE.click(function(){
		ResetMenu();
		panelE.show();
		menuE.addClass("menu-item-selected");
	});

	menuF.click(function(){
		ResetMenu();
		panelF.show();
		menuF.addClass("menu-item-selected");
	});

}());