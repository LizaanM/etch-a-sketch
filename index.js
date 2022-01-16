"use strict";

function changeSquareColor(event) {
  if (state === "draw") {
    event.target.style.backgroundColor = "#000";
  } else {
    event.target.style.backgroundColor = "#d3eafc";
  }
}

function makeSquares(squaresPerSide) {
  const numSquares = squaresPerSide * squaresPerSide;
  for (let i = 0; i < numSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("tile");
    div.addEventListener("mouseover", changeSquareColor);
    grid.appendChild(div);
  }
}

function getNumSquares() {
  //get numbet of squares per side as input from user
  let numSquares = null;
  while (true) {
    numSquares = Number(
      prompt("Squares per side(click OK or Cancel to default to 80): ")
    );
    if (isNaN(numSquares)) {
      alert("Please enter a number...");
    } else {
      if (!numSquares) {
        //set a default
        numSquares = 80;
      } else if (numSquares > 100) {
        alert("Maximum number of squares is 100.");
        numSquares = 100;
      }
      break;
    }
  }
  return numSquares;
}

function drawGrid() {
  removeGrid();
  const squaresPerSide = getNumSquares();
  makeSquares(squaresPerSide);

  const gridWidth = Number(grid.style.width.replace("px", ""));
  const tileWidth = gridWidth / squaresPerSide;
  const template = `repeat(${squaresPerSide}, ${tileWidth}px)`;

  grid.style.gridTemplateColumns = template;
  grid.style.gridTemplateRows = template;
}

function removeGrid() {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
}

function toggleState(event) {
  //toggle state beteen "draw" and "erase"
  const newState = event.target.textContent.toLowerCase();
  state = newState;
}

let state = "draw";

const grid = document.querySelector(".grid");
grid.style.display = "grid";
grid.style.width = "480px";

const drawBtn = document.querySelector("#draw-btn");
drawBtn.addEventListener("click", toggleState);

const refreshBtn = document.querySelector("#refresh-btn");
refreshBtn.addEventListener("click", drawGrid);

const eraseBtn = document.querySelector("#erase-btn");
eraseBtn.addEventListener("click", toggleState);
