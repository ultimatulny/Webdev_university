function oil_price(){

	var error = false;
	var km = +main.km.value;					 // Расстояние в км
	var oilprice = +main.oilprice.value;	     // Цена бензина за литр
	var potreb = +main.potreblenie.value;        // Потребление на 100 км

	if(km == "") error = "Введите расстояние!"; 
		else if(oilprice == "") error = "Введите цену бензина!";
			else if(potreb == "") error = "Укажите потребление бензина!";

	if(error){	// Проверка на пустоту строки
		alert(error);
		return false;
	}

	if((isNaN(km)) || (isNaN(oilprice)) || (isNaN(potreb)))
		error = "Введите только числа!";

	if(error){  // Проверка на число
		alert(error);
		return false;
	}

	var totalprice = (km / 100) * potreb * oilprice;

	main.totalprice.value = Math.ceil(totalprice); // Так как цены растут 24/7 округляем в большую сторону
}

function check(){
	var inp1 = document.getElementById('input1'),
        inp2 = document.getElementById('input2'),
        inp3 = document.getElementById('input3');

    document.getElementById('btn').disabled = inp1.value && inp2.value && inp3.value ? false : "disabled";

}