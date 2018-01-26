// Создать две кнопки в HTML: start и stop.
//     Реализовать функционал таймера отсчета старта печати через функцию-конструктор со свойсвами startTime, stopTime и interval. Добавить в prototype методы start и stop.
//     При нажатии на кнопку start, функция сохраняет момент нажатия в свойство startTime.
//     При нажатии на кнопку stop, функция сохраняет значение текущего момента времени в stopTime и записывает разницу между startTime и stopTime в interval.
//     При нажатии на stop, значение interval выводится в консоль.

function Timer() {
    this.startTime = '';
    this.stopTime = '';
    this.interval= ''; // вывод в консоль
}



Timer.prototype.start = function () {
    console.log(1);
}
Timer.prototype.stop.stop = function () {
    console.log(2);
}

let timer = new Timer();


console.log(timer);





