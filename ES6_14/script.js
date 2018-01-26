// Создать две кнопки в HTML: start и stop.
//     Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
//     При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
//     При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
//     При нажатии на stop, значение interval выводится в консоль.

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const firstTime = document.querySelector('#start-time');
const stopTime = document.querySelector('#stop-time');

function Timer() {
    this.startTime = '';
    this.stopTime = '';
    this.interval= ''; // вывод в консоль
}

Timer.prototype.start =()=>{
    timer.startTime = new Date();
    firstTime.innerHTML=`${timer.startTime.getHours()}:${timer.startTime.getMinutes()}:${timer.startTime.getSeconds()}`;
}

Timer.prototype.stop =()=> {
    timer.stopTime = new Date();
    stopTime.innerHTML=`${timer.stopTime.getHours()}:${timer.stopTime.getMinutes()}:${timer.stopTime.getSeconds()}`;
    timer.interval=((timer.stopTime-timer.startTime)/1000).toFixed(1);
    console.log(`Интервал равен: ${timer.interval} cек.`);
}

let timer = new Timer();

startBtn.addEventListener('click', timer.start);
stopBtn.addEventListener('click', timer.stop);






