// 1. Создать три const - строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка.
//    Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.
const UPPER = 'qwertyuiop[]';
const MIDDLE = 'asdfghjkl;';
const LOW = 'zxcvbnm,./';

// 2. Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
const UPPERLENGTH = UPPER.length;
const MIDDLELENGTH = MIDDLE.length;
const LOWLENGTH = LOW.length;

console.log(`Верхний ряд клавиатуры: "${UPPER}" содержит: "${UPPERLENGTH}" символов`);
console.log(`Средний ряд клавиатуры: "${MIDDLE}" содержит: "${MIDDLELENGTH}" символов`);
console.log(`Нижний ряд клавиатуры: "${LOW}" содержитЖ "${LOWLENGTH}" символов`);

//  3.Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк,
//    используйте имеющиеся константы.

console.log(`Первый символ верхней строки "${UPPER.charAt(0)}", а последний "${UPPER.charAt(UPPERLENGTH-1)}" `)
console.log(`Первый символ средней строки "${MIDDLE.charAt(0)}", а последний "${MIDDLE.charAt(MIDDLELENGTH-1)}" `)
console.log(`Первый символ нижней строки "${LOW.charAt(0)}", а последний "${LOW.charAt(LOWLENGTH-1)}" `)

//  4.Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.
let leftBracketPos = UPPER.indexOf('[');
let rightBracketPos = UPPER.indexOf(']');
console.log(`Символ "[" по счету ${leftBracketPos}-й`);
console.log(`Символ "]" по счету ${rightBracketPos}-й`);

//  5. Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения
//  за один console.log.
const STRING =
    `
     UPPER = ${UPPER}
     MIDDLE = ${MIDDLE}
     LOW = ${LOW}
     UPPERLENGTH = ${UPPERLENGTH}
     MIDDLELENGTH = ${MIDDLELENGTH}
     LOWLENGTH = ${LOWLENGTH}
     `;
console.log(STRING);
