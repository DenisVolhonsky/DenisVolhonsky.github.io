const getRandomInt = (min, max) => {   // рандом целых чисел
    return Math.floor(Math.random() * (max - min)) + min;
}


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
            else if(result==null) k=1;
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
        lengthNewArr = +this.charCount;
        for(let i=0; i<lengthNewArr; i++) {
            randInx = getRandomInt(0, keyTrainer.chars.length);
            this.task.push(this.chars[randInx]);
        }
    }
};

function run() {
    keyTrainer.setCharCount();
    keyTrainer.createTask();
    console.log(keyTrainer);
}
run();

