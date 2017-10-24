// Задание 1. Добавьте на страницу элемент input[type=»text»].
// Справа от input расположите кнопку «+». При нажатии кнопки «+» добавьте еще один элемент input ниже.
// Возле появившегося элемента создайте кнопку «-» при нажатии на которую данный input будет удаляться.
// Внизу формы расположите кнопку «собрать», по нажатию которой текст из элементов input будет выведен
// в расположенный на странице textarea. 
// Внимание: Количество input на странице не больше 5.
// Удалять можно все элементы input кроме последнего.

// Задание 2. Модифицируйте задание 1, добавив три input[type=»radio»].
// В опциях первого укажите «Четные», у второго — «Нечетные», у третьего — «Все».
// В зависимости от выбранной опции, информация считывается соответственно из четных,
// нечетных или всех input на странице. По умолчанию выбран последний radiobutton.

// Задание 3. Модифицируйте задание 1 добавив проверку на пустые input.
// Пустой input подсвечивается красным цветом,
// а рядом выводится надпись «Заполните поле!».

var countFields = 0;

document.onclick = function(event) {
    event=event||window.event;
    var parent = document.querySelector('.form1');
    var inputArr = document.querySelectorAll('.form1 input');
    var pArr = document.querySelectorAll('.form1 p');
    var textArea = document.getElementById('output');
    var radioBtn = document.getElementsByName('option');
    var first = document.getElementById('first').value;

    if(event.target.id === 'add') {
        var newP = document.createElement('p');
        parent.appendChild(newP);
        var newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        var newButton = document.createElement('button');
        newButton.classList.add('del');
        newButton.innerHTML = '-';
        parent.appendChild(newInput);
        parent.appendChild(newButton);

        for (var i = 0; i < inputArr.length; i++) {
             if(inputArr[i].value == ''){
                 inputArr[i].style.backgroundColor='#ffc8b2';
                 //pArr[i].classList.remove('error');
             }
             else {
                 inputArr[i].style.backgroundColor= 'white';
                 //pArr[i].classList.add('error');
             }
        }
        countFields++;
    }
    if (event.target.className === 'del') {
        event.target.previousElementSibling.remove();
        event.target.remove();
        countFields--;
    }
    if (event.target.id === 'collect') {
        for (var i = 0; i < inputArr.length; i++) {
            if (radioBtn[0].checked) {
                if (i % 2 == 1) textArea.innerHTML += inputArr[i].value;
            }
            if (radioBtn[1].checked) {
                if (i % 2 == 0) textArea.innerHTML += inputArr[i].value;
            }
            if (radioBtn[2].checked) textArea.innerHTML += inputArr[i].value;
            if(inputArr[i].value == '') {
                inputArr[i].style.backgroundColor='#ffc8b2';
            }
            if(inputArr[i].value != '') {
                inputArr[i].style.backgroundColor='white';
            }
        }
    }
    if (event.target.id === 'erase') {
        textArea.innerHTML = '';
    }
    if (countFields >= 4) {
        document.getElementById('add').disabled = true;
    }
    else if(countFields < 4 && countFields!=0) {
        document.getElementById('add').disabled = false;
    }
   // console.log(countFields);

// Задание 5. Дан список из элементов. Реализуйте скрипт,
// который отслеживает клик на элементе списка и подсвечивает его красным цветом.
// При повторном клике, цвет убирается. Добавьте Input, который позволяет добавлять элементы в список.
// На них также, распостраняется событие click.

        //// закрашиваем красным///
        if(event.target.parentElement.id == 'task5' && event.target.className != 'newEl') {
        event.target.classList.toggle('switch');
        }
        //// добавляем новый елемент///
        if(event.target.id == 'addElem') {
            var inpElem = document.getElementById('inpElem').value;
            var newinpElem = document.createElement(inpElem);
            var outElem = event.target.parentElement.appendChild(newinpElem);
            outElem.innerHTML='Элемент';
        }
}

