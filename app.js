const gridContainer = document.querySelector("#container");

for (let i = 1; i <= 400; i++) {
  const div = document.createElement("div");
  div.style.cssText =
    "height: 24px; width: 24px; border: solid 0.5px black; margin: 0; padding: 0";
  // div.textContent = i;
  gridContainer.appendChild(div);
}
