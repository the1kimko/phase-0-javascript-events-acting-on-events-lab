// Your code here
// index.js

const dodger = document.getElementById("dodger");

// Ensure dodger has an initial position
dodger.style.left = dodger.style.left || "0px";

// Move Dodger to the Left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Move Dodger to the Right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameFieldWidth = 400; // Assuming the width of the game field is 400px
  const dodgerWidth = 40; // Width of the dodger (40px)

  // Ensure the dodger doesn't go past the right edge of the game field
  if (left + dodgerWidth < gameFieldWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

// Keydown Event Listener for ArrowLeft
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

// Keydown Event Listener for ArrowRight
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