// Задание 4. Реализуйте по нажатию на кнопке всплывающее окно с двумя кнопками.
// Первая кнопка «Опция ., вторая кнопка «Опция .. По нажатию на кнопку окно закрывается,
// а на странице выводится надпись «Вы выбрали опцию …» и номер выбранной опции.

document.getElementById('popup').onclick = popUp;
var message = document.createElement('p');

function popUp() {
    document.getElementById('task4').appendChild(message);  // добавляем p
    newWin = window.open("about:blank", "pop-up", "top=0,left=-1500,height=100, width=220");
    var option1 = document.createElement('button');
    var option2 = document.createElement('button');
    option1.innerHTML = 'Опция 1';
    option2.innerHTML = 'Опция 2';
    option1.classList.add('btnclose1');
    option2.classList.add('btnclose2');
    newWin.document.body.appendChild(option1);
    newWin.document.body.appendChild(option2);
    option1.style.margin = '10px';
    option2.style.margin = '10px';
    newWin.document.body.style.background = 'gold';

    newWin.document.onclick = function (event) {
        event = event || window.event;
        if (event.target.className == 'btnclose1') {
            newWin.close();
            message.innerHTML = 'Вы выбрали опцию 1';
        }
        else if (event.target.className == 'btnclose2') {
            newWin.close();
            message.innerHTML = 'Вы выбрали опцию 2';
        }
    }
}

// Задание 6. Дан блок с изображением. При наведении мыши,
// на блок, открывается текстовый блок с черным фоном, прозрачность фона ..
// Направление раскрытия — с правой части родителя. 
// Если мышь убрана — то блок закрывается с задержкой по времени.
var textblock = document.querySelector('#text-block');

document.querySelector('.img').onmouseenter = function () {
    textblock.style.transition = 1 +'s';
    textblock.style.left = 0 +'px';
}

document.querySelector('.img').onmouseleave = function () {
    setTimeout(function(){
        textblock.style.transition = 1 +'s';
        textblock.style.left = 280 +'px';
    }, 1000);
}
// Задание 7. Реализуйте скрипт, который при наведении мыши на
// элементы (изображение или гиперссылка), будет внизу страницы показывать блок,
// в котором указан адрес изображения, и атрибут alt, если это изображение
// и адрес ссылки и атрибут title и target, если это гиперссылка.
// При отсуствии атрибутов — выводится красным предупреждение.

document.onmouseover = function(event) {
    event=event||window.event;
    var info = document.getElementById('info');

    if(event.target.className == 'cars') {
        info.classList.add('info');
        var src = event.target.getAttribute('src');
        var alt = event.target.getAttribute('alt');
        info.innerHTML = '<b>Адрес изображения: </b>'+ src +'<br><b>Имя изображения: </b>'+ alt;
        if (!event.target.hasAttribute('alt')) {
            info.style.background = 'red';
            info.innerHTML = '<b>Адрес изображения: </b>'+ src +'<br><b>Имя изображения:</b> неизвестно';
        }
    }
    else if (event.target.className == 'weather'){
        info.classList.add('info');
        var hrefAttr = event.target.getAttribute('href');
        var titleAttr = event.target.getAttribute('title');
        var targetAttr = event.target.getAttribute('target');
        info.innerHTML = '<b>Адрес ссылки: </b>'+ hrefAttr +'<br> <b>Название: </b>'+ titleAttr +'<br> <b>В каком окне: </b>'+ targetAttr;
    }
    else {
        //console.log(event.target);
        info.innerHTML = '';
        info.classList.remove('info');
        info.style.background = 'gold';
    }
}

// Задание 8. Модифицируйте скрипт из задачи 7 таким образом,
// чтобы те изображения, которые не имеют атрибут alt, подсвечивались красным цветом.

// Задание 9. Создайте скрипт для проверки наличия на странице элементов h1-h6
// выводя при этом их количество. Если какого-либо заголовка нет — вывести предупреждение.

// Задание 10.. Модифицируйте скрипт 9 таким образом, чтобы он определял наличие meta title,
// meta description, meta keywords, рассчитывая длину первых двух.
// Если они отсутсвуют — выводится предупреждение.