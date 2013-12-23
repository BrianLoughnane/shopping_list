$(document).ready(function(){

	$("#add").click(function(){
		var my_text = $("#entry").val();
		var my_item = $('<div class="food"></div>').text(my_text);
		$("#paper").append(my_item);
	});

	$('.food').click(function(){
		$(this).toggleClass("checked_food");
	});
});

