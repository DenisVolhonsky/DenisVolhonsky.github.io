///////////////////////////СОБЫТИЯ////////////////////////////////

// Задание 1. Выведите координаты мыши относительно блока в момент
// движения курсора мыши внутри блока. Координаты выводить под блоком. 

document.querySelector('.one').onmousemove = function (event){
	var out = document.getElementById('out');
	out.innerHTML = 'X= ' +event.offsetX +', Y='+ event.offsetY +';';
}

// Задание 2. Создайте блок div, в качестве изображения фона установите
// ему изображение закрытой папки. Добавьте событие, которое выполняется
// при двойном клике на блоке и заменяет фон блока на изображение
// открытой папки.
var i=0;
document.querySelector('.folder').onclick = function (){
 	if(i==0){
 	this.style.background = 'url(images/folder.png)';
 	this.style.backgroundSize='100% 100%';
 	i=1;
 	}
 	else{
 	this.style.background = 'url(images/folder1.png)';
 	this.style.backgroundSize='100% 100%';
 	i=0;
 	}
}


// Задание 3. Добавьте в документ 300-400 блоков div квадратной формы с
// размерами сторон 30px, и цветом фона. Добавление элементов выполните
// с помощью цикла. Добавьте событие при наведении мыши, которое будет
// скруглять данные блоки с помощью border-radius до круга. (Для
// замедления эффекта скругления в CSS можно добавить transition).

var block = document.querySelector('.first');
	for(var i=0; i<400; i++) {
		block.innerHTML+='<div class="block"></div>';	
	}

var list = document.querySelectorAll('.block');
	for(var i=0; i<list.length; i++) {
		list[i].onmousemove = function() {
	    	this.style.borderRadius = 15 +'px';
	    	this.style.background = '#E280BE';
	    	this.style.transition = 'all ease 1s';
	    	}
	    } 


// Задание 4. Создайте div размерами ширина – 100%, высота 250px. Ниже
// добавьте 4-5 изображений с одинаковыми классами, разного размера.
// Добавьте событие, которое будет при клике на изображении
// устанавливать его фоном блока div со свойством background-size: contain.

document.onclick = function(event) {     
	if(event.target.className == 'm-img') {
		changeImg(event.target); 
	}
}

function changeImg(t) {
	document.querySelector('#main').src = t.src;  //event.target.src
	}

// Задание 5. Создайте блок размерами 50x50px. Добавьте событие клик, так,
// что при каждом клике на блоке он отодвигается на 100px вниз от
// предыдущего положения.
var y=0;
document.querySelector('.move-block').onclick = function(event) {
	y=y+100;
	this.style.top = y +'px';
	document.querySelector('.erase').style.height = y + 'px';
	document.querySelector('.erase').style.transition = 'ease all 1s';
	this.style.transition = 'ease all 1s';
	
}	 
		
// Задача 6. РЕАЛИЗУЙТЕ ТРИГГЕР ПЕРЕКЛЮЧАТЕЛЬ Реализуйте
// триггер переключатель следующего вида: см. pdf
// При загрузке переключатель находится в первом положении.
// При клике, он переходит в положение два (средняя картинка), а в консоль
// выводится цифра 1.
// При следующем клике переключатель переходит в состояние три (нижняя
// картинка), а в консоль выводится цифра 2. При следующем клике,
// переключатель переходит в состояние 1 (верхняя картинка), а в консоль
// выводится 0.
var y1=0, flag=0;

document.getElementById('switch').onclick = function(event) {
	y1=y1+94; 
	this.style.left = y1 +'px';
	this.style.transition = 'ease all 1s';
	flag++;
	
	if(flag == 3) {
		y1=0; 
		this.style.left = y1 +'px';
		flag=0;	
	}

	console.log(flag);

}

