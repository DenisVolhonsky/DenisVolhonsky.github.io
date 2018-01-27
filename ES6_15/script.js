// Создать две кнопки в HTML: start и stop.
//     Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
//     При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
//     При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
//     При нажатии на stop, значение interval выводится в консоль.

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const firstTime = document.querySelector('#start-time');
const stopTime = document.querySelector('#stop-time');
const newYear = document.querySelector('#new-year');

class Timer {
    constructor() {
        this.startTime = '';
        this.stopTime = '';
        this.interval = ''; // вывод в консоль
    }
    start() {
        stopWatch.startTime = new Date();
        firstTime.innerHTML=`${stopWatch.startTime.getHours()}:${stopWatch.startTime.getMinutes()}:${stopWatch.startTime.getSeconds()}`;
        //console.log(stopWatch.startTime);
    }
    stop() {
        stopWatch.stopTime = new Date();
        //console.log(stopWatch.stopTime);
        stopTime.innerHTML=`${stopWatch.stopTime.getHours()}:${stopWatch.stopTime.getMinutes()}:${stopWatch.stopTime.getSeconds()}`;
        stopWatch.interval=((stopWatch.stopTime-stopWatch.startTime)/1000).toFixed(1);
    }
    getTime(){
        console.log(`Интервал равен: ${stopWatch.interval} cек.`);
    }
    static timeToNY() {
        const today = +new Date();
        const dateNY = +new Date(2019, 0, 1);
        let untilNY = Math.round((dateNY-today)/8.64E+7);
        console.log(`До Нового Года осталось: ${untilNY} дней`);
    }
}

stopWatch = new Timer(); // экземпляр класса - объект

startBtn.addEventListener('click', stopWatch.start);
stopBtn.addEventListener('click', stopWatch.stop);
stopBtn.addEventListener('click', stopWatch.getTime);
newYear.addEventListener('click', Timer.timeToNY);

