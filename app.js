const game1 = new Hangman('Cat', 2)

//Render the game
const renderGame = function (game) {
    
    const element = document.createElement('div')
    element.innerHTML = `
                        <h1>Wanna play Hangman?</h1>
                        <p>The word you are guessing on have ${game.word.length} letters. You have ${game.guessesAllowed} attempts to make it.</p>
                        <p>Use the keybord and press the keys you wanna guess on. Good Luck!</p>
                        <h3>Guessed Letters: ${game.guessedLetters}</h3>
                        <h3>Guesses Left: ${game.guessesAllowed} 
                        <h2>The word: ${game.getPuzzel()}</h2>
                        `
    document.querySelector('#the-game').appendChild(element)
}
renderGame(game1)

//Function for updating the game
const updateGame = function (game) {
    document.querySelector('#the-game').innerHTML = ''
    console.log(game.status)
    renderGame(game)
}

// Listen for keypress
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode((e.charCode))
    game1.makeGuess(guess)
    game1.getStatus()
    updateGame(game1)
})

// Prints status on load
window.addEventListener('load', function (e) {
    console.log(game1.status)
})