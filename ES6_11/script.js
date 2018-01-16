// Модуль 11 - Домашнее задание
// Написать приложение для работы с REST сервисом http://fecore.net.ua/rest/, реализовать следующий функционал:
//     функция getUsers должна получать текущий список всех пользователей в БД.
//     функция addUser должна записывать в БД юзера с полями name и score.
//     функция removeUser должна удалять из БД юзера по id.
//     функция updateUser должна обновлять данные пользователя по id.
//     Сделать минимальный графический интерфейс в виде панели с полями и кнопками,
//     а так же панелью для вывода результатов операций с REST сервисом.

// globals
const btnUser = document.querySelector('#user');
const tbody = document.querySelector('#js-tbody');
const htmlTpl = document.querySelector('#table').textContent.trim(); // this is script
const compiled = _.template(htmlTpl);


// let addUser = () => {}
// let removeUser = (id) => {}
// let updateUser = (id) => {}





