$( document ).ready(function(){
	var colour = 0;
	
	function changeColour(){
		console.log("clicked");
		if(colour%3 == 0){
			$("#light").attr("class","yellow");
		} else if(colour%3 == 1){
			$("#light").attr("class","green");
		} else if(colour%3 == 2){
			$("#light").attr("class","red");
		}
		colour++;
		console.log(colour);
	}
	
	$("#light").click(changeColour);

});