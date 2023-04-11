const container = document.querySelector(".container");


function makeGrid(numSquares) {
    // Clear the container
    container.textContent = "";
  // Calculate the width of each square based on the number of squares
  // that is given in each row and column
  const squareWidth = 100 / numSquares;
 
  // Create new squares and add them to the container
  for (let i = 0; i < numSquares * numSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareWidth}%`;
    square.style.paddingBottom = `${squareWidth}%`;
    container.appendChild(square);
  }
}

makeGrid(16);

function paintSquare(){
  const square = document.querySelectorAll(".square");
  square.forEach(square => {
    square.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "black";
    });
  });
};
paintSquare();

const blackBtn = document.querySelector(".black-button");
blackBtn.addEventListener("click",paintSquare);


function askNumber(){
  let squareNumber = prompt("Pick a number between 1 and 100.", 16);
  if(squareNumber >= 1 && squareNumber <= 100){
    makeGrid(squareNumber);
    paintSquare();
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

const resetBtn =  document.querySelector(".reset-button") 
resetBtn.addEventListener("click",askNumber)


function getRandomHex() {
  const hexChars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return '#' + result;
}

getRandomHex();

function paintRainbow() {
  const square = document.querySelectorAll(".square");
  square.forEach(square => {
    square.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = getRandomHex();
    });
  });
};

const rainbowBtn = document.querySelector(".rainbow-button");
rainbowBtn.addEventListener("click",paintRainbow);