const gridContainer = document.querySelector("#container");
let gridSize = 20;
const containerSize = 800; //px
let color = colorGrid;

const setGrid = document.querySelector("#set-grid");
setGrid.addEventListener("click", () => {
  gridSize = prompt("Grid size (max 100): ", 20);
  if (gridSize > 100) {
    gridSize = 100;
  }
  createGrid();
});

const blackColor = document.querySelector("#color-black");
blackColor.addEventListener("click", () => {
  color = colorGrid;
  color();
});

const rainbowColor = document.querySelector("#color-rainbow");
rainbowColor.addEventListener("click", () => {
  color = colorGridRandom;
  color();
});

function randomNumber(num) {
  return Math.floor(Math.random() * (num + 1));
}

function createGrid() {
  deleteGrids();
  gridContainer.style.cssText = `
  width: ${containerSize}px;
  height: ${containerSize}px;
  grid-template-columns: repeat(${gridSize}, 1fr);
  grid-template-rows: repeat(${gridSize}, 1fr);
  `;
  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    gridContainer.appendChild(div);
  }
  color();
}

// delete all existing grid before create a new grid
function deleteGrids() {
  allGrid = document.querySelectorAll(".grid");
  allGrid.forEach((grid) => {
    gridContainer.removeChild(grid);
  });
}

// clears the grid with the create function
const reset = document.querySelector("#reset");
reset.addEventListener("click", createGrid);

// adds black color style to the grid
function colorGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.style.backgroundColor = "black";
    });
  });
}

// adds random color style to the grid
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

// create starting page with default values
createGrid();
