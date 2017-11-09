$(document).ready(function(){
	$('#art-img').on('input', function(){
		$('#img-prim').attr('src',$('#art-img').val() );
	})
	$('button#add-post').on('click', function(){
		$.post(
			"core/core.php", 
			{
				"action" : "addSinglePost",
				"name" : $('#art-name').val(),
				"img" : $('#art-img').val(),
				"description" : $('#art-description').val()
			},
			function(data){
				if(data==1){
					alert('Статья добавлена');
					$('#art-name').val('');
					$('#art-img').val('');
					$('#art-description').val('');
					$('#img-prim').attr('src','');

				}
				else {
					alert('Ошибка добавления.Смотрите консоль');
					console.log(data);

				}
			}
			);

	})
});