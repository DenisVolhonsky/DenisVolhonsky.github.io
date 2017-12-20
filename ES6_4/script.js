// Используя даную строку с полным алфавитом, программно составить массив
// keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.
//
// Массив keyboard будет иметь такую струтуру:
// [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].
//
// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arr=[];
//
// const symbolArr = alphabet.split("");
// const upperRow = symbolArr.slice(0,12);
// const middleRow = symbolArr.slice(12,23);
// const lowRow = symbolArr.slice(23,34);
//
// const arr = [];
// arr[0]=upperRow;
// arr[1]=middleRow;
// arr[2]=lowRow;
//
// console.log(arr);
//
// // Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам,
// // записать в переменные слова и вывести их в консоль:
// // hello
// // javascript
// // trainer
//
// let hello = arr[1][5]+arr[0][2]+arr[1][8]+arr[1][8]+arr[0][8];
// let javascript = arr[1][6]+arr[1][0]+arr[2][3]+arr[1][0]+arr[1][1]+arr[2][2]+arr[0][3]+arr[0][7]+arr[0][9]+arr[0][4];
// let trainer = arr[0][4]+arr[0][3]+arr[1][0]+arr[0][7]+arr[2][5]+arr[0][2]+arr[0][3];
// console.log(hello);
// console.log(javascript);
// console.log(trainer);
//
// //////finding index in the Array
//
// let findingIndex = char => {
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[i].length; j++){
//             if(arr[i][j] === char)
//                 console.log(`${char} = arr[${i}][${j}]`);
//         }
//     }
// };
//
// findingIndex('b');

// Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet)
// которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.
//
//Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры
// и возвращает случайную букву из этой строки.
//
//Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.


let addKeyboardLayout = alphabet => {

    const symbolArr = alphabet.split("");

    arr[0] = symbolArr.slice(0,12);
    arr[1] = symbolArr.slice(12,23);
    arr[2] = symbolArr.slice(23,34);

    getRandCharInRow(1);
    
};
addKeyboardLayout(alphabet);


function getRandCharInRow(row)  {
    console.log(arr[row]);
    console.log(arr[row][getRandomInt(0, arr[row].length)]);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



