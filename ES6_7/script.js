// Визуализируем клавиатуру.
// Написать метод createLayout() который создает клавиатуру
// состоящую из 3-х строк,
// в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
// Можно использовать либо createElement либо создавать строку из тегов
// и вешать через insertAdjacentHTML или innerHTML.
// Добавить минимальное оформление на свой вкус.

let Keyboard = {
    alphabet: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
    topRow: 12,
    middleRow: 11,
    bottomRow: 10,
    createLayout: function () {
        let keyboard = document.getElementById('keyboard');

        for(let i=0; i<this.topRow; i++) {
            let btn = document.createElement('a');
            btn.href='#';
            keyboard.appendChild(btn);
            console.log(i);
        }
    }
};

Keyboard.createLayout();