(function(){

	var header = document.getElementById('PoemsHead');
	var body = document.getElementById('PoemsBody');
	var footer = document.getElementById('PoemsFooter');
	var poemF1 = document.getElementById('PoemF1');
	var poemF2 = document.getElementById('PoemF2');
	var poemF3 = document.getElementById('PoemF3');
	var poemF4 = document.getElementById('PoemF4');
	var poemF5 = document.getElementById('PoemF5');
	var poemF6 = document.getElementById('PoemF6');
	var poemF7 = document.getElementById('PoemF7');
	var poemF8 = document.getElementById('PoemF8');
	var poemF9 = document.getElementById('PoemF9');
	var poemF10 = document.getElementById('PoemF10');

/*
	poem1.addEventListener('click', function(){
		alert("OK");
		header.innerText = "Заголовок";
		body.innerText = "Стих";
		footer.innerText = "(опубликовано )";
	});
*/

	poemF1.addEventListener('click', function(){
		header.innerText = "Виртуальный мир";
		body.innerText = "Остановилось время для меня\nИ я застрял в нем навсегда\nНо жизнь других я чувствую\nКак время их течёт я слушаю\nИ жизнь других со стороны\nВсегда идёт по одному пути.\nИ так легко, взять предсказать\nСобытий жизни чьих-то угадать\nНо не прочесть свою судьбу\nКак будто в пустоту смотрю.\nИ только виртуальный мир живой\nОн всех всегда зовёт с собой\nГотовый дать всем людям то\nЧего в реальности нам не дано.";
		footer.innerText = "(опубликовано 31.05.2023 10:16)";
	});

	poemF2.addEventListener('click', function(){
		header.innerText = "Ктулху";
		body.innerText = "Поднялись волны до небес.\nВдали на скалы Ктулху влез\nЯвился он из под воды\nИ час настал его поры.\n\nРаскаты грома, дождь полил,\nА ветер всё вокруг сносил,\nИ небо стало как свинец,\nКазалось что настал конец.\n\nИдет неторопливо шаг за шагом\nВода с него стекает водопадом.\nТак двигался как буд-то по воде\nСпособный говорить во сне.\n\nА за спиной его Р'льех\nИз под воды поднялся вверх\nПрекрасный город из глубин\nНа свете он такой один.";
		footer.innerText = "(опубликовано 23.11.2022 09:43)";
	});

	poemF3.addEventListener('click', function(){
		header.innerText = "Репликант Джо \nи голограмма Джой";
		body.innerText = "Мне в жизни не понятно ничего,\nНо мне с тобою так легко.\nМне почему-то хорошо\nИ всё на свете всё равно.\n\nЯ знаю что домой приду,\nТебя увижу, обниму,\nВ подарок «эманатор» подарю,\nТебя с собой всегда возьму.\n\nТы можешь облик взять любой\nЧтобы понравиться такой.\nТы можешь быть заботливой\nВсегда быть рядышком со мной.\n\nВсегда поддержишь, всё поймешь,\nТы не предашь и не соврёшь.\nТы любишь искренне меня,\nХотя всё это лишь игра.\n\nНа крыше дома мы стоим\nОбнявшись вместе, мы молчим,\nТвои слова: \"люблю тебя\"\nНе обязательные для меня.\n\nПрограммой так заложено\nЧто угождать положено.\nНо мне с тобою хорошо\nИ мне на это всё равно.\n\nНа нашем свете никогда\nТаких как ты не видел я.\nСреди людей таких здесь нет,\nИ я люблю искуственный интеллект.";
		footer.innerText = "(опубликовано 30.08.2018 11:16)\nЗа основу взяты персонажи фильма \"Бегущий по лезвию 2049\".";
	});
	

}());