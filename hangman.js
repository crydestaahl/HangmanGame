function log(params) {
    console.log(JSON.stringify(params, null, 4))
} 

const Hangman = function (word, guessesAllowed,) {
    this.word = word.toLowerCase().split('')
    this.guessesAllowed = guessesAllowed 
    this.guessedLetters = []
}

Hangman.prototype.getPuzzel = function () {
    let puzzel = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzel += letter
        } else {
            puzzel += '*'
        }
    })
    return puzzel
}

Hangman.prototype.makeGuess = function (guessedLetter) {
    const letter = guessedLetter.toLowerCase()
    const isUnique = !this.guessedLetters.includes(letter)
    const isBadGuess = !this.word.includes(guessedLetter)

    if (isUnique) {
        this.guessedLetters.push(letter)
    } else {
        alert('You have already guessed on that letter')
    }

    if (isUnique && isBadGuess) {
        this.guessesAllowed--
    }

}


// 1. Display the puzzel in the browser
// 2. Displat the guesses left
// 3. Seperate the Hangman definition from the rest of the app code (use app.js)
