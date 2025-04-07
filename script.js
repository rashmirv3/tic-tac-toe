let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg");
let msg = document.querySelector("#winmsg");

let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const showwinner = (winner) => {
  msg.innerText = `Congratulation winner is ${winner}`;
  msgcontainer.classList.remove("hide");
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const checkwinner = () => {
  for (pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        console.log("winner", pos1val);
        disableboxes();
        showwinner(pos1val);
      }
    }
  }
};

const resetgame = () => {
  turn0 = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
