function paper_f(){

	var format = paperprice.format.value;
	var paper = paperprice.paper.value;
	var kolvo = paperprice.copies_input.value;
	var flag = false;
	var price = 0;
	var photo_price = 0;

	if(format == "") flag = "Укажите формат!";
		if (paper == "") flag = "Укажите бумагу!"; 
			if(kolvo == "") flag = "Укажите кол-во!";
			if(isNaN(kolvo)) flag = "Укажите число, а не свои символы!";
	
	if(flag){
		alert(flag);
		return 0;
	}

	if(format == "9x12"){
		if(paper == "матовая"){
			photo_price = 8.5;
			price = photo_price * kolvo;
		}
		else{
			photo_price = 10;
			price = photo_price * kolvo;
		}
	}
	else if(format == "10x15"){
		if(paper == "матовая"){
			photo_price = 10;
			price = photo_price * kolvo;
		}
		else{
			photo_price = 11.5;
			price = photo_price * kolvo;
		}
	}
	else if(format == "18x24"){
		if(paper == "матовая"){
			photo_price = 15.5;
			price = photo_price * kolvo;
		}
		else{
			photo_price = 17;
			price = photo_price * kolvo;
		}
	}

	document.getElementById("out_area").innerHTML = 
	"Цена фотографии: " + photo_price + "р\n" +
	"Количество: " + kolvo + "шт\n" +
	"Сумма заказа: " + price + "р";


}