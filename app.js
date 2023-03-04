const gridContainer = document.querySelector("#container");
let gridSize = 20;
let containerSize = 960;
pixelBorder = 0.5;
let pixel = containerSize / gridSize - 2 * pixelBorder; // height and width of the grids .grid
let color = colorGrid;

const reset = document.querySelector("#reset");
reset.addEventListener("click", createGrid);

const setGrid = document.querySelector("#set-grid");
setGrid.addEventListener("click", () => {
  gridSize = prompt("Grid size: ", 20);
  pixel = containerSize / gridSize - 2 * pixelBorder;
  createGrid();
});

function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}

function createGrid() {
  deleteGrids();
  gridContainer.style.cssText = `width: ${containerSize}px; height: ${containerSize}px`;
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.cssText = `width: ${pixel}px; height: ${pixel}px`;
    gridContainer.appendChild(div);
  }
  color();
}

function deleteGrids() {
  allGrid = document.querySelectorAll(".grid");
  allGrid.forEach((grid) => {
    gridContainer.removeChild(grid);
  });
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
