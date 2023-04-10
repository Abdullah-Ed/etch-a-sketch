const container = document.querySelector(".container")


function makeGrid(){
  for(let i = 0; i < 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

makeGrid();

const square = document.querySelectorAll(".square");
function paintSquare(){
  square.forEach(square => {
    square.addEventListener("mouseover", event => {
      event.target.style.backgroundColor = "black";
    });
  });
};

paintSquare();