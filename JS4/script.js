// Задача 1. Напишите функцию, которая выделяет 
// все параграфы на странице красным цветом фона.

document.getElementById('fill').onclick = function() {

	var fill = document.getElementsByTagName('p');

		for(var i=0; i<fill.length; i++) {
				fill[i].style.background = 'red';
		}		
}

// Задача 2. Напишите функцию, 
// которая добавляет тень всем изображениям на странице.
document.getElementById('shadow').onclick = function() {

	var shadow = document.getElementsByTagName('img');

	for(var i=0; i<shadow.length; i++) {
				shadow[i].style.boxShadow = '0.4em 0.4em 5px rgba(122,122,122,0.5)'; 
		}		

}

// Задача 3. Напишите функцию,
// которая нумерует все абзацы страницы и добавляет номер перед текстом абзацев.

document.getElementById('number_p').onclick = function() {
	
	var numberP = document.getElementsByTagName('p');

	for (var i=0; i<numberP.length; i++) {
		var num=i+1;
		numberP[i].insertAdjacentHTML('afterBegin', num +') ');
	}
}

// Задача 4. Используя глобальную переменную напишите функцию, 
// которая будет подсчитывать количество нажатий на кнопки. 
// Кнопок – две, реализуйте их в HTML.

var count1=count2=1;
document.getElementById('number_p1').onclick = pushBtn;
document.getElementById('number_p2').onclick = pushBtn;

function pushBtn() { 
	if(this.id=='number_p1')
        document.getElementById('click1').innerHTML = 'нажата '+ count1++ +' раз(а)';
    else if (this.id=='number_p2')
    	document.getElementById('click2').innerHTML = 'нажата '+ count2++ +' раз(а)';
}

// Задача 5. Создайте функцию, которая получает два параметра – 
// число и степень числа. 
// Используя Math.Pow внутри функции,
// возведите число в степень и выведите с помощью alert.

document.getElementById('rezult').onclick = mathPow;

function mathPow() {
	var digit = document.getElementById('inp').value;
    var pow = document.getElementById('inp1').value;
	alert(Math.pow(digit,pow));	
}


// Задача 6. Создайте функцию, которая принимает один параметр – строку, 
// которая содержит тег.
// При вызове функции, она подчеркивает все элементы на странице с данным тегом. 
// Т.е. если пользователь вызвал функцию с параметром ‘p’ – то подчеркиваются абзацы.

function tagDecoration(s) {
	var element = document.getElementsByTagName(s);
	for(i=0; i<element.length; i++) {
			element[i].style.textDecoration = 'underline';
	}
}
tagDecoration('h4');

// Задача 7. Функция принимает параметр - возраст пользователя.
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.
// и
// Задача 8. Модифицируйте предыдущий пример – учтите вариант,
// если пользователь не передал параметр в функцию.
// В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined 
// и оператор ||.

function access(age) {
	if (age>16) {
		console.log('Добро пожаловать');
	}
	else if(age<=16 && age>0) {
		console.log('Вы еще молоды');
	}
	else if (age==undefined || age==0 || age<0) {
		console.log('Введите возраст');
	}
}
access(100);

// Задача 9. Создайте функцию, которая считает длину массива и возвращает
// ее в виде числа. Массив в функцию передается как аргумент. 
// Если аргумент не задан – выводится сообщение об ошибке.

var mas=[1,4,7,8,45,2,5,8,2,9];

function masLength (a) {
		if (a.length>0) {
			console.log(a.length);
		}	
		else if (a!=Array.isArray()) {
			console.log('Error');
		}
}
masLength(mas);

// Задача 10. Пользователь вводит числа. Если число больше 10, 
// то функция возвращает квадрат числа, если меньше 7 – пишет,
// что число меньше 7. Если 8, 9 – то возвращает соответственно 7 или 8. 
// Реализуйте решение с несколькими return.

document.getElementById('compare').onclick = run;


function numCompare(x) {

var inpnum = document.getElementById('inpnum');

   if (x>10) {
        return x*x;
    }

   else if (x<7) {
        return 'число меньше 7';
    }

   else if (x==8 || x==9) {
        return x;
    }
    else {
      return 0;
    }
}

function run() {
  console.log(numCompare(inpnum.value));
}

// Задача 11. Напишите игру «Угадай число». 
// При загрузке страницы генерируется случайное число от 0 до 10. 
// Пользователю дается три попытки угадать число (число вводиться в input). 
// При каждой проверке выдается подсказка: больше или меньше. При угадывании, 
// завершении числа попыток выдается оповещение. Количество попыток выводиться 
// на экран.

document.getElementById('check').onclick = guess;
var p=3;
var rand = randomInteger(0,10);
console.log('Для проверки программы задуманное число: '+ rand); 

function guess() {

var myNum = document.getElementById('randNum').value;

p--;

if (p>0) {
	if (rand<myNum) {
		alert('Ваше число больше! У вас осталось '+ p +' попыток');
	}
	else if (rand>myNum) {
		alert('Ваше число меньше! У вас осталось '+ p +' попыток');
	}
	else if (rand==myNum) {
		alert('Вы угадали! Задуманное число: '+ rand);
		location.reload();
	}
}
    else {
    	alert('Вы проиграли, у Вас закончились 3 попытки!');
     	location.reload();
    }

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return parseInt(rand);
}