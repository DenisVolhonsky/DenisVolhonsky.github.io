$(document).ready(function() {
    $('#result').on('click', addSinglePost);

});
// файл json находится на сервере
function addSinglePost() {
    $.post(
        "core/core.php", //относительно index.html()
        {
            "action": "addSinglePost",
            "name": $('#name').val(),
            "img": $('#img').val(),
            "description": $('#description').val()
        },
        function (data) {
            data = JSON.parse(data); //преобразовали строку в массив
            console.log(data);
            if (data == 1)
            alert('Картинка добавлена');
        }
    );
}