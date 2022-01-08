"use strict";

const canvas = document.getElementById("canvas");
const resetButton = document.getElementById("reset-button");
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

let cellSize = 32;

function setCellSize(size) {
  const cells = document.getElementsByClassName("cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.width = size + "px";
    cells[i].style.height = size + "px";
  }
}

function createGrid(size) {
  let rowCount = canvasWidth / size;
  let colCount = canvasHeight / size;

  for (let i = 0; i < colCount; i++) {
    for (let i = 0; i < rowCount; i++) {
      canvas.innerHTML += '<div class="cell"></div>';
    }
  }

  setCellSize(size);
}

function hoverEffect() {
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", function () {
      this.classList.add("hoverColor");
    });
  }
}

function reset() {
  let userCellSize = prompt("Squares per side? (8, 16, 32, or 64)");

  // cellSize affects logic in "createGrid" function
  switch (userCellSize) {
    case "8":
      cellSize = 64;
      break;
    case "16":
      cellSize = 32;
      break;
    case "32":
      cellSize = 16;
      break;
    case "64":
      cellSize = 8;
      break;
  }

  canvas.innerHTML = "";
  createGrid(cellSize);
  hoverEffect();
}

createGrid(cellSize);
hoverEffect();

resetButton.addEventListener("click", reset);
