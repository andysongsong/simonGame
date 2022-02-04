buttonColours = ["red","blue","green","yellow"];
gamePattern = [];



function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  
}

console.log();