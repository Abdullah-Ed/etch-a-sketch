const container = document.querySelector(".container")


function makeGrid(numSquares) {
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

makeGrid(5);

const square = document.querySelectorAll(".square");
function paintSquare(){
  square.forEach(square => {
    square.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "black";
    });
  });
};

paintSquare();

