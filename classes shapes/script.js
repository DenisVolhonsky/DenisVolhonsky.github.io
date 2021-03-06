// при первом уменьшие если нажата правая кнопка то увеличивает фигуру


class Shape {
    constructor(color, element){ // element = DOM ELEMENT
        if(typeof element === 'undefined') return;
        // instanceof
        element.style.backgroundColor = color;
        this.element = element;
        this.render();
        this.element.addEventListener("click", ()=> this.smaller()); // 1й вариант
        this.element.addEventListener("contextmenu", this.bigger.bind(this), false); // или 2й вариант
    }

    render(){
        document.body.appendChild(this.element);
    }

    smaller(){
        console.log(this instanceof Triangle);
        this.element.style.width = '50px';
        this.element.style.height = '50px';
        if(this instanceof Triangle){
            //console.log(this);
            this.element.style.height = "0";
            this.element.style.width = "0";
            this.element.style.borderLeft = '25px solid transparent';
            this.element.style.borderRight = '25px solid transparent';
            this.element.style.borderBottom = '50px solid #00F';
            this.element.style.backgroundColor = '#fff';
        }
    }
    bigger(event){
        event.preventDefault();
        console.log(this instanceof Triangle);
        this.element.style.width = '100px';
        this.element.style.height = '100px';
        if(this instanceof Triangle){
            //console.log(this);

            this.element.style.height = "0";
            this.element.style.width = "0";
            this.element.style.borderLeft = '50px solid transparent';
            this.element.style.borderRight = '50px solid transparent';
            this.element.style.borderBottom = '100px solid #00F';
            this.element.style.backgroundColor = '#fff';
        }

    }
}

class Square extends Shape{
    constructor(){
        let element = document.createElement("div");
        element.style.height = "100px";
        element.style.width = "100px";
        element.style.display = "inline-block";
        element.style.marginRight = "20px";
        super("#0f0", element); // new Shape("#0f0", element)
    }
}

class Circle extends Shape{
    constructor(color){  // зададим цвет вручную
        let element = document.createElement("div");
        element.style.height = "100px";
        element.style.width = "100px";
        element.style.display = "inline-block";
        element.style.marginRight = "20px";
        element.style.borderRadius = "50%";
        super(color, element); // new Shape("#0f0", element)
    }
}

class Triangle extends Shape{
    constructor(){
        let element = document.createElement("div");
        element.style.height = "0";
        element.style.width = "0";
        element.style.display = "inline-block";
        element.style.borderLeft = '50px solid transparent';
        element.style.borderRight = '50px solid transparent';
        element.style.borderBottom = '100px solid #00F';
        super("#fff", element); // new Shape("#0f0", element)
    }
}

let s = new Square;
let c = new Circle('red');
let t = new Triangle;
let c1 = new Circle('green');
let t1 = new Triangle;


