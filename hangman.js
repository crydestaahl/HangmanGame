
// class Hangman {
//     constructor(word, guessesAllowed, clue) {
//         this.word = word.toLowerCase().split('')
//         this.guessesAllowed = guessesAllowed
//         this.guessedLetters = []
//         this.status = this.getStatus()
//         this.clue = clue
//     }
//     getPuzzle() {
//         let puzzel = ''

//         this.word.forEach((letter) => {
//             if (this.guessedLetters.includes(letter) || letter === ' ') {
//                 puzzel += letter
//             } else {
//                 puzzel += '*'
//             }
//         })
//         return puzzel
//     }
//     makeGuess(guessedLetter) {
//         const letter = guessedLetter.toLowerCase()
//         const isUnique = !this.guessedLetters.includes(letter)
//         const isBadGuess = !this.word.includes(guessedLetter)

//         if (isUnique) {
//             this.guessedLetters.push(letter)
//         } else {
//             alert('You have already guessed on that letter')
//         }

//         if (isUnique && isBadGuess) {
//             this.guessesAllowed--
//         }
//     }
//     getStatus() {
//         if (!this.getPuzzel().includes('*')) {
//             return this.status = 'Finished'
//         } else if (this.guessesAllowed < 0) {
//             return this.status = 'Failed'
//         } else {
//             return this.status = 'playing'
//         }
//     }
// }











const Hangman = function (word, guessesAllowed, clue) {
    this.word = word.toLowerCase().split('')
    this.guessesAllowed = guessesAllowed 
    this.guessedLetters = []
    this.status = this.getStatus()
    this.clue = clue
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
        return this.status = 'Finished'
    } else if (this.guessesAllowed < 0) {
        return this.status = 'Failed' 
    } else {
        return this.status = 'playing'
    }
}