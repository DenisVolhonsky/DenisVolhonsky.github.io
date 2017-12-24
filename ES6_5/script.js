///////////////////Homework 5/////////////////////

// Массив строк клавиатуры из прошлого модуля преобразовать
// в объект keyboard следующего формата.
//
// поле layouts содержит обьекты раскладок языков,
// в каждом из которых по 3 массива строк клавиатуры
// поле langs содержит массив доступных языков
// поле currentLang будет содержать язык который сейчас выбран
// Написать скрипт который на старте спрашивает пользователя какой язык
// он хочет использовать на тренажере. Это обычный prompt в котором
// написано en-0, ru-1, ua-2. Пользователь вводит 0, 1 или 2, если введено другое значение
// то вывести alert о том что был выбран не доступный язык и повторить prompt
// до того момента пока не будет введено подходящее значание языка или нажат cancel.
// При cancel прекратить выполнение скрипта.
//
//Результат выбора языка пользователем записать в обьект keyboard
// в поле currentLang как строку, 0 это en, 1 это ru, 2 это ua.
//
//Модифицировать функцию getRandCharInAlph() так,
//чтобы она возвращала случайную букву из выбраного пользователем алфавита.

const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

////////////////////////////////////////////////////////////

const getRandomInt = (min, max) => {   // рандом целых чисел
    return Math.floor(Math.random() * (max - min)) + min;
}

///////////////////////////////////////////////////////////

let addKeyboardLayout = alphabet => {
    let keybLang;

    if(alphabet=== 'en') keybLang = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    if(alphabet=== 'ru') keybLang = "йцукенгшщзхъфывапролджэячсмитьбю.";
    if(alphabet=== 'ua') keybLang = "йцукенгшщзхїфівапролджєячсмитьбю.";

    keyboard.layouts[alphabet].topRow = keybLang.split("").slice(0,12);
    keyboard.layouts[alphabet].middleRow = keybLang.split("").slice(12,23);
    keyboard.layouts[alphabet].bottomRow = keybLang.split("").slice(23,34);

    document.getElementById('string1').innerHTML=keyboard.layouts[alphabet].topRow;
    document.getElementById('string2').innerHTML=keyboard.layouts[alphabet].middleRow;
    document.getElementById('string3').innerHTML=keyboard.layouts[alphabet].bottomRow;

    let options = document.getElementById('row').options;

    document.getElementById('rand-char-string').onclick=()=>{
        Array.from(options).map(function(n,i){
            if(options[i].selected)
                return getRandCharInRow(options[i].value);
        });
    }
    //return console.log(alphabet);
};

///////////////////////////////////////////////////////////
let flag=0;

while (flag!==null) {
    i = prompt('Выберите язык');
    if (i==0) {
        keyboard.currentLang=keyboard.langs[i];
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard.currentLang);
        flag = null;
    }
    else if (i==1) {
        keyboard.currentLang=keyboard.langs[i];
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard.currentLang);
        flag = null;
    }
    else if (i==2) {
        keyboard.currentLang=keyboard.langs[i];
        addKeyboardLayout(keyboard.currentLang);
        console.log(keyboard.currentLang);
        flag = null;
    }
    else if (i!=0 && i!=1 && i!=2 && i!==null) {
        alert('other');
    }
    else if (i===null) flag = null;
}

//////////////////////////////////////////////////////////














