(function(){

	var Result = document.getElementById('Result');
	var BtnCalculate = document.getElementById('BtnCalculate');
	var BtnClear = document.getElementById('BtnClear');
	var BtnColdWater = document.getElementById('BtnColdWater');
	var BtnWater = document.getElementById('BtnWater');
	var BtnEnergy = document.getElementById('BtnEnergy');

	var MKD = document.getElementById('Mkd');
	var MKDCount = document.getElementById('MkdCount');
	var ColdWater1 = document.getElementById('ColdWater1');
	var ColdWater2 = document.getElementById('ColdWater2');
	var ColdWater3 = document.getElementById('ColdWater3');
	var ColdWaterCount = document.getElementById('ColdWaterCount');
	var Water1 = document.getElementById('Water1');
	var Water2 = document.getElementById('Water2');
	var Water3 = document.getElementById('Water3');
	var WaterCount = document.getElementById('WaterCount');
	var Warm = document.getElementById('Warm');
	var WarmCount = document.getElementById('WarmCount');
	var Tbo = document.getElementById('Tbo');
	var TboCount = document.getElementById('TboCount');
	var Energy1 = document.getElementById('Energy1');
	var Energy2 = document.getElementById('Energy2');
	var Energy3 = document.getElementById('Energy3');
	var Energy4 = document.getElementById('Energy4');
	var Energy5 = document.getElementById('Energy5');
	var EnergyCount = document.getElementById('EnergyCount');
	var Gas = document.getElementById('Gas');
	var GasCount = document.getElementById('GasCount');
	var Itercom = document.getElementById('Itercom');
	var ItercomCount = document.getElementById('ItercomCount');
	var Phone = document.getElementById('Phone');
	var PhoneCount = document.getElementById('PhoneCount');

	function main()
	{
		ColdWater3.value = Math.round(Math.ceil(ColdWater1.value * ColdWater2.value));
		Water3.value = Math.round(Math.ceil(Water1.value * Water2.value));
		Energy6.value = Math.round(Math.ceil(Energy2.value - Energy1.value));
		Energy5.value = Math.round(Math.ceil((Energy6.value / Energy3.value) * Energy4.value));
	}

	main();

	BtnCalculate.addEventListener('click', function(){
		let total = 0;
		ColdWater3.value = Math.round(Math.ceil(ColdWater1.value * ColdWater2.value));
		Water3.value = Math.round(Math.ceil(Water1.value * Water2.value));
		Energy6.value = Math.round(Math.ceil(Energy2.value - Energy1.value));
		Energy5.value = Math.round(Math.ceil((Energy6.value / Energy3.value) * Energy4.value));
		Result.value = "РАСЧЕТ КАМУНАЛЬНЫХ УСЛУГИ";
		Result.value += "\n=================================================";
		Result.value += "\nСодержание жилого помещения для МКД: " + Math.round(Math.ceil(MKD.value * MKDCount.value));
		Result.value += "\nХолодное водоснабжение: " + Math.round(Math.ceil(ColdWater3.value * ColdWaterCount.value));
		Result.value += "\nВодоотведение: " + Math.round(Math.ceil(Water3.value * WaterCount.value));
		Result.value += "\nТеплоснабжение: " + Math.round(Math.ceil(Warm.value * WarmCount.value));
		Result.value += "\nВывоз ТБО: " + Math.round(Math.ceil(Tbo.value * TboCount.value));
		Result.value += "\nЭнергосбыт: " + Math.round(Math.ceil(Energy5.value * EnergyCount.value));
		Result.value += "\nГаз ЧМНГ: " + Math.round(Math.ceil(Gas.value * GasCount.value));
		Result.value += "\nДомофон: " + Math.round(Math.ceil(Itercom.value * ItercomCount.value));
		Result.value += "\nСтационарная связь: " + Math.round(Math.ceil(Phone.value * PhoneCount.value));
		Result.value += "\n=================================================";
		total += Math.round(Math.ceil(MKD.value * MKDCount.value));
		total += Math.round(Math.ceil(ColdWater3.value * ColdWaterCount.value));
		total += Math.round(Math.ceil(Water3.value * WaterCount.value));
		total += Math.round(Math.ceil(Warm.value * WarmCount.value));
		total += Math.round(Math.ceil(Tbo.value * TboCount.value));
		total += Math.round(Math.ceil(Energy5.value * EnergyCount.value));
		total += Math.round(Math.ceil(Gas.value * GasCount.value));
		total += Math.round(Math.ceil(Itercom.value * ItercomCount.value));
		total += Math.round(Math.ceil(Phone.value * PhoneCount.value));
		Result.value += "\nВсего к оплате: " + total;
		Result.value += "\n=================================================";
	});

	BtnClear.addEventListener('click', function(){
		Result.value = "";
	});

	BtnColdWater.addEventListener('click', function(){
		ColdWater3.value = Math.round(ColdWater1.value * ColdWater2.value);
	});

	BtnWater.addEventListener('click', function(){
		Water3.value = Math.round(Water1.value * Water2.value);
	});

	BtnEnergy.addEventListener('click', function(){
		Energy6.value = Math.round(Energy2.value - Energy1.value);
		Energy5.value = Math.round((Energy6.value / Energy3.value) * Energy4.value);
	});

}());