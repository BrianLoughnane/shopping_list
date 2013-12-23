$(document).ready(function(){

	$("#add").click(function(){
		var my_text = $("#entry").val();
		var my_item = $('<div class="food"></div>').text(my_text);
		my_item.on('click', function(){
			$(this).toggleClass("checked_food");
		});
		$("#wrap").append(my_item);
	});

		$("div.food").click(function(){
			$(this).toggleClass("checked_food");
	});
});

