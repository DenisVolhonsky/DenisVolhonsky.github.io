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
document.querySelector('#string').innerHTML = string;

let time = document.querySelector('.timer');
let keyboard = document.querySelector('#keyboard');
let result = document.querySelector('#result');
let seconds=0, minutes=0, milisec=0;
let keySec;

let countKPS = () => {
    if (keyboard.value.length === 1) {
        let timerID = setInterval(() => {
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

                let totalSec = (((minutes*600)+((seconds)*10)+(milisec-1))/10).toFixed(1);
                keySec = (string.length/totalSec).toFixed(1);
                result.innerText = `Ваш результат: ${keySec} клав/сек.`;

                    if(keySec > localStorage.getItem('rez')) { //получаем начальное null, потом предыдущее знач
                        localStorage.setItem('rez', keySec);   // устанавливаем
                    }
            }
        }, 100);
    }
}

keyboard.addEventListener('keyup', countKPS);
document.querySelector('#reset').onclick = () => location.reload();

if (localStorage.getItem('rez')!==null)
document.querySelector('#record').innerText = `Рекорд: ${localStorage.getItem('rez')}`;
else document.querySelector('#record').innerText = `Рекорд: `;