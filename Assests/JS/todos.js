// Check off specific Todos By Clicking
// this - refers to the specific li that was clicked
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todd
$("ul").on("click", "span", function(event){
	// this.parent is used to select the li wrt to the corressponding X
	$(this).parent().fadeOut(500, function(){
		//helps to remove the hidden elements after fading out
		$(this).remove();
	});
	//click event on the span was firing the events on the li as well, after it fired the span event (leading to a bubbling of elements) to fix this we use stopPropagation
	event.stopPropagation();
});

//adding new Todos
$("input[type='text']").keypress(function(event){
	//event to act upon enter key press
	if (event.which === 13) {
		//grabbing the new todo text from input
		var todoText = $(this).val();
		// code to clear the input text
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});