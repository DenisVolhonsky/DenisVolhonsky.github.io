document.getElementById('btnCompare').onclick = compare;

function compare() {
    var digit1, digit2;
    digit1 = document.getElementById('num1').value;
    digit2 = document.getElementById('num2').value;

    // иногда не срабатывает!!!
    if (digit1 > digit2) {
        console.log(digit1 + 'Первое');
    }
    else if (digit1 < digit2){
        console.log(digit2 + 'Второе');
    }
    else {
        console.log('Числа равны');
    }

}

document.getElementById('btnEntrance').onclick = entrance;

function entrance() {
    var flat;
    flat = document.getElementById('numFlat').value;

    if (flat>=1 && flat<=20) {
        console.log('Квартира находится в 1-м поъезде');
    }
    else if (flat>=21 && flat<=48) {
        console.log('Квартира находится в 2-м поъезде');
    }
    else if (flat>=49 && flat<=90) {
        console.log('Квартира находится в 3-м поъезде');
    }
    else  {
        console.log('В этом доме нет такой квартиры');
    }
}

document.getElementById('verify').onclick= userCheck;

function userCheck() {
    var login, password;
    login = document.getElementById('loginId').value;
    password = document.getElementById('passwordId').value;

    if ((login=='ivan' && password==334455) || (login=='alex' && password==777) || (login=='petr' && password==b5678)) {
        console.log('Добро пожаловать');
    }
    else {
        console.log('Ошибка ввода');
    }
}

document.getElementById('btnAge').onclick = birth;

function birth() {
    var inpBirth, age;
    inpBirth = document.getElementById('numAge').value;

    var a = new Date();
    if (inpBirth >= 1900 && inpBirth <= 2017) {
        age = 2017 - inpBirth;
    }
    else if (inpBirth >= 0 && inpBirth <= 17) {
        age = 17 - inpBirth;
    }
    else if (inpBirth >= 50 && inpBirth <= 99) {
        age = 117 - inpBirth;
    }
    else {
        console.log('Вы ввели не верный год своего рождения');
    }

    if (age >= 16) {
        console.log('Добро пожаловать, ваш возраст:' + age);
    }
    else if (age >= 0 && age <= 16){
        console.log('Вход воспрещен ваш возраст:' + age);
    }
}

document.getElementById('nadbavkaId').onclick = nadbavka;

function nadbavka() {
    var stazh;
    stazh = document.getElementById('stazhId').value;

    if (stazh >= 0 && stazh < 3 ) {
        console.log('0%');
    }
    else if (stazh >= 3 && stazh < 10) {
        console.log('10%');
    }
    else if (stazh >=10 && stazh < 20) {
        console.log('20%');
    }
    else if (stazh >=20 && stazh < 70) {
        console.log('30%');
    }
    else {
        console.log('Вы ввели не верный стаж');
    }
}



