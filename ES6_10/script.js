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
inp.innerHTML+= string;

var time = document.querySelector('.timer');
var s1=0, m1=0;


let keyboard = document.querySelector('#keyboard');
keyboard.value = '';

let countKPS = () => {


        // setInterval(() => {
        //     time.innerHTML = `${m1}:${s1}`;
        //     s1++;
        //     if (s1%60==0) {
        //         m1++;
        //         s1=0;
        //     }
        // }, 1000);



        if(string === keyboard.value) {
            console.log('ok!');
        }


}

keyboard.addEventListener('keyup', countKPS);