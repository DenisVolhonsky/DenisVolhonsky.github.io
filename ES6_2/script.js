/*
   Есть три курорта: taba, sharm или hurgada.

   Необходимо через prompt попросить ввести число, от 1 до 3-х.

   В тексте prompt необходимо написать какое число соотвествует
   какому курорту, на ваш выбор.

   После этого вывести сообщение о том, что пользователь
   выбрал такой-то курорт или сообщение о том, что введено
   число, варианта курорта для которого не было.
*/

document.getElementById('enter').onclick = region;
let numRegion;
let nameRegion;
let visitors;

const sharm=15;
const hurgada=25;
const taba=6;

function region() {

    numRegion = prompt(`Введите любое число, от 1 до 3-х. \n Курорты: \n 1->Taba\n 2->Sharm\n 3->Hurgada`);
    numRegion = +numRegion;

    switch(numRegion) {
        case 1:
            nameRegion='Taba';
            group(taba);
            break;
        case 2:
            nameRegion='Sharm';
            group(sharm);
            break;
        case 3:
            nameRegion='Hurgada';
            group(hurgada);
            break;
        default:
            alert(`Вы ввели ${numRegion}. Это не верное чило, введите число в диапазоне от 1 до 3-х.`);
    }
}

// Пользователь через prompt вводит число участников группы.
// Необходимо проверить является ли введенные данные целым
// положительным числом. Вывести alert в случае ошибочного ввода.
// Всего имеется три группы sharm, hurgada и taba.
// В группах ограничено кол-во свободных мест:
//   sharm - 15
//   hurgada - 25
//   taba - 6
//
// Если количество мест позволяет, то вывести пользователю
// сообщение через confirm что есть место в группе такой-то,
// согласен ли пользоваетель быть в этой группе?
//
// Если ответ ok, уменьшаем число свободных мест на  число участников группы.
// Если ответ нет, предлагаем следующую группу со свободными местами.
//
// Если мест нигде нет, выводим сообщение alert('Мест нет!')

function group(countInReg) {

    visitors = prompt(`Вы выбрали ${nameRegion}. Введите число участников группы!!!`);
    let freePlace = countInReg-visitors;

    if (!isNaN(visitors) && visitors>0 && (Math.ceil(visitors)-visitors===0)) {
        if(freePlace>=0) {
            let condition = confirm(`Место в группе ${nameRegion} есть! Хотите забронировать?`);
            if(condition) {
                alert(`Вы подтвердили бронь! Кол-во оставшихся мест ${freePlace}`);
            }
        }
        else {
            alert(`К сожалению такого кол-ва мест нет! Выберите пожалуйста другую группу.`);
        }
    }
    else if (!visitors){
        region();
    }
    else {
        alert(`Кол-во участников должно быть целым и положительным числом!`);
    }
}










