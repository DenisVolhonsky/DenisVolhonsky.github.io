/*

  Напишите функцию validate которая проверяет все поля формы
  и возвращает результат в виде обьекта со свойствами firstname,
  lastname и tel.

  Кроме того, формат объекта: в свойства записывается буль-флаг
  уведомляющий о статусе прохождения валидации для поля.

  При клике на кнопку submit должна происходить проверка.

  Визуализировать результат проверки.
    Написать функцию showResults(results), которая принимает
    один аргумент results - объект такого формата который возвращает
    функция validate, и создает html разметку по результатам
    этого объекта.

    showResults добавляет в список с классом .results
    (уже есть в html), li для каждого поля формы. В li записать:
    SUCCESS: 'имя поля' passed validation
    ERROR: 'имя поля' failed validation

    Для li с положительным результатом дать класс success,
    с отрицательным error.
*/
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");


let validate=()=> {

    const regFirstName= /^[A-Z][a-z]{1,20}$/;
    const regLastName= /^[A-Z][a-z]{1,20}$/;
    const regTel= /^\+?3?8?0{1}[1-9]{1}[0-9]{8}$/;
    let data = {
        firstname: regFirstName.test(firstName.value),
        lastname: regLastName.test(lastName.value),
        phone: regTel.test(tel.value)
    }
    return data;
}

let showResults= results => {
    for(let data in results){
        console.log(results[data]);
        if(results[data] === true) {
            resultsList.innerHTML+= `<li class="success">SUCCESS: ${data} passed validation</li>`;
        }
        else {
            resultsList.innerHTML+= `<li class="error">ERROR: ${data} failed validation</li>`;
        }
    }
}

submitBtn.addEventListener("click", ()=>showResults(validate()));
