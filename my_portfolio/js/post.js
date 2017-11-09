$(document).ready(function(){
	getSinglePost();
});

function getSinglePost(){
	$.post(
		"core/core.php",
		{
			"action" : "getSinglePost", 
			"id": getParameterByName('id')
		},
		function (data){
			data = JSON.parse(data);
			console.log(data);
			var out='';
			out+=`
				<div class="post-single">
				<a href="post.html?id=${data.id}"><h1>${data.name}</h1></a>
				<img src="${data.img}" alt="Название">
				<div class="description">${data.description}</div>
				</div>`;
			$('main').html(out);
		}
	);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}