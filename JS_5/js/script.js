var curs_rub = 0.016;
var curs_euro = 1.13;
var curs_dollar = 1;
var curs_funt = 1.31;
var curs_iena = 0.0089;
var curs_uan = 0.15;
var curs_grivna = 0.037;

function go(){

	var from = bank.from.value;
	var inn = bank.in.value;
	var sum = bank.summa.value;


	var fail = false;

	if(sum == "") fail = "Введите сумму!";
	if(isNaN(sum)) fail = "Введите число!";
	if(from == inn) fail = "Вы не можете перевести валюту в саму себя(";

	if(fail){
		alert(fail);
		return false;
	}
	var val_from;
	var val_inn;

	if(from == "Рубли") val_from = curs_rub;
	if(from == "Евро") val_from = curs_euro;
	if(from == "Доллар") val_from = curs_dollar;
	if(from == "Фунт стерлингов") val_from = curs_funt;
	if(from == "Японская иена") val_from = curs_iena;
	if(from == "Китайский юань") val_from = curs_uan;
	if(from == "Украинская гривна") val_from = curs_grivna;

	if(inn == "Рубли") val_inn = curs_rub;
	if(inn == "Евро") val_inn = curs_euro;
	if(inn == "Доллар") val_inn = curs_dollar;
	if(inn == "Фунт стерлингов") val_inn = curs_funt;
	if(inn == "Японская иена") val_inn = curs_iena;
	if(inn == "Китайский юань") val_inn = curs_uan;
	if(inn == "Украинская гривна") val_inn = curs_grivna;

	var curs = val_inn / val_from;
	var look = val_from / val_inn;
	document.getElementById("input1").value = look.toFixed(2);

document.getElementById("output").innerHTML = 
	"Перевод: " + from + "-" + inn +
	" по курсу: " + look.toFixed(2) + "\n" +
	"К выдаче: " + (sum/curs).toFixed(2);

}

function check(){
	var inp2 = document.getElementById('input2');

    document.getElementById('fq').disabled = inp2.value ? false : "disabled";



}

function res(){
	document.getElementById("output").innerHTML = " ";
}