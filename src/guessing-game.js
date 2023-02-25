class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNum = this.min + Math.round((this.max - this.min) / 2);
        return this.guessNum;
    }

    lower() {
        this.max = this.guessNum;
    }

    greater() {
        this.min = this.guessNum;
    }
}

module.exports = GuessingGame;
