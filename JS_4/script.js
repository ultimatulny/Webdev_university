var price = 0;
var last_v = []; 

function foodprice() {
    price = 0;
    Array.from(document.querySelectorAll('[name = "food"]')).forEach(function(checkbox) {
        checkbox.onchange = function() {
            if (document.myform.food[checkbox.value].checked) {
                last_v.push(checkbox.value);
                changeBg(checkbox.value);
            } else if (document.myform.food[checkbox.value].checked == false) {
                var index = last_v.indexOf(checkbox.value);
                if (index != -1) {
                    last_v.splice(index, 1);
                    if (last_v.length != 0) {
                        changeBg(last_v[last_v.length - 1]);
                    } else {
                        changeBg(7);
                    }
                }
            }

            var ch = document.getElementsByName('food'); // массив еды
            for (var i = 0; i < ch.length; i++) {
                if (document.myform.food[i].checked) price += prices[i]; // считаем ценник
            }

            showprice(price); // вписать в иннер html новое значение

        }
    })
}

var totalprice = 0;
var prices = [369, 349, 189, 179, 299, 149, 199];

function changeBg(num) {
    if (num == 0)
        document.getElementById('image').style.backgroundImage = 'url(0.jpg)';
    if (num == 1)
        document.getElementById('image').style.backgroundImage = 'url(1.jpg)';
    if (num == 2)
        document.getElementById('image').style.backgroundImage = 'url(2.jpg)';
    if (num == 3)
        document.getElementById('image').style.backgroundImage = 'url(3.jpg)';
    if (num == 4)
        document.getElementById('image').style.backgroundImage = 'url(4.jpg)';
    if (num == 5)
        document.getElementById('image').style.backgroundImage = 'url(5.jpg)';
    if (num == 6)
        document.getElementById('image').style.backgroundImage = 'url(6.jpg)';
    if (num == 7) {
        document.getElementById('image').style.backgroundImage = null;
    }
}

function showprice(x) {
    document.getElementById('output').innerHTML = x;
}

function go() {
    if (price == 0) {
        alert("Выберите еду!");
        return;
    }
    var zakaz = "";
    var ch = document.getElementsByName('food');
    for (var i = 0; i < ch.length; i++) {
        if (document.myform.food[i].checked) {
            if (i == 0) zakaz += "Фаршированная форель" + " " + prices[0] + " РУБ.\n";
            if (i == 1) zakaz += "Телятина под соусом" + " " + prices[1] + " РУБ.\n";
            if (i == 2) zakaz += "Крем-суп из шампиньонов" + " " + prices[2] + " РУБ.\n";
            if (i == 3) zakaz += "Рулет со шпинатом" + " " + prices[3] + " РУБ.\n";
            if (i == 4) zakaz += "Пицца Гавайская" + " " + prices[4] + " РУБ.\n";
            if (i == 5) zakaz += "Ванильный коктейль" + " " + prices[5] + " РУБ.\n";
            if (i == 6) zakaz += "Напиток грейпфрут" + " " + prices[6] + " РУБ.\n";
        }
    }
    alert("Ваш заказ: \n" + zakaz + "\nИтого: " + price + " РУБ.");
}

function reload() {
    price = 0;
    document.getElementById('output').innerHTML = 0;
    document.getElementById('image').style.backgroundImage = null;
}