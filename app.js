/********************************************** */
// Kommande uppdatering
/********************************************** */

/********************************************** */
// Nuvarande version
/********************************************** */


const fetchMovie = function (randomNumber) {
    return fetch(`https://api.themoviedb.org/3/movie/${randomNumber}?api_key=c0214887d1f0be2d8331d47e9b34bd84`)
}

const getMovie = json => {
    const games = json 
    
    const game = {
             word: games.title,
             tries: games.title.length / 2 - 2,
             clue: games.overview
         }
    console.log(game.title)
    return game
}


const randomNumber = Math.floor(Math.random() * 950) + 100;
fetchMovie(randomNumber)    
    .then(res => res.json())
    .then(json => {

        const data = getMovie(json);
        
        console.log(data)

        const game = new Hangman(data.word, data.tries, data.clue)
        renderGame(game)

        // Listen for keypress
        window.addEventListener('keypress', function (e) {
            const guess = String.fromCharCode((e.charCode))
            game.makeGuess(guess)
            game.getStatus()

            if (game.status === 'playing') {
                updateGame(game)
            }
            if (game.status === 'Failed') {
                renderFailed(game)
            }
            if (game.status === 'Finished') {
                renderFinished(game)
            }
        })

        //Listens for klick on button
        document.querySelector('button').addEventListener('click', function (e) {
            location.reload()
        })

    })
    .catch(err => {
        
    })

const renderGame = function (game) {

    const element = document.createElement('div')
    element.setAttribute('id', 'game-text')
    element.innerHTML = `
                        <h1>Wanna play Hangman - The Movie?</h1>
                        <p>The movie I'm looking for contains ${game.word.length} letters. You have ${game.guessesAllowed} attempts to make it.</p>
                        <p>Here's a clue: ${game.clue}</p>
                        <p>Use the keybord and press the keys for the letter you'd like to guess on.<br></p>
                        <p>Good Luck!</p>
                        <h3 id="guessed-letters">Guessed Letters: ${game.guessedLetters}</h3>
                        <h3 id="guesses-left">Guesses Left: ${game.guessesAllowed}</h3> 
                        <h2 id="the-word">The word: ${game.getPuzzel()}</h2>
                        `
    document.querySelector('#the-game').appendChild(element)

    // Prints status on load
    window.addEventListener('load', function (e) {
        console.log(game.status)
    })
}
//Starts the game


// renderGame(game)

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
    h2.innerHTML = `Aahh, you got hanged!<br> The correct movie was: ${game.word.join('').toUpperCase()}`
}

//Function for winning
const renderFinished = function (game) {
    const h2 = document.querySelector('#the-word')
    const guessesLeft = document.querySelector('#guesses-left')
    const guessedLetters = document.querySelector('#guessed-letters')
    guessedLetters.innerHTML = `Guessed Letters: ${game.guessedLetters}`
    guessesLeft.innerHTML = `Guesses Left: ${game.guessesAllowed}`
    h2.innerHTML = `You lucky son of a bitch, you survived!<br>The movie we were looking for was indeed: ${game.word.join('').toUpperCase()}`
}





// const games = getMovie()
// [

//     {
//         word: 'Cat',
//         tries: 2,
//         clue: 'Satans fury companions'
//      },
//     {
//         word: 'Door',
//         tries: 6,
//         clue: 'Open this ... for endles knowledge'
//     },
//      {
//         word: 'Hoover',
//         tries: 10,
//         clue: 'This is how Satan moves'
//      },
//      {
//         word: 'Lucifer',
//         tries: 8,
//         clue: 'The name of the devil'
//     },
//      {
//         word: 'Agony',
//         tries: 9,
//         clue: 'A state of mind'
//      },
//     {
//         word: 'Violence',
//         tries: 10,
//         clue: "Satan's favorit topic"
//      },
//      {
//         word: 'Wine',
//         tries: 8,
//         clue: 'Floats in Jesus veins'
//      },
//  ]

// const randomGame = games[Math.floor(Math.random() * games.length)]

// const game = new Hangman(randomGame.word, randomGame.tries, randomGame.clue)

// const game = new Hangman(games.word, games.tries, games.clue)
//Render the game

