// Используя логику создания массива клавиатурных строк, создать функцию addKeyboardLayout(alphabet)
// которая на входе получает строку-алфавит и возвращает массив-массивов клавиатурных строк.

const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arr=[];
const symbolArr = alphabet.split("");

let addKeyboardLayout = alphabet => {
    arr[0] = symbolArr.slice(0,12);
    arr[1] = symbolArr.slice(12,23);
    arr[2] = symbolArr.slice(23,34);

    console.log(arr);

    getRandCharInRow(1);  // тут зададим ввод строки с клавиатуры
    
};
addKeyboardLayout(alphabet);

//Создать функцию getRandCharInRow(row) которая получает номер строки клавиатуры
// и возвращает случайную букву из этой строки.
function getRandCharInRow(row)  {
    console.log(arr[row]);
    console.log(arr[row][getRandomInt(0, arr[row].length)]);
}

function getRandomInt(min, max) {   // рандом целых чисел
    return Math.floor(Math.random() * (max - min)) + min;
}

//Создать функцию getRandCharInAlph() которая возвращает случайную букву из всего алфавита.
function getRandCharInAlph() {
    console.log(symbolArr);
    console.log(symbolArr[getRandomInt(0, symbolArr.length)]);
}

getRandCharInAlph();

