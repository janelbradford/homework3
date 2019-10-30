var wordChoices = ["lion", "dog", "cat", "panda", "chimpanzee", "cheetah", "parrot", "monkey", "elephant", "bird", "skunk", "panther", "mouse", "rabbit", "snake", "giraffe", "bat", "tiger", "bear", "shark", "cow", "deer"];


const maxTries = 9;
var guessedLetters = [];
var listOfWords;
var guessingWord = [];
var remainingGuesses = 0;
var completed = true;
var wins = 0;
var losses = 0;

//Function to loop the game
function resetGame() {
    remainingGuesses = maxTries;
    document.getElementById("beginningMessage").innerText = "Press any letter to play.";
    listOfWords = Math.floor(Math.random() * (wordChoices.length));
    guessedLetters = [];
    guessingWord = [];
    for (var i = 0; i < wordChoices[listOfWords].length; i++) {
        guessingWord.push("_");
    }
    gameInfo();
};

// Function of game info
function gameInfo() {

    document.getElementById("winCount").innerText = wins;
    document.getElementById("lossCount").innerText = losses;
    var guessedWord = "";
    for (var i = 0; i < guessingWord.length; i++) {
        guessedWord += guessingWord[i];
    }

    //console log

    console.log("CurrentWord:", guessedWord);
    console.log("GuessingWord:", guessingWord);
    console.log("CurrentWordIndex:", listOfWords);
    console.log("skunk:", wordChoices[listOfWords]);
    document.getElementById("currentWord").innerText = guessedWord;
    document.getElementById("remainingChances").innerText = remainingGuesses;
    document.getElementById("usedLetters").innerText = guessedLetters;
};


function repeatedLetters(letter) {

    var stringArray = [];
    console.log("Current Word Choices :", listOfWords);

    for (var i = 0; i < wordChoices[listOfWords].length; i++) {
        if (wordChoices[listOfWords][i] === letter) {
            stringArray.push(i);
        }
    }

    if (stringArray.length <= 0) {
        remainingGuesses--;
    } else {
        for (var i = 0; i < stringArray.length; i++) {
            guessingWord[stringArray[i]] = letter;
        }
    }
};

function checkWins() {
    if (guessingWord.indexOf("_") === -1) {
        wins++;
        completed = true;
        document.getElementById("beginningMessage").innerText = "Congratulations!";
    }
};



function letterCheck() {
    if (remainingGuesses = 0) {
        completed = false;
        losses++;
        document.getElementById("beginningMessage").innerText = "I think your smarter than that!";
    }
}


function letterPress(letter) {
    if (remainingGuesses > 0) {
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            repeatedLetters(letter);
        }
    }

};

document.onkeydown = function (event) {
    if (completed) {
        resetGame();
        completed = false;
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterPress(event.key.toLowerCase());
            gameInfo();
            checkWins();
            letter();
        }
    }
};    
