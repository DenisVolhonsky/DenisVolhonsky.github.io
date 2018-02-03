import Shape from 'shape';

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
export default Square;
