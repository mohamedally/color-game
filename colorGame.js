let numOfSquares = 6;
let colors = [];
let pickedColor;

let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton =  document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {

    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons () {
    // mode buttons event listeners
    for (let i=0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            // figure out how many squares to show
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }

}

function setUpSquares () {
    for(let i=0; i < squares.length; i++) {

        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab color of picked square
            let clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else
            {
                this.style.backgroundColor  = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }

}


function reset() {
    // generate new colors
    colors = generateRandomColors(numOfSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // chnafe colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    // change color of squares
    for(let i=0; i < squares.length; i++) {
        if (colors[i])
        {
           squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i]; 
        }
        else{
            squares[i]. style.display = "none";
        }
        
        h1.style.backgroundColor = "steelblue";
    }

}

resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    // loop through all the colors
    for(let i=0; i < squares.length; i++) {
        // change style to given color
        squares[i].style.backgroundColor = color;
    }
    
    
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    let array = [];

    //add num random colors to array
    for (let i=0; i < num; i++) {
        // get random color and push it to array
        array.push(randomColor());
    }

    // return that array
    return array;
}

function randomColor () {
    // pick a red from 0 to 255
    let r = Math.floor(Math.random()* 256);
    // pick a green from 0 to 255
    let g = Math.floor(Math.random()* 256);
    // pick a blue from 0 to 255
    let b = Math.floor(Math.random()* 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}