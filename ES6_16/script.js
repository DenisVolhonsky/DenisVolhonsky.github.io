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

//////////////////Globals//////////////////////
let shapeColor = document.querySelector('#shape-color');
let shapeX = document.querySelector('#shape-x');
let shapeY = document.querySelector('#shape-y');
let shapeSave = document.querySelector('#shape-save');
let getSave = document.querySelector('#get-save');

let rectWidth = document.querySelector('#width');
let rectHeight = document.querySelector('#height');
let rectSave = document.querySelector('#rect-save');
let rectOut = document.querySelector('#rect-out');

let circRadius = document.querySelector('#radius');
let circleSave = document.querySelector('#circle-save');
let outCircle = document.querySelector('#circle-out');

class Shape {
    constructor(color, initX, initY){
        this.color = 'red';
        this.initX = 20;
        this.initY = 20;
    }
    getColor() {
        console.log(`Цвет1: ${this.color}`);
    }
    setColor(val) {
        this.color = val;
        console.log(`Данные экземпляра изменены!!!`);
    }
    getCoords() {
        console.log(`Координата X: ${this.initX}, Координата Y: ${this.initY}`);
    }
    moveTo(newX, newY) {
        this.initX = newX;
        this.initY = newY;
    }
}

let shape = new Shape();
console.log(`Св-ва экземпляра по умолчанию:`);
console.log(shape);

shapeSave.addEventListener('click', ()=> [shape.setColor(shapeColor.value),shape.moveTo(shapeX.value, shapeY.value)]);
getSave.addEventListener('click', ()=>[shape.getColor(),shape.getCoords(),console.log(shape)]);

class Rectangle extends Shape {
    constructor(){
        super();
        this.initWidth = 100;
        this.initHeight = 200;
    }
    setWidth(newWidth){
        this.initWidth = newWidth;
    }
    setHeight(newHeight) {
        this.initHeight = newHeight;
    }
    getDims(){
        console.log(`Высота прямоугольника: ${this.initWidth}, ширина: ${this.initHeight}`);
    }
    draw() {
        rectOut.innerText =
        `Drawing a Rectangle at:
        (x: ${this.initX}, y: ${this.initY})
        With dimentions:
        width: ${this.initWidth}
        height: ${this.initHeight}
        Filled with color: ${this.color}
        `;
    }
}

let rectangle = new Rectangle();
rectSave.addEventListener('click', ()=>[rectangle.setWidth(rectWidth.value),rectangle.setHeight(rectHeight.value),rectangle.getDims(),rectangle.draw()]);


class Circle extends Shape {
    constructor(params, initRadius){
        super(params);
        this.initRadius = initRadius;
    }
    getRadius(){
        console.log(`Радиус круга равен: ${this.initRadius}`);
    }
    setRadius(val){

    }
    draw(){

    }
}



let circle = new Circle();






