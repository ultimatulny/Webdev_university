function vyvod()
{
	SurnameValue = anketa.Surname.value;
	NameValue = anketa.Name.value;
	AgeValue = anketa.age.options[anketa.age.selectedIndex].value;

	var fail = false;

	if(SurnameValue == "") fail = "Вы не ввели фамилию!";
		if(NameValue == "") fail = "Вы не ввели имя!";

		if(fail){
			alert(fail);
			return false;
		}

		if(document.anketa.pokupatel[0].checked){
			pokupatel = "Услугами пользуется давно";
		} else{
			pokupatel = "Услугами пользуется впервые";
		}	

		var arr = new Array();
		if (anketa.interest[0].checked) arr[0] = "Книги";
		if (anketa.interest[1].checked) arr[1] = "Музыка на CD";
		if (anketa.interest[2].checked) arr[2] = "Программное обеспечение";
		if (anketa.interest[3].checked) arr[3] = "Канцелярские товары";
		if (anketa.interest[4].checked) arr[4] = "Сувениры";
		arr = arr.sort();
		
		other = anketa.other_interest.value;
		txt = anketa.pozelania.value;

		document.write("<head>");
		document.write('<link rel="stylesheet" type="text/css" href="js.css">');
		document.write("</head>");
		document.write("<body>");
		document.write("<h1>Информация о покупателе</h1>");
		document.write("<div>");
		document.write("<h3>");
		document.write("Фамилия: " + "<span>" + SurnameValue + "</span>" +"<br><br>");
		document.write("Имя: " + "<span>" + NameValue + "</span>" +"<br><br>");
		document.write("Возрастная группа: " + "<span>" + AgeValue + "</span>" +"<br><br>");
		document.write(" " + "<span>" + pokupatel + "</span>" + "<br><br>");
		document.write("Товары, представляющие интерес: " + "<br><br>");

		var count = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i] != undefined){
				document.write("&nbsp; &bull; " + arr[i] + "<br>");
				count++;
			}
		}

		if(other != ""){
			document.write("&nbsp; &bull;" + other + "<br>");
		}

		if((count == 0) && (other == "")){
			document.write("<span>" + "Нет товаров, предоставляющих интерес :c" + "</span>" + "<br>");
		}

		document.write("<br>" + "Пожелания покупателя: " + "<br><br>");

		if(txt == ""){
			document.write("<span>" + "Нет пожеланий :c" + "</span>" + "<br>");
		}

		document.write("<span>" + txt + "</span>");
		document.write("</h3>");  
		document.write("</div>");
}
