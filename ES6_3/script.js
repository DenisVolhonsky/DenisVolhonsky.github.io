// Используя даную строку с полным алфавитом, программно составить массив
// keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.
//
// Массив keyboard будет иметь такую струтуру:
// [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].
//
// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";


const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const arr = alphabet.split("");
const upperRow = arr.slice(0,12);
const middleRow = arr.slice(12,23);
const lowRow = arr.slice(23,34);

const keyboardArr = [];
keyboardArr[0]=upperRow;
keyboardArr[1]=middleRow;
keyboardArr[2]=lowRow;

console.log(keyboardArr);

// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам,
// записать в переменные слова и вывести их в консоль:
// hello
// javascript
// trainer

// let h=keyboardArr[1].indexOf('h');
//console.log(h);

let findingChar=()=> {
    for(let i=0; i<keyboardArr.length; i++){
        // console.log(keyboardArr[i]);
        for(let j=0; j<keyboardArr[i].length; j++){
            // console.log(keyboardArr[i][j]);
            if(keyboardArr[i][j]==='h')
            console.log(i,j);
        }
    }
};

findingChar();
