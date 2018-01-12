/*
  Написать скрипт который собирает 3 строки клавиатуры
  и клавишу "пробел" из шаблона по заданому объекту.
  Для зарендереной клавиатуры реализовать поведение из
  модуля 8, подсветка нажатой клавиши, отображение символа итд.
*/
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ",
    notes: ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'],
    links: [ '//goo.gl/T1rxRG', '//goo.gl/KT8FN3','//goo.gl/1SfsNS','//goo.gl/OsOCXe','//goo.gl/vukZmv','//goo.gl/Bjd9KT,','//goo.gl/MS9HTp'],
    rand: function () {
        return this.notes[getRandomInt(0,this.notes.length+1)];
    }

};

const html = document.querySelector('#keyboard-item').textContent.trim();
const compiled = _.template(html);  //создадим функцию шаблон

// Создадим переменную result, в которую запишем
//результат работы функции-шаблона compiled
const result = compiled(lang);
console.log(result);

const container = document.querySelector('#keyboard-container');
container.innerHTML = result;

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");

let callback = (event) => {
    for(let i=0; i<buttons.length; i++) {
        if(event.key === keys[i]) {
             buttons[i].classList.add('keyboard__btn--active');
             setTimeout(() => buttons[i].classList.remove('keyboard__btn--active'),200);
             if(document.querySelector('#slideThree').checked){
                 playSound(buttons[i].getAttribute('data-note'));
             }
        }
    }
}
window.addEventListener("keydown", callback);











