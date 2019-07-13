var wordList = ['cremebrulee', 'castella', 'baklava', 'bingsoo', 'doughnuts',
                'daifuku', 'gelato', 'applepie', 'brownies', 'cannoli'];

// counter
var wins = 0;
var losses = 0;
var guessesLeft = 11

//variables to store values
var chosenWord= "";
var lettersInChosenWord = []
var blanks = 0;
var blanksAndCorrect = [];
var wrongGuess =[];

// // AUDIO
// var audioElement = document.createElement("audio");


// audioElement.setAttribute("src", "assets/Sugar-Maroon-5.mp3");

//     // Theme Button
//     document.getElementById('#audio-button').on("click", function() {
//         audioElement.play();
//     });
    
//     // Pause Button
//     document.getElementById('#pause-button').on("click", function() {
//         audioElement.pause();
//     });




// GAME START
function startGame() {
    //computer chooses a random word from the wordList array
    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(chosenWord);
    //breaking the chosenWord into individual/separate (arrays)letters to be analyzed
    lettersInChosenWord = chosenWord.split("");
        console.log(lettersInChosenWord);
    //store the length of the words in blanks
    blanks = lettersInChosenWord.length;
        console.log(blanks);
   //create a loop to generate "_" for each letter in the array that will store the letters
   for (var i=0; i < blanks; i++) {
       blanksAndCorrect.push("_");
       console.log(blanksAndCorrect);
   }
}


// CODE TO EXECUTE CODE
startGame ()

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);
    complete();
    console.log(userGuess);

    //display/update incorrect letters on screen
    document.getElementById('wrongGuess').innerHTML = '<strong>Letters Guessed: </strong> ' + wrongGuess.join('');
}


//RESET FUNCTION
function reset() {
   guessesLeft = 10;
   wrongGuess = [];
   blanksAndCorrect = [];
   blanks =0;
   startGame()
}

//COMPARE LETTERS
//check if letter selected by user matches the computer chosen word
function checkLetters(letter) {
    var lettersInChosenWord = false;
    // true is true if letter entered is in chosenWord
    for (var i=0; i < blanks; i++) {
        if (chosenWord[i] === letter) {
            lettersInChosenWord = true;
        }
    }

    // if letterInChosenWord = false
    if (lettersInChosenWord) {
        //check each letter to see if it is in the chosenWord
        for (var i=0; i < blanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else {
        wrongGuess.push(letter);
        guessesLeft--;
        console.log(blanksAndCorrect);
    }
}

//SCOREBOARD
function complete() {
    console.log('Wins: ' + wins + '| Losses: ' + losses + '| Guesses left:' + guessesLeft);

    //if the play wins (guessed the word before guessesLeft=0)
    if (lettersInChosenWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        reset()
        alert('WoW! Great job!');
        document.getElementById('wins').innerHTML = '<strong>Wins: </strong> ' + wins;
    }

    else if (guessesLeft === 0) {
        losses++;
        reset()
        alert('Nice try!');
        document.getElementById('losses').innerHTML = '<strong>Losses: </strong>' + losses;
    }
    // display blanks of chosenWord
    document.getElementById('chosenWord').innerHTML = ' ' + blanksAndCorrect.join(" ");
    // display guessesLeft
    document.getElementById('guessesLeft').innerHTML = '<strong># of Guesses Left: </strong>' + guessesLeft;
}
