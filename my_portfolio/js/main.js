$(document).ready(function(){
	getAllPosts();
});

function getAllPosts(){
	$.post(
		"core/core.php",
		{"action" : "getAllPosts"},
		function (data){
			data = JSON.parse(data);
			console.log(data);
			var out='';
			for (var key in data){
				out+=`
					<div class="post-main">
						<a href="post.html?id=${key}">${data[key].name}</a>
						<img src="${data[key].img}" alt="Название class="responsive-img">
					</div>
				`;
			}
			$('main').html(out);
		}
	);
}