"use strict";

const grid = document.querySelector(".grid");

for (let i = 0; i < 16; i++) {
  const div = document.createElement("div");
  div.classList.add("tile");
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "white";
  });
  grid.appendChild(div);
}
