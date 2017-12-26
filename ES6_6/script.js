// Модуль 6 - Домашнее задание
// 1.  Создайте объект keyTrainer, содержащий свойство chars,
//     значением которого будет массив символов алфавита.
//         chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's',
//     'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm']
// 2.   Добавьте свойство charCount и метод setCharCount.
//     Метод делает запрос через prompt о количестве символов,
//     которые пользователь должен будет набрать.
// 3.  Добавьте метод checkPositiveInteger, который проверяет является
//     ли число целым положительным числом. Используйете метод checkPositiveInteger
//     в методе setCharCount для проверки корректности ввода пользователем. Если ввод неверный, используйте цикл while для того чтобы запрашивать у пользователя верное число (целое положительное).
// 4.  Создайте свойство task и метод createTask, который создает массив длинной
//     в charCount и заполняет его случайными буквами из массива chars.
// 5.    Создайте метод startTask, который с помощью prompt выводит строку из массива task
//     и просит набрать эту строку в этом же prompt сообщении.
// 6.    Результат, полученный методом startTask запишите в свойство userInput
//     и затем сравните строки userInput и task посимвольно. Если симовол не совпадает,
//     то запишите количество ошибок в свойство userErrors.
// 7.  Выведите в консоль userErrors: eсли количество ошибок 0, то поздравьте,
//     если отлично от ноля - напишите количество ошибок и пожелание успехов в следующем упражнении.
//
//     Все свойства и методы должны быть внутри одного объекта keyTrainer,
//     но вызов по очереди всех методов поместите внутри функции run и затем вызовите эту функцию.

let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount: function () {
        let k=0;
        let result;
        while(k==0) {
            result = prompt(`Введите целое число:`);
            if(this.checkPositiveInteger(result)) {
                this.charCount = result;
                k=1;
            }
            else if(result === null) k=1;
            else {
               k=0;
            }
        }
        return result;
    },
    checkPositiveInteger: function (response) {  //проверяет является ли число целым положительным числом
        if (response>0 && parseInt( response ) == response) flag = true;
        else flag = false; // меньше нуля и не целое
        return flag;
    },
    task: [],
    createTask: function () {  // создает новый массив длинной из charCount и заполняет его случайными буквами из массива chars
        const getRandomInt = (min, max) => {   // рандом целых чисел
            return Math.floor(Math.random() * (max - min)) + min;
        }

        lengthNewArr = +this.charCount;
        for(let i=0; i<lengthNewArr; i++) {
            randInx = getRandomInt(0, keyTrainer.chars.length);
            this.task.push(this.chars[randInx]);
        }
    },

    starTask: function () {
        let inputStr = this.userInput = prompt(`Наберите эту строку которая введена в поле input:`, `${this.task}`);
        let randStr = this.task.join(',');
        let maxStr;

        if(inputStr !== null) { //отлавливаем ошибки

            maxStr = Math.max(inputStr.length, randStr.length);
            console.log(`Cлучайная строка: ${randStr}`);  // случайная строка
            console.log(`Введенная строка: ${inputStr}`); // введенная строка

            for (let i = 0; i < maxStr; i++) {
                if (inputStr[i] !== randStr[i]) {
                    this.userError++;
                }
            }
            if (this.userError == 0) {
                console.log(`Поздравляю строки совпадают, количество ошибок ${this.userError}!`);
            }
            else console.log(`Вы допустили: ${this.userError} ошибок(ки).`);
        }
        else inputStr='';
    },
    userInput: '',
    userError: 0
};

function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    keyTrainer.starTask();
    console.log(keyTrainer);
}
run();
