var kolvo;

function create(){
	document.getElementById("min_el_box").value = " ";
	document.getElementById('min_el_check').checked = false;

	document.getElementById("max_el_box").value = " ";
	document.getElementById('max_el_check').checked = false;

	document.getElementById("sum_el_box").value = " ";
	document.getElementById('sum_el_check').checked = false;

	document.getElementById("otric_el_box").value = " ";
	document.getElementById('otric_el_check').checked = false;

	document.getElementById("neotric_el_box").value = " ";
	document.getElementById('neotric_el_check').checked = false;

	document.getElementById("outmass").value = " ";

	var flag = false;
    kolvo = mymass.kolvo.value; // Кол-во элементов в новом массиве

	if(!isInt(kolvo)) flag = "Введите целое число!";
	if(kolvo < 1) flag = "Введите число больше нуля!";
	if((kolvo == "") || (kolvo == " ")) flag = "Введите число элементов!";
	if(isNaN(kolvo)) flag = "Введите число!";
	if(flag){
		alert(flag);
		return 0;
	}

    massive = new Array(kolvo);
    massive_copy = new Array(kolvo);

	for (i = 0; i < kolvo; i++ ) {
		var a = Math.round( Math.random() * 200 ) - 100;
		massive[i] = a;
	}

	for (i = 0; i < kolvo; i++ ) {
		massive_copy[i] = massive[i];
	}

	document.getElementById("output_current").value = massive;
}

function isInt(n) {
   return n % 1 === 0;
}

function sortmass(){
	var flag = false;
	if(isNaN(kolvo)) flag = "Создайте массив!";
	if(flag){
		alert(flag);
		return 0;
	}

	if(document.getElementById('min_el_check').checked==true) find_min();
	if(document.getElementById('max_el_check').checked==true) find_max();
	if(document.getElementById('sum_el_check').checked==true) summ_mass();
	if(document.getElementById('otric_el_check').checked==true) kolvo_otric();
	if(document.getElementById('neotric_el_check').checked==true) kolvo_neotric();

	var whatissort =document.getElementsByName("sort");

	if(whatissort[0].checked) sort_to_high();
	if(whatissort[1].checked) sort_to_low();
	if(whatissort[2].checked) document.getElementById("outmass").value = massive_copy;

}

function find_min(){
	var min = massive[0];
	for(var i in massive){
		if(massive[i] < min) min = massive[i];
	}
	document.getElementById("min_el_box").value = min;
}

function find_max(){
	var max = massive[0];
	for(var i in massive){
		if(massive[i] > max) max = massive[i];
	}
	document.getElementById("max_el_box").value = max;
}

function summ_mass(){
	var sum = 0;
	for(var i in massive){
		sum += massive[i]
	}
	document.getElementById("sum_el_box").value = sum;
}

function kolvo_otric(){
	var kolvo_otric = 0;
	for(var i in massive){
		if (massive[i] < 0) kolvo_otric++;
	}
	document.getElementById("otric_el_box").value = kolvo_otric;
}

function kolvo_neotric(){
	var kolvo_neotric = 0;
	for(var i in massive){
		if (massive[i] >= 0) kolvo_neotric++;
	}
	document.getElementById("neotric_el_box").value = kolvo_neotric;
}

function sort_to_low(){
	var t = 0;
	var n = massive.length;
	
    for (var i = 0; i < n-1; i++){
    	for (var j = 0; j < n-1-i; j++){
     	if (massive[j+1] > massive[j]){ 
        	var t = massive[j+1]; 
        	massive[j+1] = massive[j]; 
        	massive[j] = t; 
        }
    }
}  
	document.getElementById("outmass").value = massive;
}

function sort_to_high(){
	var t = 0;
	var n = massive.length;

    for (var i = 0; i < n-1; i++){
    	for (var j = 0; j < n-1-i; j++){
     	if (massive[j+1] < massive[j]){ 
        	var t = massive[j+1]; 
        	massive[j+1] = massive[j]; 
        	massive[j] = t; 
        }
    }
}  
	document.getElementById("outmass").value = massive;
}