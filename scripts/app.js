const puzzleElement = document.querySelector("#puzzle");
const guessEl = document.querySelector("#guesses");
let hangOne;



window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  hangOne.makeGuess(guess);
  render();
  console.log(hangOne.status);
});

const render = () => {
  // puzzleElement.textContent = hangOne.puzzle;
  puzzleElement.innerHTML = "";
  guessEl.textContent = hangOne.StatusMessage;

  hangOne.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleElement.appendChild(letterEl);
  });
};
const startGame = async () => {
  const puzzle = await getPuzzle("2");
  hangOne = new HangMan(puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

