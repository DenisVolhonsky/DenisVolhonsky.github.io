$(document).ready(function() {
    getAllPosts();
});
// файл json находится на сервере
function getAllPosts() {
    $.post(
        "core/core.php", //относительно index.html()
        {"action": "getAllPosts"},
        function (data) {
            data = JSON.parse(data); //преобразовали строку в массив
            console.log(data);
            var out = '';
            for(var key in data) {
                out+=`
                    <div class="post-main">
			            <a href="post.html?id=${key}">${data[key].name}</a>
			            <img src="${data[key].img}" alt="Название">
		            </div>
                `;
            }
            $('main').html(out);
        }
    );
}

