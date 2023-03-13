(function(){

	var command = document.getElementById('command');
	var button1 = document.getElementById('button1');
	var button2 = document.getElementById('button2');
	var button3 = document.getElementById('button3');
	var button4 = document.getElementById('button4');
	var button5 = document.getElementById('button5');
	var button6 = document.getElementById('button6');
	var button7 = document.getElementById('button7');
	var button8 = document.getElementById('button8');
	var button9 = document.getElementById('button9');
	var button10 = document.getElementById('button10');
	var button11 = document.getElementById('button11');
	var button12 = document.getElementById('button12');

	button1.addEventListener('click', function(){
		command.value = "git clone https://...git";
	});

	button2.addEventListener('click', function(){
		command.value = "git status";
	});

	button3.addEventListener('click', function(){
		command.value = "git branch";
	});

	button4.addEventListener('click', function(){
		command.value = "git branch ИмяНовойВетки";
	});

	button5.addEventListener('click', function(){
		command.value = "git checkout ИмяВетки";
	});

	button6.addEventListener('click', function(){
		command.value = "git merge ИмяВетки";
	});

	button7.addEventListener('click', function(){
		command.value = "git branch -d ИмяВетки";
	});

	button8.addEventListener('click', function(){
		command.value = "git reset --hard";
	});

	button9.addEventListener('click', function(){
		command.value = "git add -A";
	});

	button10.addEventListener('click', function(){
		command.value = "git commit -m \"текст комментария\"";
	});

	button11.addEventListener('click', function(){
		command.value = "git push origin ИмяВетки";
	});

	button12.addEventListener('click', function(){
		command.value = "git pull origin";
	});

}());