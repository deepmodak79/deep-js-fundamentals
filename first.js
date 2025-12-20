//Question:- Crate a game where you start with any random game number. Ask the user to keep guessing the game number until the users enters correct Value.  



let mainNumber=Number(prompt("Enter the main number from 1 to 10"));
let userGuess=Number(prompt("Guess the number from 1 to 10"));

//console.log(userGuess);
while(userGuess!=mainNumber){

if(userGuess<mainNumber){
    console.log("Number is small u need to enter big number that u have guess")
}
else if (userGuess>mainNumber){
    console.log("the number u gueesed is larger than the actual number")
}
    userGuess=Number(prompt("Guess the Number again"));
}

console.log("your guess is correct:",userGuess);