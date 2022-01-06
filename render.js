import { sendAttack } from "./logic.js";

function prepareDOM(board) {
  const grid = document.getElementsByClassName("gridContainer");
  for (let i = 0; i <= 99; i++) {
    const cell = document.createElement("div");
    const cell2 = document.createElement("div");
    cell.classList.add("cell");
    cell2.classList.add("cell");
    cell2.addEventListener("click", clickCell);
    grid[0].appendChild(cell);
    grid[1].appendChild(cell2);
  }

  let cells = grid[0].children;
  for (let i = 0; i <= 99; i++) {
    if (board[i] && board[i].type) {
      cells[i].classList.add(board[i].type);
    } else if (board[i] == null) {
      cells[i].classList.add("water");
    }
  }

  cells = grid[1].children;
  Array.from(cells).forEach((e) => e.classList.add("unknown"));
}

function clickCell(e) {
  const cell = e.target;
  sendAttack(Array.from(cell.parentNode.children).indexOf(cell));
}

function setTurn(turn) {
  let display = document.querySelector(".display");
  display.textContent = `It's the turn of ${turn}`;
}

export { prepareDOM, setTurn };
