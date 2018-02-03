import Shape from 'shape';

class Triangle extends Shape{
  constructor(){
    let element = document.createElement("div");
    element.style.height = "0";
    element.style.width = "0";
    element.style.display = "inline-block";
    element.style.marginRight = "20px";
    element.style.borderLeft = '50px solid transparent';
    element.style.borderRight = '50px solid transparent';
    element.style.borderBottom = '100px solid #00F';
    super("none", element); // new Shape("#0f0", element)
  }
}

export default Triangle;
