// accessing elements
let boxes = document.querySelectorAll(".box");
let turnO = true;
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector("#new-btn");
let winnerDiv = document.querySelector(".winner");
let count = 0;
let isWinner;

let winPatterns = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

// clicking the box and generating X or O on them alternatively
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;
    console.log(isWinner);
    // if (count === 9 && !isWinner) {
    //   winnerDiv.style.display = "flex";
    //   msg.innerText = "Match was draw";
    // }
  });
});

// new game button
newGameBtn.addEventListener("click", () => {
  winnerDiv.style.display = "none";
  count = 0;
  console.clear();
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    turnO = true;
  });
});

//game reset button
resetBtn.addEventListener("click", () => {
  winnerDiv.style.display = "none";
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
    turnO = true;
    count = 0;
    console.clear();
  });
});

// checking winning pattern boxes and their inner texts are equal or not
function checkWinner() {
  winPatterns.forEach((pattern) => {
    box1 = boxes[pattern[0]].innerText;
    box2 = boxes[pattern[1]].innerText;
    box3 = boxes[pattern[2]].innerText;

    if (box1 !== "" && box2 !== "" && box3 !== "") {
      if (box1 === box2 && box1 === box3) {
        boxes.forEach((box) => {
          box.disabled = true;
        });
        winnerDiv.style.display = "flex";
        msg.innerText = `Congrats winner is ${box1}`;
        isWinner = true;
      }
    }
  });
}
