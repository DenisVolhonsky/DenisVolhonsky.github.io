// Задание:
// Реализовать Sticky Header с поддержкой браузеров:
// Chrome, Firefox, UC Browser на платформе Android
// Safari, Chrome, Firefox на платформе iOS
// Просьба присылать ссылку на рабочий пример, который мы можем протестировать.
// Не блокировать нативный скейл.

var header = document.querySelector("#myHeader");
var sticky = header.offsetTop;
// console.log(sticky);



// if (navigator.userAgent.match("Apple") == null) {
//
// }

window.onscroll = function() {stickyEffect()};

function stickyEffect() {
    var scrollTop = window.pageYOffset || document.body.scrollTop;
    if (scrollTop >= sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}








//
// function touchScroll(id){
//     var el=document.getElementById(id);
//     var scrollStartPos=0;
//
//     document.getElementById(id).addEventListener("touchstart", function(event) {
//         scrollStartPos=this.scrollTop+event.touches[0].pageY;
//         event.preventDefault();
//     },false);
//
//     document.getElementById(id).addEventListener("touchmove", function(event) {
//         this.scrollTop=scrollStartPos-event.touches[0].pageY;
//         event.preventDefault();
//     },false);
// }


