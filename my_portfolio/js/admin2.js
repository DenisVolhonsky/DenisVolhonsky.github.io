// ajax action
//changePost
//updatePost
$(document).ready(function(){
    init();
    // $('#update').on('click', updatePost);
});

function init() {
    $.post(
        "core/core.php",
        {
            "action": "changePost"
        },
        function (data) {
            data=JSON.parse(data);
            console.log(data);
            var out='<select>';
            out+='<option disabled selected>Выберите статью</option>';
            for(var key in data) {
                out+=`<option value="${key}">${data[key]}</option>`;
            }
            out+='<select>';
            $('#change-post').html(out);
            $('select').on('change', getSinglePost);
        }
    );
}

function getSinglePost(){
    $.post(
        "core/core.php",
        {
            "action" : "getSinglePost",
            "id": $('select option:selected').val()
        },
        function (data){
            $('#update').off('click', updatePost);
            data = JSON.parse(data);
            console.log(data);
            $('#post-name').val(data.name);
            $('#post-img').val(data.img);
            $('#post-description').val(data.description);
            $('#post-id').val(data.id);
            $('#primer').attr('src', data.img);
            $('#update').on('click', updatePost);
        }
    );
}

function updatePost() {
    $.post(
        "core/core.php",
        {
            "action" : "updatePost",
            "name" : $('#post-name').val(),
            "img" : $('#post-img').val(),
            "description" : $('#post-description').val(),
            "id" : $('#post-id').val()
        },
        function(data){
            if(data==1){
                alert('Статья обновлена');
            }
            else {
                alert('Ошибка обновления');
                console.log(data);
            }
        }
    );
}