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
    // var numericalArry = ['1', '10', '100', '1000'];
    var tempString = number.toString();
    var tempArray = tempString.split("");
    var outputArray = [];
    var counter;

    numberArray = tempArray.map(function(num){
      return parseInt(num);
    });

    var length = numberArray.length;
    for(var numIndex = length; numIndex >= 0; numIndex--){
        while(counter < numberArray[numIndex]){
          outputArray.push(romanArray[romanIndex]);
          counter++;
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
