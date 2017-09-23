// Задание 1. Вычитайте строку из input. Высчитайте ее длину. Выведите результат.
document.getElementById('rez1').onclick = function () {
    var str = document.getElementById('str').value;
    console.log('Задача №1: Длинна строки равна '+ str.length +' символов(а)');
    document.getElementById('str').value = '';
}

// Задание 2. Создайте массив, который содержит имена изображений в определенной папке.
// Запустите цикл по массиву и выведите все изображения на страницу.
// Подсказка, для вывода изображения используйте тег <img src=”xxxx”> где xxx – путь к файлу.
var imageName=['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
var div = document.getElementById('pics');

for(var i=0; i<imageName.length; i++) {
    div.innerHTML += '<img src="images/'+ imageName[i] +'" alt="">';

}

// Задание 3. Пользователь вводит URL адрес в input в формате http или https.
// Выведите только имя домена без префиксов http://, https://.
document.getElementById('short-link').onclick = function () {
    var str = document.getElementById('link').value;

    if (str.search('http://') != -1)
     console.log(str.replace('http://', ''));
    else if(str.search('https://') != -1)
     console.log(str.replace('https://', ''));
    else console.log(str);
}

// Задание 4. Пользователь может ввести адрес сайта 
// в формате http://site.ua, https://site.ua, http://www.site.ua, 
// https://www.site.ua или site.ua. 
// Ваша задача используя поиск в подстроке вывести site в виде: site.ua.
document.getElementById('domen').onclick = function () {
    var str = document.getElementById('any-link').value;

    if (str.search('http://') != -1) {
    	if(str.search('www.') != -1) console.log(str.replace('http://www.', ''));
    	else console.log(str.replace('http://', ''));
    }
    else if (str.search('https://') != -1) {
    	if(str.search('www.') != -1) console.log(str.replace('https://www.', ''));
    	else console.log(str.replace('https://', ''));	
    }
    else if (str.search('www.') != -1)
    	console.log(str.replace('www.', ''));  
    else console.log(str);
}

// Задание 5. Пользователь заполняет форму состоящую из фамилии, имени пароля и email.
// Используя приведенные методы выполните обработку формы состоящую из
// удаления пробелов до и после введённых слов, пароль не должен быть меньше 5 символов,
// email должен содержать один символ @ и не содержать пробелов.
// Если форма заполнена корректно, возвращать true.
document.getElementById('validation').onclick = function () {
    var surname = document.getElementById('surname').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    surname = surname.trim();
    name = name.trim();
    password = password.trim();
    email = email.trim();

   	if (password.length >= 5 && email.search('@') != -1 && email.search(' ') == -1)
    	console.log('Validation completed');
    else if (surname.length == 0)
    	console.log('Enter you surname');
     else if (name.length == 0)
    	console.log('Enter you name');
	else if (password.length < 5)
		console.log('Wrong password');
	else if (email.search('@') == -1 && email.search(' ') == -1)
		console.log('Wrong e-mail');
}

// Задание 6. Пользователь вводит символ, выведите его код.
document.getElementById('code').onclick = function () {
    var char = document.getElementById('char').value;

	console.log('Код символа: '+ char +' равен: &#'+ char.charCodeAt(0) +';');
	document.getElementById('char').value = '';
}