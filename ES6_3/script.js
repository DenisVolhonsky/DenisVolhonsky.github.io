// Используя даную строку с полным алфавитом, программно составить массив
// keyboard содержащий 3 других массива с буквами алфавита, идентичные строкам на клавиатуре.
//
// Массив keyboard будет иметь такую струтуру:
// [ [первая строка клавиатуры], [вторая строка клавиатуры], [третья строка клавиатуры] ].
//
// const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

const symbolArr = alphabet.split("");
const upperRow = symbolArr.slice(0,12);
const middleRow = symbolArr.slice(12,23);
const lowRow = symbolArr.slice(23,34);

const arr = [];
arr[0]=upperRow;
arr[1]=middleRow;
arr[2]=lowRow;

console.log(arr);

// Используя готовый массив клавиатурных строк, обращаясь к элементам массива по индексам,
// записать в переменные слова и вывести их в консоль:
// hello
// javascript
// trainer

let hello = arr[1][5]+arr[0][2]+arr[1][8]+arr[1][8]+arr[0][8];
let javascript = arr[1][6]+arr[1][0]+arr[2][3]+arr[1][0]+arr[1][1]+arr[2][2]+arr[0][3]+arr[0][7]+arr[0][9]+arr[0][4];
let trainer = arr[0][4]+arr[0][3]+arr[1][0]+arr[0][7]+arr[2][5]+arr[0][2]+arr[0][3];
console.log(hello);
console.log(javascript);
console.log(trainer);