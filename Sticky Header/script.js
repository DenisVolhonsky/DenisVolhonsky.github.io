// Задание:
// Реализовать Sticky Header с поддержкой браузеров:
// Chrome, Firefox, UC Browser на платформе Android
// Safari, Chrome, Firefox на платформе iOS
// Просьба присылать ссылку на рабочий пример, который мы можем протестировать.
// Не блокировать нативный скейл.

var header = document.querySelector("#myHeader");
var headerIndent = header.offsetTop;

window.onscroll = stickyEffect;

function stickyEffect() {
    //var scrollTop = window.pageYOffset || document.body.scrollTop;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    // scrollTop - расстояние на которое прокрутил
    // headerIndent - расстояние от верха до хедера

    if (scrollTop >= headerIndent) {
        console.log('scrollTop'+ scrollTop); //211px
        console.log('headerIndent' +headerIndent);

            header.classList.add("sticky");
    }
     else if (header.classList.contains('sticky')) {
        header.classList.remove("sticky");
    }
}


//условие ? выражение1 : выражение2

