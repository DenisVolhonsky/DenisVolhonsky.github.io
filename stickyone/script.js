$(document).ready(function() {   //загружается документ когда он готов выполняется функция
    $(checkPosition);
    function checkPosition() {
        // for mobile - you nedd to uncomment line below and line 19
        //if (window.matchMedia("(max-width: 992px)").matches) {
        var menuWrap = $("nav");
        if (menuWrap.length !== 0) {
            var stickyHeaderTop = menuWrap.offset().top;
        }

        $(window).scroll(function() {
            if ($(window).scrollTop() > stickyHeaderTop) {
                menuWrap.addClass("fixed");
            } else {
                menuWrap.removeClass("fixed");
            }
        });
        //for mobile - you nedd to uncomment line below too
        //}
    }
});

