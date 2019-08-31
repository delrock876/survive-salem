const wordBank = ['familiar', 'salem', 'hysteria', 'ritual', 'incantation', 'tarot', 'supernatural', 'nature', 'cauldron', 'suspicion', 'noose', 'sabbath', 'magic', 'warlock', 'rumor', 'knowledge', 'spell', 'evil', 'demon', 'witch', 'broom', 'potion']

//pick random word from array
let grabbedWord = wordBank[Math.floor(Math.random() * wordBank.length)]
let wins = 0
let guessRemain = 10
let letterGuessed = []
let underscores = []
let remainingLetters = grabbedWord.length;

console.log(grabbedWord)//comment out later


//generate underscore for # of letters in words
for (let i = 0; i < grabbedWord.length; i++) {
  underscores.push("_")
}
console.log(underscores) //comment out later

document.getElementById('wins').innerHTML = wins
document.getElementById('under').innerHTML = underscores.join(' ')
document.getElementById('guessesLeft').innerHTML = 10
document.getElementById('lettersGuessed').innerHTML = ''


//        **** MAIN GAME ****       //


document.onkeypress = function runGame(event) {
  let guessedLetter = event.key

  if (97 <= event.keyCode && event.keyCode <= 122) {

    // if(remainingLetters > 0){

    //   
    // }else {
    //   //end the game
    // }

    //grabs and replaces underscore with correctly guessed letter
    for (let j = 0; j < grabbedWord.length; j++) {
      if (grabbedWord[j] === guessedLetter) {
        underscores[j] = guessedLetter
        document.getElementById('under').innerHTML = underscores.join(' ')
        guessRemain--
        document.getElementById('guessesLeft').innerHTML = guessRemain
        remainingLetters--
      }
      // else {
      //   letterGuessed.push(guessedLetter)
      //   document.getElementById('lettersGuessed').innerHTML = letterGuessed.join(' ')
      // }

    }

  }
}
