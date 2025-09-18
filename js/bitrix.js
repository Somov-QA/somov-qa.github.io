(function(){ 

	let listAdmin = [
		["Очистка файлов кеша", "/bitrix/admin/cache.php?lang=ru", "Настройки > Настройки продукта > Автокеширование"],
		["Шаблоны писем", "/bitrix/admin/message_admin.php?lang=ru", "Настройки > Настройки продукта > Почтовые и СМС события > Почтовые шаблоны"],
		["Проверить отправляемых письма", "/bitrix/admin/perfmon_table.php?lang=ru&table_name=b_event", "Настройки > Производительность > Таблицы"],
		["b_sale_order_payment", "/bitrix/admin/perfmon_table.php?lang=ru&table_name=b_sale_order_payment", "Монитор производительности: b_sale_order_payment"],
		["b_sale_order", "/bitrix/admin/perfmon_tables.php?lang=ru#b_sale_order", "Таблицы в базе данных"],
		["b_sale_order", "/bitrix/admin/perfmon_table.php?lang=ru&table_name=b_sale_order", "Монитор производительности: b_sale_order"],
		["", "", ""],
		["", "", ""],
		["", "", ""]
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

	let table = document.getElementById('table_bitrix_admin');
	let content = '';
	for (let values of listAdmin) {
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
	table.innerHTML = '<table id="table_bitrix_admin">' + content + '</table>';

}());