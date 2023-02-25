class GuessingGame {
    constructor() {}
 
    setRange(min, max) {
        this.min = min
        this.max = max
    }
 
    guess() {
        this.guessNum = (Math.round(this.min + this.max) / 2)
        return this.guessNum
    }
 
    lower() {
        this.max = this.guessNum
        return this.max
    }
 
    greater() {
        this.min = this.guessNum
        return this.min

    }
 }
 
 module.exports = GuessingGame;
