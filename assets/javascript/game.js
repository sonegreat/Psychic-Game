    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).0
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guessesleft = 0;
    var guessessofar =[];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      //var userGuessarray = []
      //for (var i = 0, n = computerGuess.length; i < n; i++){
        guessessofar.push(userGuess);

    lettersGuessedHTML.textContent = lettersGuessed;





    // when you get all 3 letters alert you won

    if (word.indexOf(userGuess) > -1) {

        alert("You guessed a correct letter");

        correct = correct + 1;
    //for (var n = 0; n < 10; n++){

      //var userGuessarray = []
     // var userGuess = event.key;
      //for (var j = 0; j < 10; j++) {
       console.log(n)
        var userGuess = event.key;
        console.log(userGuess +"    ,"+ event.key);
       //for (var i = 0, l = userGuess.length; i < l; i++){
           //for (var i = 0; i < 10; l++){
      // Reworked our code from last step to use "else if" instead of lots of if statements.

      // This logic determines the outcome of the game (win/loss), and increments the appropriate number
      //if ((userGuess === i) )

        if (userGuess === computerGuess) {
         wins++;
          alert(wins);
          //return false;
          break;
        }
        else{
            console.log("Not yet");
            userGuessarray.push (userGuess);
            
            //break;
            if( i === 9){
                console.log("i lost");
             //losses = 
             losses++;
               // return false;
               break;
            }
         //losses++;
        }   
    //}
    //}
            

        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        var html =
          "<p>You chose: " + userGuess + "</p>" +
          "<p>The computer chose: " + computerGuess + "</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left: " + guessesleft + "</p>"+
          "<p>guesses so far: " + userGuessarray  + "</p>";
          

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    }
}
    ;