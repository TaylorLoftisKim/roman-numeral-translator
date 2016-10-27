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
        while(counter < numberArray[numIndex]){
            processArray.push(romanBase10[x]);
            counter++;
        }
      x += 1;
    }

    return processArray;
}

var specialCases = function(numeralArray){
    var iCount = 0;
    var vCount = 0;
    var outputArray = [];

    for(var index = 0; index < numeralArray.length; index++){
      if(numeralArray[index] === 'I'){
        iCount += 1;
        console.log(iCount);
        if(iCount === 5){
          numeralArray.splice(0,5);
          numeralArray.push('V');
        }
      }
    }

  return numeralArray;
}


$(document).ready(function(){
  $("#roman-numeral").submit(function(){

    var userInput = parseInt($("#user-input").val());
    var step1 = translator(userInput);
    var output = specialCases(step1);
    console.log(output);
    event.preventDefault();
  });
});
