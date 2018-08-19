    
    var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    var wins = 0;
    var losses = 0;
    var guessesleft = 9;
    var guessessofar =[];
    var computerGuess = [];

    function startgame(){

    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
    guessessofar=[]
    guessesleft=9
    console.log(guessesleft)
}
startgame();
    
    document.onkeyup = function(event) {

        

        var userGuess = event.key;
    
        guessessofar.push(userGuess)

        if (computerGuess.indexOf(userGuess)> -1){
            wins++;
            startgame();
        }
        else  {
            console.log(guessesleft);
            guessesleft = guessesleft - 1;

            console.log("after"+guessesleft);

            if(guessesleft==0){
                 
                losses++;
                startgame();
            }
        
        }
        var html =
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>guesses left: " + guessesleft + "</p>"+
          "<p>guesses so far: " + guessessofar  + "</p>";
          

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    }