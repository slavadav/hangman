'use strict'
import getPuzzle from './requests'
import Hangman from './hangman'

let game

const startGame = async () => {
    const word = await getPuzzle(2)
    game = new Hangman(word, 5)
    render()
}

const puzzleElem = document.querySelector('#puzzle')
const remainedTriesElem = document.querySelector('#remain-tries')

const render = () => {
    puzzleElem.innerHTML = ''
    remainedTriesElem.textContent = game.statusMessage

    game.puzzle.split('').forEach((item) => {
        const letter = document.createElement('span')
        letter.textContent = item
        puzzleElem.appendChild(letter)
    })
}

startGame()

document.addEventListener('keypress', (e) => {
    game.makeGuess(e.key)
    render()
})

document.querySelector('#reset').addEventListener('click', startGame)