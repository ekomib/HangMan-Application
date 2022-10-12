"use strict";


class HangMan {
  constructor(word, guessNUmber) {
    this.word = word.toLowerCase().split("");
    this.guess = guessNUmber;
    this.gameGuess = [];
    this.status = "playing";
  }

  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.gameGuess.includes(letter) || letter === " ";
    });
    if (this.guess === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get StatusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.guess}`;
    } else if (this.status === "failed") {
      console.log(this.status);
      return `Nice try! The word was "${this.word.join("")}"`;
    } else {
      return "Great work! You guessed the word.";
    }
  }

  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.gameGuess.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();

    const isUnique = !this.gameGuess.includes(guess);
    const badGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.gameGuess.push(guess);
    }

    if (isUnique && badGuess) {
      this.guess--;
    }

    this.calculateStatus();
  }
}
