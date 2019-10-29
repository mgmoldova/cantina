var menu = {
	"Varza" : {n: 0, price: 3.68},
    "Cezar" : {n: 0, price: 10.35},
    "Shopschi" : {n: 0, price: 8.88},
    "salat4" : {n: 0, price: 15},
	"pervoe1" : {n: 0, price: 5},
	"pervoe2" : {n: 0, price: 2},
};

var total = 0;
var number = 0;

function sum() {
    total = 0;
	number = 0;
    for (var key in menu) {
        console.log(menu[key]);
        if(menu[key]["n"]!=0) {
            total+=menu[key]["n"]*menu[key]["price"];
			number += menu[key]["n"];
        }
    }
    console.log(total);
}

function del(key) {
    //console.log("del button pressed", key);
    
	if(menu[key]["n"] !=0) {
		menu[key]["n"] -=1;
	}
	update();
}

function add(key) {
	//console.log("del button pressed", key);
	menu[key]["n"] +=1;
	update();
}
function update() {
    var text = "<div style='display:;' id='cardBlock' class='menuBar'><table class='tbl-header' border='1'><caption>Выбранное:</caption> \
    <tr> \
    <th>Блюдо</th>  \
    <th>Кол-во</th> \
    <th>Цена</th> \
    </tr>";


    for (item in menu) {
        if (menu[item]["n"] == 0) continue;
        text += `<tr><td>${item}</td><td>${menu[item]["price"]}</td><td><button onclick="del('${item}')">[<]</button> ${menu[item]["n"]} <button onclick="add('${item}')">[>]</button></td></tr>`;
    }
    sum();
    text += '<tfoot class="tfootDeco"><tr><th id="total" colspan="2">Общая стоимость: </th><td>' + total.toFixed(2) + ' lei.</td></tr></tfoot>';
    document.getElementById("final").innerHTML = text + "</table></div>";
	document.getElementById("cartsum").innerHTML = 'Итог:&nbsp; ' + total.toFixed(2) + '&nbsp;';
    document.getElementById("ElemNumb").innerHTML = number;
	AddedToCard();
}

function buy(item) {
    menu[item]["n"] += 1;  
    console.log(menu);
    console.log("Buing " + item);
    update();
}


 function showHide(cardBlock) {
                //Если элемент с id-шником element_id существует
                if (document.getElementById(cardBlock)) { 
                    //Записываем ссылку на элемент в переменную obj
                    var obj = document.getElementById(cardBlock); 
                    //Если css-свойство display не block, то: 
                    if (obj.style.display != "block") { 
                        obj.style.display = "block"; //Показываем элемент
                    }
                    else obj.style.display = "none"; //Скрываем элемент
                }
                //Если элемент с id-шником element_id не найден, то выводим сообщение
                else alert("На данный момент корзина пустая!"); 
            }   

function AddedToCard()
{
var buy1t = menu["Varza"]["n"];
document.getElementById("buy1").innerHTML="Добавлено: " + buy1t;

var buy2t = menu["Cezar"]["n"];
document.getElementById("buy2").innerHTML="Добавлено: " + buy2t;

var buy3t = menu["Shopschi"]["n"];
document.getElementById("buy3").innerHTML="Добавлено: " + buy3t;
}

/*
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
       // if(text == "Add to Cart") {
            alert(target.innerHTML);
       //}   
}, false);

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
//}*/



