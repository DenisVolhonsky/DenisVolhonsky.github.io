// Задание:
// Реализовать Sticky Header с поддержкой браузеров:
// Chrome, Firefox, UC Browser на платформе Android
// Safari, Chrome, Firefox на платформе iOS
// Просьба присылать ссылку на рабочий пример, который мы можем протестировать.
// Не блокировать нативный скейл.



    window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}