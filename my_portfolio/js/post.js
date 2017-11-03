$(document).ready(function() {
    getSinglePost();
});

function getSinglePost() {
    $.post(
        "core/core.php", //относительно index.html()
        {"action": "getSinglePost", "id": 2},
        function (data) {
            data = JSON.parse(data); //преобразовали строку в массив
            console.log(data);
            var out = '';
            out+=``;
            $('main').html(out);
        }
    );
}