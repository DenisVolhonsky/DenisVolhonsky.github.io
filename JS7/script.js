// Задание 1. Добавьте на страницу элемент input[type=»text»].
// Справа от input расположите кнопку «+». При нажатии кнопки «+» добавьте еще один элемент input ниже.
// Возле появившегося элемента создайте кнопку «-» при нажатии на которую данный input будет удаляться.
// Внизу формы расположите кнопку «собрать», по нажатию которой текст из элементов input будет выведен
// в расположенный на странице textarea. 
// Внимание: Количество input на странице не больше.
// Удалять можно все элементы input кроме последнего.
document.fields.add_field.onclick = function(e) {	
	console.log(count);
	var p = document.createElement('p');
  	p.innerHTML = '<input type="text"><button type="button" class="minus"> - </button>';
  	new_field.appendChild(p);
}

// document.fields.add_field.onclick = function(e) {	
// 	console.log(count);
// 	var p = document.createElement('p');
//   	p.innerHTML = '<input type="text"><button type="button" class="minus"> - </button>';
//   	new_field.appendChild(p);
// }


//console.log(document.forms[0].elements[2]);
// Задание 2. Модифицируйте задание 1, добавив три input[type=»radio»].
// В опциях первого укажите «Четные», у второго — «Нечетные», у третьего — «Все».
// В зависимости от выбранной опции, информация считывается соответственно из четных,
// нечетных или всех input на странице. По умолчанию выбран последний radiobutton.

// Задание 3. Модифицируйте задание 1 добавив проверку на пустые input.
// Пустой input подсвечивается красным цветом,
// а рядом выводится надпись «Заполните поле!».

// Задание 4. Реализуйте по нажатию на кнопке всплывающее окно с двумя кнопками.
// Первая кнопка «Опция ., вторая кнопка «Опция .. По нажатию на кнопку окно закрывается,
// а на странице выводится надпись «Вы выбрали опцию …» и номер выбранной опции.

// Задание 5. Дан список из элементов. Реализуйте скрипт,
// который отслеживает клик на элементе списка и подсвечивает его красным цветом.
// При повторном клике, цвет убирается. Добавьте Input, который позволяет добавлять элементы в список. 
// На них также, распостраняется событие click.

// Задание 6. Дан блок с изображением. При наведении мыши,
// на блок, открывается текстовый блок с черным фоном, прозрачность фона ..
// Направление раскрытия — с правой части родителя. 
// Если мышь убрана — то блок закрывается с задержкой по времени.

// Задание 7. Реализуйте скрипт, который при наведении мыши на
// элементы (изображение или гиперссылка), будет внизу страницы показывать блок,
// в котором указан адрес изображения, и атрибут alt, 
// если это изображение и адрес ссылки и атрибут title и target, если это гиперссылка.
// При отсуствии атрибутов — выводится красным предупреждение.

// Задание 8. Модифицируйте скрипт из задачи 7 таким образом,
// чтобы те изображения, которые не имеют атрибут alt, подсвечивались красным цветом.

// Задание 9. Создайте скрипт для проверки наличия на странице элементов h1-h6
// выводя при этом их количество. Если какого-либо заголовка нет — вывести предупреждение.

// Задание 10.. Модифицируйте скрипт 9 таким образом, чтобы он определял наличие meta title,
// meta description, meta keywords, рассчитывая длину первых двух.
// Если они отсутсвуют — выводится предупреждение.