

    var alreadyChose = [];
    var guessesLeft = 12;
    var alphaChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var wins = 0;
    var loses = 0;
    var reset = 0;
    // var multiples = [];
    var reset = 0;
    


var userChoiceText = document.getElementById("Letter-Chose");
var userAlready = document.getElementById("Letter-Already");
var userGuessesLeft = document.getElementById("Guesses-Remain");
var userWins = document.getElementById("Wins-Gotten");
var userLoses = document.getElementById("Loses-Son");
var multiplesGuessed = document.getElementById("Multiples-Guessed");


var compChoose = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];

document.onkeyup = function(event) {
      
     var reset = 0;      

    var userGuess =  event.key.toUpperCase();   

   


if((userGuess === "A") || (userGuess === "B") ||(userGuess === "C") || (userGuess === "D") ||(userGuess === "E") || (userGuess === "F")||(userGuess === "G") || (userGuess === "H")
||(userGuess === "I") || (userGuess === "J")||(userGuess === "K") || (userGuess === "L")||(userGuess === "M") || (userGuess === "N")||(userGuess === "O") || (userGuess === "P")
||(userGuess === "Q") || (userGuess === "R")||(userGuess === "S") || (userGuess === "T")||(userGuess === "U") || (userGuess === "V")||(userGuess === "W") || (userGuess === "X")
||(userGuess === "Y") || (userGuess === "Z")) {

       
    // for(var i = 0; i < alreadyChose.length; i++) {
    //     if (userGuess != alreadyChose.indexOf[i]) {
    //         alreadyChose.push(userGuess);
    //         guessesLeft--;
    //     } else {
    //         multiplesGuessed.push(userGuess);
    //     }
    // }
    //^^^My attempt to check and see if that letter was already in the array of AlreadyChose[], and adding the repeated letter to another array, 
    //therefore not effecting the guesses, and not 



    if(userGuess === compChoose) {
        function correct() {
        wins++;
        reset++;
        }
         correct();

    }
    else if(userGuess != compChoose) {
        
     function incorrect() {
        
        alreadyChose.push(userGuess);
        guessesLeft--;
    }
    incorrect();

}
    if(guessesLeft === 0) {
        loses++;
        reset++;

    }
    if(reset > 0) {
        guessesLeft = 12;
        compChoose = alphaChoices[Math.floor(Math.random() * alphaChoices.length)];
    alreadyChose = [];
    multiplesGuessed = [];
}

console.log(userGuess);
console.log(alreadyChose);
console.log(compChoose);
}

userChoiceText.textContent = "You chose: " + userGuess;
userAlready.textContent = "Already Used Letters: " + alreadyChose;
userGuessesLeft.textContent = "Number of Guesses Remaining: " + guessesLeft;
userWins.textContent = "Wins: " + wins;
userLoses.textContent = "Losses: " + loses;
// multiplesGuessed.textContent = " " ; 

}