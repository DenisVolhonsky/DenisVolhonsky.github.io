// Выполнить
// 1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>.
// 2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение.
// 		По нажатию “ОК” - массив выводится.
// 3.	Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 
// 4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 
// 5.	Добавьте кнопку push реализующую метод push() для введенного выше массива. Данные для записи необходимо считывать из input.
// 6.	Добавьте кнопку unshift реализующую метод unshift() для введенного выше массива. Данные для записи необходимо считывать из input. 

var mas = [2,4,5,1,12,4,3,7,19,0,25];
document.getElementById('arr').innerHTML += ' [ '+mas+ ' ]';

 
function addArray() {

	var index = document.getElementById('index').value;
	var val = document.getElementById('val').value; 
	//val = parseInt(val);

	var newElement = document.getElementById('new'); 

    mas[index]=val;
    console.log(mas);
    
   	newElement.innerHTML +=  ' [ '+mas+ ' ]';
   
} 

function popArray() {
	
	var delElement = document.getElementById('del');
	mas.pop();
	delElement.innerHTML += '[ '+mas+' ]';
	console.log(mas);
}

function shiftArray() {
	
	var delfirstElement = document.getElementById('del_first');
	mas.shift();
	delfirstElement.innerHTML += '[ '+mas+' ]';
	console.log(mas);
}

function pushArray() {
	
	var valueEnd = document.getElementById('val_end').value;
	var pushElement = document.getElementById('add_elem_end');
	mas.push(valueEnd);
	pushElement.innerHTML += '[ '+mas+' ]';
	console.log(mas);
}

function unshiftArray() {
	
	var valueFirst = document.getElementById('val_first').value;
	var unShiftElement = document.getElementById('add_elem_first');
	mas.unshift(valueFirst);
	unShiftElement.innerHTML += '[ '+mas+' ]';
	console.log(mas);
}

document.getElementById('add_element').onclick = addArray;
document.getElementById('pop').onclick = popArray;
document.getElementById('shift').onclick = shiftArray;
document.getElementById('push').onclick = pushArray;
document.getElementById('unshift').onclick = unshiftArray;


