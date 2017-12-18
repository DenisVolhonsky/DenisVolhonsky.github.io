// 1. Создать три const - строки, содержащие символы клавиатуры верхнего, среднего и нижнего ряда английского языка.
//    Например для верхнего ряда русской раскладки строка будет выглядеть 'йцукенгшщзхъ'.
const UPPER = 'qwertyuiop[]';
const MIDDLE = 'asdfghjkl;';
const LOW = 'zxcvbnm,./';

// 2. Создать три const переменные с числом, содержащим длинну строк, полученных ранее.
const UPPERLENGTH = UPPER.length;
const MIDDLELENGTH = MIDDLE.length;
const LOWLENGTH = LOW.length;

console.log(`Верхний ряд клавиатуры: ${UPPER} содержит: ${UPPERLENGTH} символов`);
console.log(`Средний ряд клавиатуры: ${MIDDLE} содержит: ${MIDDLELENGTH} символов`);
console.log(`Нижний ряд клавиатуры: ${LOW} содержитЖ ${LOWLENGTH} символов`);

//  3.Используя charAt, для каждой строки получить первый и последний символ для каждой из трех строк,
//    используйте имеющиеся константы.
UPPER.charAt(0);
UPPER.charAt(UPPERLENGTH-1);

MIDDLE.charAt(0);
MIDDLE.charAt(MIDDLELENGTH-1);

LOW.charAt(0);
LOW.charAt(LOWLENGTH-1);

//  4.Сделайте поиск позиции для символов [ и ] с помощью indexOf и сохраните результат в переменных.








//  Используя многострочную шаблонную строку, вывести названия всех переменных и полученные значения
//  за один console.log.

