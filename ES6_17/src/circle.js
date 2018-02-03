import Shape from 'shape';

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

export default Circle;
