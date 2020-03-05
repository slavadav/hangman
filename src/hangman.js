'use strict'

class Hangman {
    constructor(word, tries = 10, status = 'playing') {
        this.word = word.toLowerCase().split('')
        this.tries = tries
        this.status = status
        this.guessed = []
    }

    makeGuess(guess) {
        if (this.status !== 'playing') return

        if (!this.guessed.includes(guess)) {
            this.guessed.push(guess)
            if (!this.word.includes(guess)) this.tries--
        }

        this.calculateStatus()
    }

    get puzzle() {
        let answer = ''
        this.word.forEach((letter) => {
            if (this.guessed.includes(letter) || letter === ' ') {
                answer += letter
            } else answer += '*'
        })
        return answer
    }

    calculateStatus() {
        if (this.word.every((letter) => this.guessed.includes(letter) || letter === ' ')) this.status = 'finished'
        if (this.tries === 0) this.status = 'failed'
    }

    get statusMessage() {
        if (this.status === 'finished') return `You win!!!`
        else if (this.status === 'failed') return `You lose!!! The word was '${this.word.join('')}'. Try again.`
        else return `Remain ${this.tries} tries`
    }
}

export { Hangman as default }