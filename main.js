"use strict";

const canvas = document.getElementById("canvas");
const resetButton = document.getElementById("reset-button");
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
const workingSize = document.querySelector(".working-size");

let cellSize = 32;

const canvasSizes = document.getElementsByClassName("canvas-btn");
for (let i = 0; i < canvasSizes.length; i++) {
  canvasSizes[i].addEventListener("click", function () {
    cellSize = canvasWidth / Number(this.textContent);
    console.log(cellSize);
  });
}

function setCellSize(size) {
  const cells = document.getElementsByClassName("cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].style.width = size + "px";
    cells[i].style.height = size + "px";
  }
}

// generate ranmdom # between 0 and 256
const random256 = () => {
  return Math.floor(Math.random() * 257);
};

function createGrid(size) {
  let rowCount = canvasWidth / size;
  let colCount = canvasHeight / size;

  workingSize.textContent = "Working size: " + rowCount + " x " + colCount;

  for (let i = 0; i < colCount; i++) {
    for (let i = 0; i < rowCount; i++) {
      let testCell = document.createElement("div");
      testCell.classList.add("cell");
      canvas.appendChild(testCell);
    }
  }

  setCellSize(size);
}

function randomRGBeffect() {
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    let r = random256();
    let g = random256();
    let b = random256();
    cells[i].addEventListener("mouseenter", function () {
      this.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    });
  }
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
  canvas.innerHTML = "";
  createGrid(cellSize);
  hoverEffect();
}

createGrid(cellSize);
hoverEffect();

resetButton.addEventListener("click", reset);
