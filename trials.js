var trialToOne = function(){
  var input = document.getElementById('trial_number').value, steps = 0;
  var trial_number = input;
//  console.log(input);
  while(input!=1){
    input = (input%2==0)?input/2:3*input+1;
    steps+=1;
  }
  var result = document.getElementById('stepsToOne');
  result.innerText = "No of Steps for trial number "+ trial_number +" is "+steps;
}
