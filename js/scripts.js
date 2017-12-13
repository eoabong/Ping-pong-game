var pingpongArray = [];
// backend stuff
function pingPong(inputNumber){
for(var number = 1; number <=inputNumber; number++){
  if(number %15 === 0){
    pingpongArray.push("Ping Pong");
  }else if (number %5 ===0){
    pingpongArray.push("pong");
  }else if (number %3 === 0){
    pingpongArray.push("ping");
  }else {
    pingpongArray.push(number);
  }
}
}




//front-end
$document.ready(function(){
  $("form#main-form").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt("input#user-input").val();
    pingPong(inputNumber);
// append on HTML form
    pingpongArray.forEach(function(number){
      $("#apend-result").append("<li>"+inputNumber+"</li>");
    });
  });
});
