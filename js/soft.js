(function(){ 

	let listOnline = [
		["Figma", "https://www.figma.com/", "Онлайн-сервис для разработки интерфейсов и прототипирования с возможностью организации совместной работы в режиме реального времени."],
		["PageSpeed", "	https://pagespeed.web.dev/", "Проверяет скорость загрузки страниц сайта."],
		["W3C Validation", "https://validator.w3.org/", "HTML валидатор страниц сайта."],
		["JSON Validator", "https://jsonformatter.curiousconcept.com/", "Валидатор JSON данных."],
		["Loaddy", "https://loaddy.com/", "Онлайн нагрузочное тестирование сайта и сервера."],
		["Links", "https://pr-cy.ru/link_extractor/", "Анализ внешних и внутренних ссылок."],
		["Sitemap", "https://www.mysitemapgenerator.com/ru/service/check.html", "Проверка карты сайта sitemap."],
		["Redirect", "https://web-tool.org/check-redirect/", "Проверка переадресации (редирект)"],
		["Spelling", "https://text.ru/spelling", "Проверка орфографии текста"],
		["Html", "https://bertal.ru/", "Просмотр HTTP-заголовков."],
		["Y.Validation", "https://webmaster.yandex.ru/tools/microtest/", "Яндекс вебмастер - Валидатор микроразметки"],
		["Y.Response", "https://webmaster.yandex.ru/tools/server-response/", "Яндекс вебмастер - Проверка ответа сервера"],
		["Y.Sitemap", "https://webmaster.yandex.ru/tools/sitemap/", "Яндекс вебмастер - Анализ файлов Sitemap"],
		["304 Not Modified", "https://last-modified.com/ru", "Проверить статус 304 Not Modified"],
		["Last-Modified", "https://last-modified.com/ru/last-modified-header", "Подробнее о заголовке Last-Modified"],
		["Text to text", "http://text.num2word.ru/", "Сравнение текстов онлайн."],
		["Regexp PHP", "https://uvsoftium.ru/php/regexp.php", "Мастер составления регулярного выражения для PHP."]
	];

	let listAutotests = [
		["Selenium", "https://www.selenium.dev/", "Инструмент для автоматизации действий веб-браузера."],
		["WebDriver (Chrome)", "https://googlechromelabs.github.io/chrome-for-testing/", "С этой страницы можно скачать веб драйвер для Chrome браузера."],
		["Appium", "https://appium.io/", "Инструмент для автоматизации действий mobile приложений."],
		["Jenkins", "https://www.jenkins.io/", "Программная система предназначенная для обеспечения процесса непрерывной интеграции программного обеспечения."],
		["", "", ""],
		["Codeception", "https://codeception.com/", "Codeception собирает и делится лучшими практиками и решениями для тестирования веб-приложений на PHP."],
		["WebdriverIO", "https://webdriver.io/", "Платформа тестирования браузеров нового поколения и мобильной автоматизации для Node.js."],
		["Selenide", "https://ru.selenide.org/", "Фреймворк для автоматизированного тестирования веб-приложений на основе Selenium WebDriver."],
		["Cucumber", "https://cucumber.io/", "Cucumber - это инструмент для проведения автоматизированных приемочных тестов, написанный простым языком."],
		["Robot framework", "https://robotframework.org/", "Robot Framework - это платформа с открытым исходным кодом для автоматизации тестирования и роботизированных процессов (RPA)."]
	];

	let listDeveloper = [
		["Maven repository (MVN)", "https://mvnrepository.com/", "Репозитогий готовых решений для разработки на Java."],
		["Nuget", "https://www.nuget.org/", "Репозитогий готовых решений для разработки на C#."],
		["NodeJS", "https://nodejs.org/", "Бесплатная кроссплатформенная среда выполнения JavaScript."],
		["Git", "https://git-scm.com/", "Бесплатная распределенная система контроля версий."],
		["SourceTree", "https://www.sourcetreeapp.com/", "Простота и мощь в красивом графическом интерфейсе Git."],
		["SmartGit", "https://www.smartgit.dev/", "Мощный кроссплатформенный графический интерфейс Git."],
		["", "", ""],
		["Visual Studio Code", "https://code.visualstudio.com/", "Бесплатный редактор (html, javascript и пр)."],
		["IntelliJ IDEA", "https://www.jetbrains.com/idea/", "Беслптный IDE для разработки под Java."],
		["PyCharm", "https://www.jetbrains.com/pycharm/", "Беслптный IDE для разработки под Python."],
		["Netbeans", "https://netbeans.apache.org/", "Беслптный IDE для разработки под java, PHP."],
		["SublimeText", "https://www.sublimetext.com/", "Бесплатный редактор."],
		["Notepad++", "https://notepad-plus-plus.org/", "Бесплатный редактор."]
	];

	let list = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""],
		["", "", ""]
	];

	// Online ресурсы
	let table = document.getElementById('table_soft_online');
	let content = '';
	for (let values of listOnline) {
		content += '<tr>';
		content += '<td class="column-date">' + values[0] + '</td>';
		content += '<td class="column-name">';
		content += '<a class="text-company" href="' + values[1] + '" target="_blank">' + values[1] + '</a>';
		content += '</td>';
		content += '</tr>';
		content += '<tr>';
		content += '<td></td>';
		content += '<td class="column-border">' + values[2] + '</td>';
		content += '</tr>';
	}
	table.innerHTML = '<table id="table_soft_online">' + content + '</table>';

	// Автоматизация
	table = document.getElementById('table_soft_autotests');
	content = '';
	for (let values of listAutotests) {
		content += '<tr>';
		content += '<td class="column-date">' + values[0] + '</td>';
		content += '<td class="column-name">';
		content += '<a class="text-company" href="' + values[1] + '" target="_blank">' + values[1] + '</a>';
		content += '</td>';
		content += '</tr>';
		content += '<tr>';
		content += '<td></td>';
		content += '<td class="column-border">' + values[2] + '</td>';
		content += '</tr>';
	}
	table.innerHTML = '<table id="table_soft_online">' + content + '</table>';

	// Разработка
	table = document.getElementById('table_soft_develop');
	content = '';
	for (let values of listDeveloper) {
		content += '<tr>';
		content += '<td class="column-date">' + values[0] + '</td>';
		content += '<td class="column-name">';
		content += '<a class="text-company" href="' + values[1] + '" target="_blank">' + values[1] + '</a>';
		content += '</td>';
		content += '</tr>';
		content += '<tr>';
		content += '<td></td>';
		content += '<td class="column-border">' + values[2] + '</td>';
		content += '</tr>';
	}
	table.innerHTML = '<table id="table_soft_online">' + content + '</table>';

}());