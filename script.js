$(document).ready(function(){
	$("#add").click(function(){
		var my_text = $("#entry").val();
		var my_item = $('<div class="food"></div>').text(my_text);

		my_item.on('click', function(){
			$(this).toggleClass("checked_food");
		});

		my_item.on('dblclick', function(){
			$(this).fadeOut('slow');
		});

		if (my_text!=""){$("#wrap").append(my_item);}

		else{alert("Type an item in before you add it.")}
	});
  
  $(document).keypress(function(e){
    if(e.which == 13){
    	var my_text = $("#entry").val();
			var my_item = $('<div class="food"></div>').text(my_text);

			my_item.on('click', function(){
				$(this).toggleClass("checked_food");
			});

			my_item.on('dblclick', function(){
				$(this).fadeOut('slow');
			});

			if (my_text!="")
			{
				$("#wrap").append(my_item);
			}

			else 
			{
				alert("Type an item in before you add it.")
			}
    }
	});
});


	

	//this is so the first sample item behaves like the rest
		//$("div.food").click(function(){
			//$(this).toggleClass("checked_food");
		//});

		//$("div.food").dblclick(function(){
			//$(this).hide("slow");
		//});

