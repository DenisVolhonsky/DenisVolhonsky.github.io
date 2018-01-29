// Модуль 16 - Домашнее задание

// Создать базовый класс Shape, который принимает значения цвета и координат x и y: color, initX, initY.
// Создать методы класса Shape:
//     getColor() - возвращает значение цвета.
//     setColor(val) - получает и записывает новое значение цвета.
//     getCoords() - возвращает координаты x и y.
//     moveTo(newX, newY) - принимает 2 параметра, новые значения для x и y и записывает их.
//  Создать класс Rectangle который расширяет класс Shape,
//     принимая значения цвета и начальных координат, как его родительский класс,
//      и еще значение ширины и высоты сторон initWidth и initHeight:
//  Создать методы класса Rectangle:
//     setWidth(newWidth) и setHeight(newHeight) - получают ширину/высоту и записывают
//     новые значения.
//     getDims() - метод который возвращает значения width и height.
//     draw() - метод который имитирует рисование прямоугольника используя методы
//     Shape и Rectangle, выводя в консоль браузера следующей информации.
// Создать класс Circle который расширяет класс Shape, принимая значения цвета
// и начальных координат, как его родительский класс, и еще значение радиуса initRadius:
// Создать методы класса Circle:
//     getRadius() - возвращает текущее значение радиуса.
//     setRadius(val) - получает значение и присваивает его радиусу.
//     draw() - метод который имитирует рисование круга используя методы Shape и Circle,
//     выводя в консоль браузера следующей информации.

class Shape {
    constructor(color, initX, initY){
        this.color = 'red';
        this.initX = '12';
        this.initY = '10';
    }
    getColor() {
        console.log(`Цвет: ${this.color}`);
    }
    setColor(val) {

    }
    getCoords() {
        console.log(`Координата X: ${this.initX}, Координата Y: ${this.initY}`);
    }
    moveTo(newX, newY) {

    }

}

class Rectangle extends Shape {
    constructor(params, initWidth, initHeight){
        super(params);
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    }
    setWidth(newWidth){

    }
    setHeight(newHeight) {

    }
    getDims(){
        console.log(`Высота прямоугольника: ${this.initWidth}, ширина: ${this.initHeight}`);
    }
    draw() {   // смотри скриншот
        console.log();
    }


}


let rec = new Rectangle();
console.log(rec);