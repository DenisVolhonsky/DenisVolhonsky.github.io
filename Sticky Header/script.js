// Задание:
// Реализовать Sticky Header с поддержкой браузеров:
// Chrome, Firefox, UC Browser на платформе Android
// Safari, Chrome, Firefox на платформе iOS
// Просьба присылать ссылку на рабочий пример, который мы можем протестировать.
// Не блокировать нативный скейл.

var header = document.querySelector("#myHeader");
var sticky = header.offsetTop;
// console.log(sticky);

//document.body.ontouchmove = function() {stickyEffect()};

function stickyEffect() {
    var scrollTop = window.pageYOffset || document.body.scrollTop;
    if (scrollTop >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

window.addEventListener('scroll', ()=>stickyEffect());