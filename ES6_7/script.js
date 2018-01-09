// Визуализируем клавиатуру.
// Написать метод createLayout() который создает клавиатуру
// состоящую из 3-х строк,
// в каждой строке такое кол-во кнопок как длины topRow/middleRow и bottomRow полей.
// Можно использовать либо createElement либо создавать строку из тегов
// и вешать через insertAdjacentHTML или innerHTML.
// Добавить минимальное оформление на свой вкус.

let Keyboard = {
    alphabet: "qwertyuiop[]asdfghjkl;'zxcvbnm,./",
    topRow: 11,
    middleRow: 22,
    bottomRow: 33,
    createLayout: function() {
        let keyboard = document.getElementById('keyboard');
        let insertbtn=[];

        for(let i=0; i<this.bottomRow; i++) {
            let btn = document.createElement('a');
            btn.href='#';
            insertbtn[i] = keyboard.appendChild(btn);
            insertbtn[i].textContent = this.alphabet[i];
            btn = insertbtn[i].classList.add('btn_style');
            if(i===this.topRow || i===this.middleRow) {
                let newstr = document.createElement('br');
                keyboard.appendChild(newstr);
            }
            if(this.alphabet[i]==='a'){
                insertbtn[i].style.marginLeft='25px';
            }
            if(this.alphabet[i]==='z'){
                insertbtn[i].style.marginLeft='45px';
            }

        }
    },
};

Keyboard.createLayout();
