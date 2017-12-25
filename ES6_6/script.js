let keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

    charCount: '',

    setCharCount: function () {
        let k=0;
        while(k==0) {
            let result = prompt(`Введите целое число:`);

            if(this.checkPositiveInteger(result)) {
                this.charCount = result;
                k=1;
            }
            else if(result==null) k=1;
            else {
               k=0;
            }
        }
    },

    checkPositiveInteger: function (response) {  //проверяет является ли число целым положительным числом
        if (response>0 && parseInt( response ) == response) flag = true;
        else flag = false; // меньше нуля и не целое
        return flag;
    }
};

function run() {
    keyTrainer.setCharCount();
    console.log(keyTrainer);
}
run();

