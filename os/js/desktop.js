$(document).ready(function(){	
	
	var desktopOS = $('#desktopOS');
	var desktopImageOS = $('#desktopImageOS');

	var mainPanelOS = $('#mainPanelOS');
	var startButtonOS = $('#startButtonOS');

	var menuOS = $('#menuOS');
	var menuItem1 = $('#menuItem1');
	var menuItem2 = $('#menuItem2');
	var menuItem3 = $('#menuItem3');
	var menuItem4 = $('#menuItem4');
	var menuItem5 = $('#menuItem5');
	var menuItem6 = $('#menuItem6');
	var menuItem7 = $('#menuItem7');
	var menuItem8 = $('#menuItem8');

	var desktopIcon01 = $('#desktopIcon01');
	var desktopIcon02 = $('#desktopIcon02');
	var desktopIcon03 = $('#desktopIcon03');
	var desktopIcon04 = $('#desktopIcon04');

	var windowOS1 = $('#windowOS1');
	var winOS1Head = $('#winOS1Head');
	var winOS1Close = $('#winOS1Close');
	var winOS1ButtonResize = $('#winOS1ButtonResize');
	var winOS1ButtonClose = $('#winOS1ButtonClose');
	var winOS1Content = $('#winOS1Content');

	var windowOS2 = $('#windowOS2');
	var winOS2Head = $('#winOS2Head');
	var winOS2Close = $('#winOS2Close');
	var winOS2ButtonResize = $('#winOS2ButtonResize');
	var winOS2ButtonClose = $('#winOS2ButtonClose');
	var winOS2Content = $('#winOS2Content');
	
	var windowOS3 = $('#windowOS3');
	var winOS3Head = $('#winOS3Head');
	var winOS3Close = $('#winOS3Close');
	var winOS3ButtonResize = $('#winOS3ButtonResize');
	var winOS3ButtonClose = $('#winOS3ButtonClose');
	var winOS3Content = $('#winOS3Content');

	var windowOS4 = $('#windowOS4');
	var winOS4Head = $('#winOS4Head');
	var winOS4Close = $('#winOS4Close');
	var winOS4ButtonResize = $('#winOS4ButtonResize');
	var winOS4ButtonClose = $('#winOS4ButtonClose');
	var winOS4Content = $('#winOS4Content');

	var windowOS5 = $('#windowOS5');
	var winOS5Head = $('#winOS5Head');
	var winOS5Close = $('#winOS5Close');
	var winOS5ButtonResize = $('#winOS5ButtonResize');
	var winOS5ButtonClose = $('#winOS5ButtonClose');
	var winOS5Content = $('#winOS5Content');

	var windowOS6 = $('#windowOS6');
	var winOS6Head = $('#winOS6Head');
	var winOS6Close = $('#winOS6Close');
	var winOS6ButtonResize = $('#winOS6ButtonResize');
	var winOS6ButtonClose = $('#winOS6ButtonClose');
	var winOS6Content = $('#winOS6Content');

	var windowOS7 = $('#windowOS7');
	var winOS7Head = $('#winOS7Head');
	var winOS7Close = $('#winOS7Close');
	var winOS7ButtonResize = $('#winOS7ButtonResize');
	var winOS7ButtonClose = $('#winOS7ButtonClose');
	var winOS7Content = $('#winOS7Content');

	var windowOS8 = $('#windowOS8');
	var winOS8Head = $('#winOS8Head');
	var winOS8Close = $('#winOS8Close');
	var winOS8ButtonResize = $('#winOS8ButtonResize');
	var winOS8ButtonClose = $('#winOS8ButtonClose');
	var winOS8Content = $('#winOS8Content');

	var WinHeight = $(window).height();
	var WinWidth = $(window).width();

	var buttonStart = false;
	var indexWinOS_Z = 10;
	
	var clockOS = $('#clockOS');
		
	/*ЧАСЫ -------------------------------------------------------------------------------*/
	function Clock(){
		var forTime = new Date();
		var hour = forTime.getHours();
		var minutes = forTime.getMinutes();
		var sec = forTime.getSeconds();
		clockOS.text(hour + ":" + minutes +":" +sec);	
	}
	/*-----------------------------------------------------------------------------------------*/
	
	desktopOS.hide();
	/*Загрузка ОС -------------------------------------------------------------------*/
	function LoadOS () {
		desktopImageOS.css('visibility','visible');
		desktopOS.fadeIn(1000);
		desktopOS.css('visibility','visible');
		mainPanelOS.css('top',WinHeight - 32);
		menuOS.css('top',WinHeight - 535);
		setInterval(Clock, 1000);
	}

	$('#desktopImageOS').load(LoadOS());	//загрузка ОС
	desktopImageOS.mousedown(function(e){
		menuOS.css('visibility','hidden');
		buttonStart = false;
		e.preventDefault();
	});
	/*----------------------------------------------------------------------------------------*/

	
	/*Событие при изменении размера окна браузера -------*/
	$(window).resize(function(){
		desktopOS.css('visibility','hidden');
		WinHeight = $(window).height();
		WinWidth = $(window).width();
		mainPanelOS.css('top',WinHeight - 32);
		menuOS.css('top',WinHeight - 535);
		desktopOS.css('visibility','visible');
	});
	/*----------------------------------------------------------------------------------------*/

	/*События главной кнопки ОС ----------------------------------------*/
	startButtonOS.click(function(e){
		if (buttonStart == false){
			menuOS.css('visibility','visible');
			buttonStart = true;
		}else{
			menuOS.css('visibility','hidden');
			buttonStart = false;
		}
	});
	/*startButtonOS.toggle(function(e){
		menuOS.css('visibility','visible');
	}, function(){
		menuOS.css('visibility','hidden');
	});*/
	startButtonOS.hover(function(){
		startButtonOS.css('background-color','#D3E4E7');
	}, function(){
		startButtonOS.css('background-color','#74B5BE');
	});
	/*----------------------------------------------------------------------------------------*/

	/*События иконок ОС --------------------------------------------------------*/
	/*ОКНО №1 ---------------------------------------------*/
	var winOS1MouseDown = false;
	var winOS1Width = WinWidth - (WinWidth / 2);
	var winOS1Height = WinHeight - (WinHeight / 3);
	desktopIcon01.click(function(){
		indexWinOS_Z++;
		windowOS1.css('visibility','visible').css('width',winOS1Width).css('height',winOS1Height).css('z-index',indexWinOS_Z);
		winOS1Head.css('width',winOS1Width-2);
		winOS1Close.css('left',winOS1Width-47);
		winOS1Content.css('width',winOS1Width-5).css('height',winOS1Height-35);
	});
	/*активизация перетаскивания окна*/
	winOS1Head.mousedown(function(e){
		if(winOS1MouseDown == true){
			winOS1Head.css('cursor','default');
			winOS1MouseDown = false;
		}else{
			winOS1Head.css('cursor','move');
			winOS1MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS1Head.dblclick(function(e){
		windowOS1.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS1Head.css('width',WinWidth-7);
		winOS1Close.css('left',WinWidth-62);
		winOS1Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS1ButtonResize.toggle(function(e){
		windowOS1.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS1Head.css('width',WinWidth-7);
		winOS1Close.css('left',WinWidth-62);
		winOS1Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS1.css('visibility','visible').css('width',winOS1Width).css('height',winOS1Height).css('z-index',indexWinOS_Z);
		winOS1Head.css('width',winOS1Width-2);
		winOS1Close.css('left',winOS1Width-47);
		winOS1Content.css('width',winOS1Width-5).css('height',winOS1Height-35);
	});
	/*закрыть окно*/
	winOS1ButtonClose.click(function(){
		windowOS1.css('visibility','hidden');
	});
	/*фокус окна*/
	windowOS1.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS1.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №2 ---------------------------------------------*/
	var winOS2MouseDown = false;
	var winOS2Width = WinWidth - (WinWidth / 3);
	var winOS2Height = WinHeight - (WinHeight / 3)+50;
	desktopIcon02.click(function(){
		indexWinOS_Z++;
		windowOS2.css('visibility','visible').css('width',winOS2Width).css('height',winOS2Height).css('z-index',indexWinOS_Z);
		winOS2Head.css('width',winOS2Width-2);
		winOS2Close.css('left',winOS2Width-47);
		winOS2Content.css('width',winOS2Width-5).css('height',winOS2Height-35);
	});
	/*активизация перетаскивания окна*/
	winOS2Head.mousedown(function(e){
		if(winOS2MouseDown == true){
			winOS2Head.css('cursor','default');
			winOS2MouseDown = false;
		}else{
			winOS2Head.css('cursor','move');
			winOS2MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS2Head.dblclick(function(e){
		windowOS2.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS2Head.css('width',WinWidth-7);
		winOS2Close.css('left',WinWidth-62);
		winOS2Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS2ButtonResize.toggle(function(e){
		windowOS2.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS2Head.css('width',WinWidth-7);
		winOS2Close.css('left',WinWidth-62);
		winOS2Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS2.css('visibility','visible').css('width',winOS2Width).css('height',winOS2Height).css('z-index',indexWinOS_Z);
		winOS2Head.css('width',winOS2Width-2);
		winOS2Close.css('left',winOS2Width-47);
		winOS2Content.css('width',winOS2Width-5).css('height',winOS2Height-35);
	});
	/*закрыть окно*/
	winOS2ButtonClose.click(function(){
		windowOS2.css('visibility','hidden');
	});
	/*фокус окна*/
	windowOS2.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS2.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №3 ---------------------------------------------*/
	var winOS3MouseDown = false;
	var winOS3Width = WinWidth - (WinWidth / 2)+50;
	var winOS3Height = WinHeight - (WinHeight / 3);
	desktopIcon03.click(function(){
		indexWinOS_Z++;
		windowOS3.css('visibility','visible').css('width',winOS3Width).css('height',winOS3Height).css('z-index',indexWinOS_Z);
		winOS3Head.css('width',winOS3Width-2);
		winOS3Close.css('left',winOS3Width-47);
		winOS3Content.css('width',winOS3Width-5).css('height',winOS3Height-35);
	});
	winOS3Head.mousedown(function(e){
		if(winOS3MouseDown == true){
			winOS3Head.css('cursor','default');
			winOS3MouseDown = false;
		}else{
			winOS3Head.css('cursor','move');
			winOS3MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS3Head.dblclick(function(e){
		windowOS3.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS3Head.css('width',WinWidth-7);
		winOS3Close.css('left',WinWidth-62);
		winOS3Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS3ButtonResize.toggle(function(e){
		windowOS3.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS3Head.css('width',WinWidth-7);
		winOS3Close.css('left',WinWidth-62);
		winOS3Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS3.css('visibility','visible').css('width',winOS3Width).css('height',winOS3Height).css('z-index',indexWinOS_Z);
		winOS3Head.css('width',winOS3Width-2);
		winOS3Close.css('left',winOS3Width-47);
		winOS3Content.css('width',winOS3Width-5).css('height',winOS3Height-35);
	});
	/*закрыть окно*/
	winOS3ButtonClose.click(function(){
		windowOS3.css('visibility','hidden');
	});
	windowOS3.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS3.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №4 ---------------------------------------------*/
	var winOS4MouseDown = false;
	var winOS4Width = WinWidth - (WinWidth / 2)+300;
	var winOS4Height = WinHeight - (WinHeight / 2)+250;
	winOS4Head.mousedown(function(e){
		if(winOS4MouseDown == true){
			winOS4Head.css('cursor','default');
			winOS4MouseDown = false;
		}else{
			winOS4Head.css('cursor','move');
			winOS4MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS4Head.dblclick(function(e){
		windowOS4.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS4Head.css('width',WinWidth-7);
		winOS4Close.css('left',WinWidth-62);
		winOS4Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS4ButtonResize.toggle(function(e){
		windowOS4.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS4Head.css('width',WinWidth-7);
		winOS4Close.css('left',WinWidth-62);
		winOS4Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS4.css('visibility','visible').css('width',winOS4Width).css('height',winOS4Height).css('z-index',indexWinOS_Z);
		winOS4Head.css('width',winOS4Width-2);
		winOS4Close.css('left',winOS4Width-47);
		winOS4Content.css('width',winOS4Width-5).css('height',winOS4Height-35);
	});
	/*закрыть окно*/
	winOS4ButtonClose.click(function(){
		windowOS4.css('visibility','hidden');
	});
	windowOS4.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS4.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №5 ---------------------------------------------*/
	var winOS5MouseDown = false;
	var winOS5Width = WinWidth - (WinWidth / 3);
	var winOS5Height = WinHeight - (WinHeight / 2)+100;
	winOS5Head.mousedown(function(e){
		if(winOS5MouseDown == true){
			winOS5Head.css('cursor','default');
			winOS5MouseDown = false;
		}else{
			winOS5Head.css('cursor','move');
			winOS5MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS5Head.dblclick(function(e){
		windowOS5.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS5Head.css('width',WinWidth-7);
		winOS5Close.css('left',WinWidth-62);
		winOS5Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS5ButtonResize.toggle(function(e){
		windowOS5.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS5Head.css('width',WinWidth-7);
		winOS5Close.css('left',WinWidth-62);
		winOS5Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS5.css('visibility','visible').css('width',winOS5Width).css('height',winOS5Height).css('z-index',indexWinOS_Z);
		winOS5Head.css('width',winOS5Width-2);
		winOS5Close.css('left',winOS5Width-47);
		winOS5Content.css('width',winOS5Width-5).css('height',winOS5Height-35);
	});
	/*закрыть окно*/
	winOS5ButtonClose.click(function(){
		windowOS5.css('visibility','hidden');
	});
	windowOS5.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS5.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №6 ---------------------------------------------*/
	var winOS6MouseDown = false;
	var winOS6Width = WinWidth - (WinWidth / 2)+50;
	var winOS6Height = WinHeight - (WinHeight / 3);
	desktopIcon04.click(function(){
		indexWinOS_Z++;
		windowOS6.css('visibility','visible').css('width',winOS6Width).css('height',winOS6Height).css('z-index',indexWinOS_Z);
		winOS6Head.css('width',winOS6Width-2);
		winOS6Close.css('left',winOS6Width-47);
		winOS6Content.css('width',winOS6Width-5).css('height',winOS6Height-35);
	});
	winOS6Head.mousedown(function(e){
		if(winOS6MouseDown == true){
			winOS6Head.css('cursor','default');
			winOS6MouseDown = false;
		}else{
			winOS6Head.css('cursor','move');
			winOS6MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS6Head.dblclick(function(e){
		windowOS6.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS6Head.css('width',WinWidth-7);
		winOS6Close.css('left',WinWidth-62);
		winOS6Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS6ButtonResize.toggle(function(e){
		windowOS6.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS6Head.css('width',WinWidth-7);
		winOS6Close.css('left',WinWidth-62);
		winOS6Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS6.css('visibility','visible').css('width',winOS6Width).css('height',winOS6Height).css('z-index',indexWinOS_Z);
		winOS6Head.css('width',winOS6Width-2);
		winOS6Close.css('left',winOS6Width-47);
		winOS6Content.css('width',winOS6Width-5).css('height',winOS6Height-35);
	});
	/*закрыть окно*/
	winOS6ButtonClose.click(function(){
		windowOS6.css('visibility','hidden');
	});
	windowOS6.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS6.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z+1);
		}
	});
	
	/*ОКНО №7 ---------------------------------------------*/
	var winOS7MouseDown = false;
	var winOS7Width = 802;
	var winOS7Height = 540;
	winOS7Head.mousedown(function(e){
		if(winOS7MouseDown == true){
			winOS7Head.css('cursor','default');
			winOS7MouseDown = false;
		}else{
			winOS7Head.css('cursor','move');
			winOS7MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS7Head.dblclick(function(e){
		windowOS7.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS7Head.css('width',WinWidth-7);
		winOS7Close.css('left',WinWidth-62);
		winOS7Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS7ButtonResize.toggle(function(e){
		windowOS7.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS7Head.css('width',WinWidth-7);
		winOS7Close.css('left',WinWidth-62);
		winOS7Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS7.css('visibility','visible').css('width',winOS7Width).css('height',winOS7Height).css('z-index',indexWinOS_Z);
		winOS7Head.css('width',winOS7Width-2);
		winOS7Close.css('left',winOS7Width-47);
		winOS7Content.css('width',winOS7Width-5).css('height',winOS7Height-35);
	});
	/*закрыть окно*/
	winOS7ButtonClose.click(function(){
		windowOS7.css('visibility','hidden');
	});
	windowOS7.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS7.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS8.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS7.css('z-index',indexWinOS_Z+1);
		}
	});

	/*ОКНО №8 ---------------------------------------------*/
	var winOS8MouseDown = false;
	var winOS8Width = WinWidth - (WinWidth / 2)-200;
	var winOS8Height = WinHeight - (WinHeight / 2);
	winOS8Head.mousedown(function(e){
		if(winOS8MouseDown == true){
			winOS8Head.css('cursor','default');
			winOS8MouseDown = false;
		}else{
			winOS8Head.css('cursor','move');
			winOS8MouseDown = true;
		}
		e.preventDefault();
	});
	/*развернуть окто на весь экран*/
	winOS8Head.dblclick(function(e){
		windowOS8.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS8Head.css('width',WinWidth-7);
		winOS8Close.css('left',WinWidth-62);
		winOS8Content.css('width',WinWidth-10).css('height',WinHeight-69);
	});
	winOS8ButtonResize.toggle(function(e){
		windowOS8.css('width',WinWidth-5).css('height',WinHeight-35).css('left','0').css('top','0');
		winOS8Head.css('width',WinWidth-7);
		winOS8Close.css('left',WinWidth-62);
		winOS8Content.css('width',WinWidth-10).css('height',WinHeight-69);
	},function(){
		indexWinOS_Z++;
		windowOS8.css('visibility','visible').css('width',winOS8Width).css('height',winOS8Height).css('z-index',indexWinOS_Z);
		winOS8Head.css('width',winOS8Width-2);
		winOS8Close.css('left',winOS8Width-47);
		winOS8Content.css('width',winOS8Width-5).css('height',winOS8Height-35);
	});
	/*закрыть окно*/
	winOS8ButtonClose.click(function(){
		windowOS8.css('visibility','hidden');
	});
	windowOS8.click(function(){
		if(indexWinOS_Z <= 90){
			indexWinOS_Z++;
			windowOS8.css('z-index',indexWinOS_Z);
		}else{
			indexWinOS_Z = 10;
			windowOS7.css('z-index',indexWinOS_Z);
			windowOS6.css('z-index',indexWinOS_Z);
			windowOS5.css('z-index',indexWinOS_Z);
			windowOS4.css('z-index',indexWinOS_Z);
			windowOS3.css('z-index',indexWinOS_Z);
			windowOS2.css('z-index',indexWinOS_Z);
			windowOS1.css('z-index',indexWinOS_Z);
			windowOS8.css('z-index',indexWinOS_Z+1);
		}
	});



	/*----------------------------------------------------------------------------------------*/

	/*События рабочего стола ОС -----------------------------------------*/
	desktopOS.mousemove(function(e){
		/*Перемещение окон--------------------------------------------*/
		if(winOS1MouseDown == true){
			windowOS1.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS2MouseDown == true){
			windowOS2.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS3MouseDown == true){
			windowOS3.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS4MouseDown == true){
			windowOS4.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS5MouseDown == true){
			windowOS5.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS6MouseDown == true){
			windowOS6.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS7MouseDown == true){
			windowOS7.css('top',e.pageY).css('left',e.pageX);
		}
		if(winOS8MouseDown == true){
			windowOS8.css('top',e.pageY).css('left',e.pageX);
		}

		/*---------------------------------------------------------------------------*/
	});
	desktopOS.click(function(){
		winOS1MouseDown = false;	
		winOS2MouseDown = false;	
		winOS3MouseDown = false;
		winOS4MouseDown = false;
		winOS5MouseDown = false;
		winOS6MouseDown = false;
		winOS7MouseDown = false;
		winOS8MouseDown = false;
	});
	/*----------------------------------------------------------------------------------------*/

	/*События Главного меню ------------------------------------------------*/
	menuItem1.mousedown(function(){
		indexWinOS_Z++;
		windowOS1.css('visibility','visible').css('width',winOS1Width).css('height',winOS1Height).css('z-index',indexWinOS_Z);
		winOS1Head.css('width',winOS1Width-2);
		winOS1Close.css('left',winOS1Width-47);
		winOS1Content.css('width',winOS1Width-5).css('height',winOS1Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem1.mousemove(function(){
		menuItem1.css('backgroundColor','#C0C0C0');
	});
	menuItem1.mouseleave(function(){
		menuItem1.css('backgroundColor','#E8E8E8');
	});
	menuItem2.mousedown(function(){
		indexWinOS_Z++;
		windowOS2.css('visibility','visible').css('width',winOS2Width).css('height',winOS2Height).css('z-index',indexWinOS_Z);
		winOS2Head.css('width',winOS2Width-2);
		winOS2Close.css('left',winOS2Width-47);
		winOS2Content.css('width',winOS2Width-5).css('height',winOS2Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem2.mousemove(function(){
		menuItem2.css('backgroundColor','#C0C0C0');
	});
	menuItem2.mouseleave(function(){
		menuItem2.css('backgroundColor','#E8E8E8');
	});
	menuItem3.mousedown(function(){
		indexWinOS_Z++;
		windowOS3.css('visibility','visible').css('width',winOS3Width).css('height',winOS3Height).css('z-index',indexWinOS_Z);
		winOS3Head.css('width',winOS3Width-2);
		winOS3Close.css('left',winOS3Width-47);
		winOS3Content.css('width',winOS3Width-5).css('height',winOS3Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem3.mousemove(function(){
		menuItem3.css('backgroundColor','#C0C0C0');
	});
	menuItem3.mouseleave(function(){
		menuItem3.css('backgroundColor','#E8E8E8');
	});
	menuItem4.mousedown(function(){
		indexWinOS_Z++;
		windowOS4.css('visibility','visible').css('width',winOS4Width).css('height',winOS4Height).css('z-index',indexWinOS_Z);
		winOS4Head.css('width',winOS4Width-2);
		winOS4Close.css('left',winOS4Width-47);
		winOS4Content.css('width',winOS4Width-5).css('height',winOS4Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem4.mousemove(function(){
		menuItem4.css('backgroundColor','#C0C0C0');
	});
	menuItem4.mouseleave(function(){
		menuItem4.css('backgroundColor','#E8E8E8');
	});
	menuItem5.mousedown(function(){
		indexWinOS_Z++;
		windowOS5.css('visibility','visible').css('width',winOS5Width).css('height',winOS5Height).css('z-index',indexWinOS_Z);
		winOS5Head.css('width',winOS5Width-2);
		winOS5Close.css('left',winOS5Width-47);
		winOS5Content.css('width',winOS5Width-5).css('height',winOS5Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem5.mousemove(function(){
		menuItem5.css('backgroundColor','#C0C0C0');
	});
	menuItem5.mouseleave(function(){
		menuItem5.css('backgroundColor','#E8E8E8');
	});
	menuItem6.mousedown(function(){
		indexWinOS_Z++;
		windowOS6.css('visibility','visible').css('width',winOS6Width).css('height',winOS6Height).css('z-index',indexWinOS_Z);
		winOS6Head.css('width',winOS6Width-2);
		winOS6Close.css('left',winOS6Width-47);
		winOS6Content.css('width',winOS6Width-5).css('height',winOS6Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem6.mousemove(function(){
		menuItem6.css('backgroundColor','#C0C0C0');
	});
	menuItem6.mouseleave(function(){
		menuItem6.css('backgroundColor','#E8E8E8');
	});
	menuItem7.mousedown(function(){
		indexWinOS_Z++;
		windowOS7.css('visibility','visible').css('width',winOS7Width).css('height',winOS7Height).css('z-index',indexWinOS_Z);
		winOS7Head.css('width',winOS7Width-2);
		winOS7Close.css('left',winOS7Width-47);
		winOS7Content.css('width',winOS7Width-5).css('height',winOS7Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem7.mousemove(function(){
		menuItem7.css('backgroundColor','#C0C0C0');
	});
	menuItem7.mouseleave(function(){
		menuItem7.css('backgroundColor','#E8E8E8');
	});
	menuItem8.mousedown(function(){
		indexWinOS_Z++;
		windowOS8.css('visibility','visible').css('width',winOS8Width).css('height',winOS8Height).css('z-index',indexWinOS_Z);
		winOS8Head.css('width',winOS8Width-2);
		winOS8Close.css('left',winOS8Width-47);
		winOS8Content.css('width',winOS8Width-5).css('height',winOS8Height-35);
		menuOS.css('visibility','hidden');
		buttonStart = false;
	});
	menuItem8.mousemove(function(){
		menuItem8.css('backgroundColor','#C0C0C0');
	});
	menuItem8.mouseleave(function(){
		menuItem8.css('backgroundColor','#E8E8E8');
	});
	/*----------------------------------------------------------------------------------------*/

	/*Событие закрыть окно браузера ----------------------------------*/
	$('#OSClose').click(function(){
		$(window).close;
	});


	//var body = $('body');
	//var body = $('body');
	//var imageH = $('img').height();
	//alert(imageH);
	//$('img').fadeOut(1000);
	//$('#desktop').fadeOut(1000);
	//$('#desktop').fadeIn(1000);
	//LoadOS();


});