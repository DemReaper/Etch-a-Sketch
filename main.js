"use strict";

const canvas = document.getElementById("canvas");
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

createGrid(cellSize);
hoverEffect();
