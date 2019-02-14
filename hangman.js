function log(params) {
    console.log(JSON.stringify(params, null, 4))
} 

const Hangman = function (word, guessesAllowed,) {
    this.word = word.toLowerCase().split('')
    this.guessesAllowed = guessesAllowed 
    this.guessedLetters = []
    this.status = this.getStatus()
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

Hangman.prototype.getStatus = function () {
    
    if (!this.getPuzzel().includes('*')) {
        renderGame(game1)
        return this.status = 'Finished'
    } else if (this.guessesAllowed <= 0) {
        renderGame(game1)
        return this.status = 'Failed' 
    } else {
        return this.status = 'playing'
    }
}