// Создать две кнопки в HTML: start и stop.
//     Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
//     При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
//     При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
//     При нажатии на stop, значение interval выводится в консоль.

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const firstTime = document.querySelector('#start-time');
const stopTime = document.querySelector('#stop-time');

// function Timer() {
//     this.startTime = '';
//     this.stopTime = '';
//     this.interval= ''; // вывод в консоль
// }
//
// Timer.prototype.start =()=>{
//     timer.startTime = new Date();
//     firstTime.innerHTML=`${timer.startTime.getHours()}:${timer.startTime.getMinutes()}:${timer.startTime.getSeconds()}`;
// }
//
// Timer.prototype.stop =()=> {
//     timer.stopTime = new Date();
//     stopTime.innerHTML=`${timer.stopTime.getHours()}:${timer.stopTime.getMinutes()}:${timer.stopTime.getSeconds()}`;
//     timer.interval=((timer.stopTime-timer.startTime)/1000).toFixed(1);
//     console.log(`Интервал равен: ${timer.interval} cек.`);
// }
//
// let timer = new Timer();
//
// startBtn.addEventListener('click', timer.start);
// stopBtn.addEventListener('click', timer.stop);

// Модуль 15 - Домашнее задание
//     Создать две кнопки в HTML: start и stop.
//     Создать класс Timer с полями startTime, stopTime и interval.
//     Создать несколько экземпляров класса с разными значениями свойств, вывести их в консоль.

//     Для класса Timer создать методы start и stop, getTime.
//     Создать экземпляр класса Timer, пусть он называется stopwatch.
//     При нажатии на кнопку start, метод stopwatch.start сохраняет момент
//     нажатия в свойство startTime.
//     При нажатии на кнопку stop, метод stopwatch.stop сохраняет значение текущего момента
//     времени в stopTime и записывает разницу между startTime и stopTime в interval.
//     А метод stopwatch.getTime возвращает значение поля interval, которое необходимо вывести в консоль.
//     Для класса Timer создать статический метод timeToNY который возвращает кол-во дней от сегодня и до Нового Года.


class Timer {
    constructor() {
        this.startTime = 1;
        this.stopTime = 2;
        this.interval = 3; // вывод в консоль
    }
    start() {
        console.log('start');
    }
    stop() {
        console.log('stop');
    }
    getTime(){
        console.log('getTime');
    }

}

timer1= new Timer();
timer2= new Timer();
timer3= new Timer();

console.log(timer1.startTime, timer2.stopTime, timer3.interval);


startBtn.addEventListener('click', timer1.start);
stopBtn.addEventListener('click', timer1.stop);

