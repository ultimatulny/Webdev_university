function go(){

	var from = bank.from.value;
	var curs = bank.curs.value;
	var inn = bank.in.value;
	var sum = bank.summa.value;


	var fail = false;

	if(curs == "") fail = "Введите курс!";
	if(sum == "") fail = "Введите сумму!";
	if(isNaN(curs)) fail = "Введите число!";
	if(isNaN(sum)) fail = "Введите число!";
	if(from == inn) fail = "Вы не можете перевести валюту в саму себя(";

	if(fail){
		alert(fail);
		return false;
	}

document.getElementById("output").innerHTML = 
	"Перевод: " + from + "-" + inn +
	" по курсу: " + curs + "\n" +
	"К выдаче: " + (sum/curs).toFixed(2);

}

function check(){
	var inp1 = document.getElementById('input1'),
        inp2 = document.getElementById('input2');

    document.getElementById('fq').disabled = inp1.value && inp2.value ? false : "disabled";

}

function reset(){
	document.getElementById("output").innerHTML = " ";
}