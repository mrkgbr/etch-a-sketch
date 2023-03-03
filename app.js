const gridContainer = document.querySelector("#container");
let gridSize = 20;
let pixel = 15;
let containerSize = gridSize * pixel;

const reset = document.querySelector("#reset");
reset.addEventListener("click", createGrid);

const setGrid = document.querySelector("#set-grid");
setGrid.addEventListener("click", () => {
  gridSize = prompt("Grid size: ", 20);
  containerSize = gridSize * pixel;
  createGrid();
});

function deleteGrids() {
  allGrid = document.querySelectorAll(".grid");
  allGrid.forEach((grid) => {
    gridContainer.removeChild(grid);
  });
}

function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}

function createGrid() {
  deleteGrids();
  gridContainer.style.cssText = `width: ${containerSize}px; height: ${containerSize}px`;
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    gridContainer.appendChild(div);
  }
  colorGridRandom();
}

function colorGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}
function colorGridRandom() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = `rgb(${randomNumber(256)}, ${randomNumber(
        256
      )}, ${randomNumber(256)})`;
    });
  });
}

createGrid();
