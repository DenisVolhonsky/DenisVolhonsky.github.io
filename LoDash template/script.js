const menuData = { // объект данных
    title: 'Eat it createElement, templates rule!',
    items: ['LoDash', 'Handlebars', 'Pug', 'EJS']
};

const html = document.querySelector('#menu').textContent.trim();

const compiled = _.template(html);

// Создадим переменную result, в которую запишем результат работы функции-шаблона compiled
const result = compiled(menuData);

console.log(result); // магия
//  Пример выше похож на операцию «поиск-и-замена»: шаблон просто заменил <%-title%> на значение свойства menuData.title . После чего в результат попал сначала текст <ul>, потом выполнился код forEach, который последовательно сгенерировал элементы списка, и затем список был закрыт </ul>.


// В js файле выберем контейнер по id, после чего используя свойство innerHTML присвоим туда нашу строку.
const container = document.querySelector('#menu-container');
container.innerHTML = result;


// /*
//   Написать скрипт который собирает 3 строки клавиатуры
//   и клавишу "пробел" из шаблона по заданому объекту.
//
//   Для зарендереной клавиатуры реализовать поведение из
//   модуля 8, подсветка нажатой клавиши, отображение символа итд.
// */
//
// const lang = {
//     en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
// };