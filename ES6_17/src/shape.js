import Triangle from 'triangle';
class Shape {
  constructor(color, element){ // element = DOM ELEMENT
    if(typeof element === 'undefined') return;
    // instanceof
    element.style.backgroundColor = color;
    element.style.opacity = "0.5";
    this.element = element;
    this.render();
    this.element.addEventListener("click", ()=> this.smaller()); // 1й вариант
    this.element.addEventListener("contextmenu", this.bigger.bind(this), false); // или 2й вариант
  }

  render(){
    document.body.appendChild(this.element);
  }

  smaller(){
    this.element.style.width = '50px';
    this.element.style.height = '50px';
    if(this instanceof Triangle){
      this.element.style.height = "0";
      this.element.style.width = "0";
      this.element.style.borderLeft = '25px solid transparent';
      this.element.style.borderRight = '25px solid transparent';
      this.element.style.borderBottom = '50px solid #00F';
      this.element.style.backgroundColor = 'none';
    }
  }
  bigger(event){
    event.preventDefault();
    this.element.style.width = '100px';
    this.element.style.height = '100px';
    if(this instanceof Triangle){
      this.element.style.height = "0";
      this.element.style.width = "0";
      this.element.style.borderLeft = '50px solid transparent';
      this.element.style.borderRight = '50px solid transparent';
      this.element.style.borderBottom = '100px solid #00F';
      this.element.style.backgroundColor = 'none';
    }

  }
}

export default Shape;
