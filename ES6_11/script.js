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
const btnAdd = document.querySelector('#add-user');
const btnRemove = document.querySelector('#remove');
const btnRefresh = document.querySelector('#refresh');

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

btnUser.addEventListener('click', getUser);


let addUser = () => {
    const addName = document.querySelector('#add-name').value;
    const addScore = document.querySelector('#add-score').value;
    const url = `http://fecore.net.ua/rest/?action=1&name=${addName}&score=${addScore}`;

    fetch(url)
        .catch(error => {
            console.error("Error: ", error);
        });
    document.querySelector('#add-name').value = '';
    document.querySelector('#add-score').value = '';
}

btnAdd.addEventListener('click', addUser);
btnAdd.addEventListener('click', getUser);

let removeUser = () => {
    let removeID = document.querySelector('#remove-id').value;
    const url = `http://fecore.net.ua/rest/?action=3&id=${removeID}`;

    fetch(url)
        .catch(error => {
            console.error("Error: ", error);
        });

    document.querySelector('#remove-id').value = '';
}

btnRemove.addEventListener('click', removeUser);
btnRemove.addEventListener('click', getUser);


let updateUser = () => {
    const refreshID = document.querySelector('#refresh-id').value;
    const refreshName = document.querySelector('#refresh-name').value;
    const refreshScore = document.querySelector('#refresh-score').value;
    const url = `http://fecore.net.ua/rest/?action=2&id=${refreshID}&name=${refreshName}&score=${refreshScore}`;

    fetch(url)
        .catch(error => {
            console.error("Error: ", error);
        });
    document.querySelector('#refresh-id').value = '';
    document.querySelector('#refresh-name').value = '';
    document.querySelector('#refresh-score').value = '';
}

btnRefresh.addEventListener('click', updateUser);
btnRefresh.addEventListener('click', getUser);



