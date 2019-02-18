function send(){

	var fail = false;
	var email = anketa.email.value;
	var theme = anketa.theme.value;
	var text = anketa.alltext.value;
	var confirm = anketa.confirm.value;
	alert(confirm); // Всегда возвращает on

	var regular_email = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;


	if(regular_email.test(email) == false) fail = "Вы ввели неверный Email!";
		else if(theme == "") fail = "Введите тему сообщения!";
			else if(text == "") fail = "Введите текст!";

	if(fail){
		alert(fail);
		return false;
	}
		
		document.write("<head>");
		document.write('<link rel="stylesheet" type="text/css" href="js.css">');
		document.write("</head>");

		document.write("<body>");
		document.write("<h1>Уважаемый отправитель!</h1>");
		document.write("<div>");
		document.write("<h3>");
		document.write("Ваше сообщение: " + "<br><br>");
		document.write('<span class="red">' + text + '</span>' + "<br><br>");
		document.write("На тему: " + '<span class="red">' + theme + '</span>' + "<br><br>");
		document.write("Отправлено по адресу: " + '<span class="blue">' + email + '</span>' + "<br><br>");

		if(confirm){
			document.write("Получение подтверждено" + "<br><br>");
		}
		
		document.write("</h3>");  
		document.write("</div>");

}