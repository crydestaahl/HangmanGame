const game1 = new Hangman('Cat', 2)

//Render the game
const renderGame = function (game) {
    
    const element = document.createElement('div')
    element.setAttribute('id', 'game-text')
    element.innerHTML = `
                        <h1>Wanna play Hangman?</h1>
                        <p>The word you are guessing on have ${game.word.length} letters. You have ${game.guessesAllowed} attempts to make it.</p>
                        <p>Use the keybord and press the keys you wanna guess on. Good Luck!</p>
                        <h3 id="guessed-letters">Guessed Letters: ${game.guessedLetters}</h3>
                        <h3 id="guesses-left">Guesses Left: ${game.guessesAllowed}</h3> 
                        <h2 id="the-word">The word: ${game.getPuzzel()}</h2>
                        `
    document.querySelector('#the-game').appendChild(element)
}
//Starts the game
renderGame(game1)

//Function for updating the game
const updateGame = function (game) {
    document.querySelector('#the-game').innerHTML = ''
    renderGame(game)
}
//Function for failing
const renderFailed = function (game) {
    const h2 = document.querySelector('#the-word')
    const guessesLeft = document.querySelector('#guesses-left')
    guessesLeft.innerHTML = 'Guesses Left: 0'
    h2.innerHTML = `Aahh, you got hanged!<br> The correct word was: ${game.word.join('').toUpperCase()}`
}

//Function for winning
const renderFinished = function (game) {
    const h2 = document.querySelector('#the-word')
    const guessesLeft = document.querySelector('#guesses-left')
    const guessedLetters = document.querySelector('#guessed-letters')
    guessedLetters.innerHTML = `Guessed Letters: ${game.guessedLetters}`
    guessesLeft.innerHTML = `Guesses Left: ${game.guessesAllowed}`
    h2.innerHTML = `Congrats, you survived!<br> The correct word was indeed: ${game.word.join('').toUpperCase()}`
}

// Listen for keypress
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode((e.charCode))
    game1.makeGuess(guess)
    game1.getStatus()

    if (game1.status === 'playing') {
        updateGame(game1)
    }

    if (game1.status === 'Failed') { 
        renderFailed(game1) 
    } 
    if (game1.status === 'Finished') { 
        renderFinished(game1) 
    } 
})

//Listens for klick on button
document.querySelector('button').addEventListener('click', function (e) {
    location.reload()
})

// Prints status on load
window.addEventListener('load', function (e) {
    console.log(game1.status)
})