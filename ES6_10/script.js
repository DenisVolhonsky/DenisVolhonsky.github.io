/*
  Создать компонент счетчика времени.

  Простой прямоугольник который показывает время
  со старта упражения и до того момента когда все
  клавиши были верно нажаты.

  На входе есть строка символов для упражнения.

  Написать метод countKPS() который,по окончанию упражнения,
  возвращает кол-во верных клавишь в секунду которое было нажато за
  время выполнения упражнения.

  Записать результат в localStorage, но только в том случае если
  он лучше чем тот что уже есть в localStorage.

  При повторном посещении страницы надо брать то что записано
  в localStorage и вешать на страницу, это будет компонент
  лучшего результата.
*/

// дается строка и от первого нажатия до посленего
// правильного набранного знака считать время

const string = "qwerty";
const charsArr = string.split("").reverse();
const timerOutput = document.querySelector(".timer");
const inp= document.querySelector('#string');
let time = document.querySelector('.timer');
let keyboard = document.querySelector('#keyboard');
let result = document.querySelector('#result');

let seconds=0, minutes=0;
inp.innerHTML+= string;
keyboard.value = '';

let countKPS = (timerID) => {

    if (keyboard.value.length === 1) {
            timerID = setInterval(() => {
            time.innerHTML = `${minutes}:${seconds}`;
            seconds++;
            if(minutes == 60 || string === keyboard.value) {
                clearInterval(timerID);
                console.log('ok!');
                result.innerText += `${minutes} минут ${seconds-1} сек.`;
            }
            else if(seconds%60 == 0) {
                minutes++;
                seconds=0;
            }
        }, 1000);

    document.querySelector('#reset').onclick= function() {

        clearInterval(timerID);

    }
    }
}


keyboard.addEventListener('keyup', countKPS);



