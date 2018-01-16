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
const tBody = document.querySelector('#js-tbody');
const htmlTpl = document.querySelector('#table').textContent.trim(); // this is script
const compiled = _.template(htmlTpl);

const updateView = users => {
    let htmlString = "";

    users.forEach(user => {
        htmlString += compiled(user);
    });

    tBody.innerHTML = htmlString;
};

const getUser = () =>
    fetch("http://fecore.net.ua/rest/")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error");
        })
        .then(data => {
            updateView(data);
        })
        .catch(error => {
            console.error("Error: ", error);
        });

btnUser.addEventListener("click", getUser);





// let getUsers = () => {}
// let addUser = () => {}
// let removeUser = (id) => {}
// let updateUser = (id) => {}





