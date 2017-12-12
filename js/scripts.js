
var pingpongArrays= function(userInput) {
	var resultArray = [];
	for(var i = 1; i <= userInput; i += 1) {
		if(((i % 3) === 0) && ((i % 5) === 0)) {
			resultsArray.push("pingpong");
		} else if ((i % 3) === 0) {
			resultsArray.push("ping");
		} else if ((i % 5) === 0) {
			resultsArray.push("pong");
		} else {
			resultsArray.push(i);
		}
	}
	return resultsArray;
}


$(document).ready(function() {

$("#submit-button").click(function(event) {
		event.preventDefault();

		var userInput = parseInt($("#user-input").val());
		$("#apend-result").empty();
		var resultsArray = pingpongArrays(userInput);
  	$("#apend-result").text(resultsArray);
  });
});
