class GuessingGame {
    constructor() {}
 
    setRange(min, max) {
        this.min = min
        this.max = max
    }
 
    guess() {
       return  this.guessNum = (Math.round(this.min + this.max) / 2)
        
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
