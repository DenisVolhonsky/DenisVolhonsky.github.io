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
const timerOutput = document.querySelector(".timer");
const inp= document.querySelector('#string');
let time = document.querySelector('.timer');
let keyboard = document.querySelector('#keyboard');
let result = document.querySelector('#result');

let seconds=0, minutes=0, milisec=0;
inp.innerHTML+= string;
keyboard.value = '';
let timerID;
let keySec;
let tolalSec;

let countKPS = () => {

    if (keyboard.value.length === 1) {
            timerID = setInterval(() => {
            time.innerHTML = `0${minutes}:0${seconds}:${milisec}`;
            if(seconds>9) time.innerHTML = `0${minutes}:${seconds}:${milisec}`;
            milisec++;
            if (milisec%10 == 0) {
                seconds++;
                milisec=0;
                if(seconds%60 == 0) {
                    minutes++;
                    seconds=0;
                }
            }
            if(string === keyboard.value || minutes === 5) {
                clearInterval(timerID);

                totalSec = (((minutes*600)+((seconds)*10)+(milisec-1))/10).toFixed(1);
                keySec = (string.length/totalSec).toFixed(1);
                result.innerText = `Ваш результат: ${keySec} клав/сек.`;

                console.log(`Время: ${totalSec} сек`);
                console.log(`Скорость: ${keySec} клав/сек`);
            }
        }, 100);
    }

}

document.querySelector('#reset').onclick = () => location.reload();

keyboard.addEventListener('keyup', countKPS);



//
// localStorage.setItem('record',speed);
// const newRec = localStorage.getItem('record');
// if(newRec > speed) {
//     localStorage.setItem('record',speed);
//     document.querySelector('#record').innerText = `Рекорд: ${newRec}`;
// }