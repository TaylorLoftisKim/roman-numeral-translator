var digitCheck = function(number){
  var isWord = number.match(/[\D]/g);
  if(isWord){
    return false;
  }
  else {
    return true;
  }
}

var valueCheck = function(number){
  var highValue = parseInt(number);
  if(highValue > 3999){
    return false;
  }
  else{
    return true;
  }
}

var translator = function(number){
    var tempString = number.toString();
    var tempArray = tempString.split("");

    numberArray = tempArray.map(function(num){
      return parseInt(num);
    });
    return numberArray;

}

$(document).ready(function(){
  $("#roman-numeral").submit(function(){

    var userInput = parseInt($("#user-input").val());
    var output = translator(userInput);
    console.log(output);
    event.preventDefault();
  });
});
