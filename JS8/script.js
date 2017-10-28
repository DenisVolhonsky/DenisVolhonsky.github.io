// jQuery
// Задание. Разработайте скрипт, который получает из input введенный url адрес. Адрес обрабатывается таким образом, что введенные имена приводятся к виду:
//     Ввели
// •	http://primer.ua
//     •	http://www.primer.ua
//     •	https://primer.ua
//     Получили: primer (удаляются протоколы и локальные зоны)
// Затем введенная строка обрабатывается по правилам:
//     •	все символы о или О заменяются на 0 (нуль)
// •	l заменяются на единицу (символ эль на единицу)
// •	все символы «i» заменяются на 3
// •	все буквы s заменяются на 5
// •	к результирующей строке добавляется случайный набор из 4-х символов.
//     Результат – выводится на экран.

$(document).ready(function () {
    $('#result').on('click', changeUrl);
});

function randChar() {
    var words  = '0123456789qwertyuiopasdfghjklzxcvbnm';
    var end = '';
    var numberSign;
    var max_position = words.length - 1;
    for(var i=0; i<4; i++) {
        numberSign = Math.floor(Math.random()*max_position);
        end = end.concat(words[numberSign]);
    }
    return end;
}

function changeUrl() {
    var url = $('#url').val();

    url = url.trim(); // обрезали пробелы

    url = url.replace('https://', '');
    url = url.replace('http://www.', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');

    if(url.charAt(url.length - 3) == '.') {
        url = url.slice(0,-3);
    }
    if(url.charAt(url.length - 4) == '.') {
        url = url.slice(0,-4);
    }

    url = url.replace('o', '0');
    url = url.replace('O', '0');
    url = url.replace('l', '1');
    url = url.replace('i', '3');
    url = url.replace('s', '5');

    url = url.concat(randChar());

    $('#out').text('Результат: '+ url);
}

