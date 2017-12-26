// LocalStorage

//     Задание 3. Создайте массив, сохраните его в localStorage. Считайте массив из localStorage,
//     выведите его на экран.
//     Задание 4. Создайте окно, которое всплывает через 4 секунды после загрузки страницы.
//     В окне – опция «Согласен». Если пользователь выбирает данную опцию и закрывает окно – то
//     при последующих обновлениях окно не показывается. Если пользователь
//     не выбрал опцию «Согласен», то повторяйте вывод окна после загрузки.
//     Задание 5. Напишите скрипт, который выводит все содержимое localStorage.


//     Задание 1. Напишите программу, которая проверяет поддержку localStorage в браузере.
//     Результат проверки выведите в консоль.

let storageTest = localStorage.setItem('test','localStorage work!!!');

if (localStorage.getItem('test') !== null) {
    storageTest = localStorage.getItem('test');
    console.log(storageTest);
}
else console.log('localStorage error!!!');

//     Задание 2. Создайте HTML страницу и два варианта оформления, которые размещены
//     в разных css файлах. На странице сделайте переключатель тем оформления. При выборе
//     оформления – происходит подключение соответствующего файла CSS. Запишите в localStorage
//     выбранную тему оформления. При обновлении страницы загружайте ранее выбранную тему.


if (localStorage.getItem('theme') !== null) {
    storageTest = localStorage.getItem('theme');  //загрузить из LS
    document.getElementsByTagName('link')[0].href = storageTest;
}


document.getElementById('selectTheme').onclick = function () {
    if (document.getElementsByName('theme')[0].checked) {
        document.getElementsByTagName('link')[0].href = 'style1.css';
        localStorage.setItem('theme','style1.css');  //загрузить в LS

    }
    else if(document.getElementsByName('theme')[1].checked) {
        document.getElementsByTagName('link')[0].href = 'style2.css';
        localStorage.setItem('theme','style2.css');  //загрузить в LS
    }
}

//     Задание 3. Создайте массив, сохраните его в localStorage. Считайте массив из localStorage,
//     выведите его на экран.