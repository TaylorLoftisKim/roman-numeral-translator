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

    var romanBase10 = ['I','X','C','M'];
    var tempString = number.toString();
    var tempArray = tempString.split("");
    var processArray = [];
    var counter;

    var numberArray = tempArray.map(function(num){
      return parseInt(num);
    });

    var length = numberArray.length;
    var x = 0;

    for(var numIndex = length - 1; numIndex >= 0; numIndex--){
        counter = 0;
        console.log("number Index: " + numIndex, "outPut Array: " + processArray, "numberArray: " + numberArray, "x: " + x);
        while(counter < numberArray[numIndex]){
            processArray.push(romanBase10[x]);
            counter++;
        }
      x += 1;
    };
    var reverse = processArray.reverse();
    var outputArray = reverse.join("");
    return outputArray;
};



$(document).ready(function(){
  $("#roman-numeral").submit(function(){

    var userInput = parseInt($("#user-input").val());
    var output = translator(userInput);
    console.log(output);
    event.preventDefault();
  });
});
