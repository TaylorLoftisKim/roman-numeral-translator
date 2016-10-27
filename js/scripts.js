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

    var romanArray = ['I','X','C','D','M'];
    var tempString = number.toString();
    var tempArray = tempString.split("");
    var outputArray = [];
    var counter = 0;

    numberArray = tempArray.map(function(num){
      return parseInt(num);
    });

    var length = numberArray.length;
    for(var numIndex = length; numIndex >= 0; numIndex--){
      console.log(numIndex);
      for(var romanIndex = 0; romanIndex < romanArray.length; romanIndex++){
        while(counter < numberArray[numIndex]){
          outputArray.push(romanArray[romanIndex]);
          counter++;
        }
      }

    }
    return outputArray;
}



$(document).ready(function(){
  $("#roman-numeral").submit(function(){

    var userInput = parseInt($("#user-input").val());
    var output = translator(userInput);
    console.log(output);
    event.preventDefault();
  });
});
