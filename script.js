const allBalls = document.querySelectorAll('.ball');
const textRgbColor = document.querySelector('#rgb-color');
const textAnswer = document.querySelector('#answer');
const btnResetGame = document.querySelector('#reset-game');
const divBalls = document.querySelector('#div-balls');
const yourScore = document.querySelector('#score span');
console.log(yourScore.innerText);

window.onload = () => {
  randomColor();
  addRandomColor();
  changeTextRgbColor();
  verifyClickedCorrect();
  score();
}

/////////////////////////////////////////////////
// Select a random color
function randomColor() {
  let firstNumber = Math.floor(Math.random() * 256)
  let secondNumber = Math.floor(Math.random() * 256)
  let thirdNumber = Math.floor(Math.random() * 256)
  let generatedColor = `rgb(${firstNumber}, ${secondNumber}, ${thirdNumber})`
  return generatedColor
}

/////////////////////////////////////////////////
// Add random color in balls
function addRandomColor() {
  // for (const index in allBalls) {
  for (let index = 0; index < allBalls.length; index += 1) {
    allBalls[index].style.background = randomColor()
  }
}

/////////////////////////////////////////////////
// 
function changeTextRgbColor() {
  let amountBalls = allBalls.length;
  let indexRandom = Math.floor(Math.random() * (amountBalls - 0));
  let colorSelected = allBalls[indexRandom].style.backgroundColor;
  textRgbColor.innerText = colorSelected;
  return colorSelected;
}

/////////////////////////////////////////////////
// 
function verifyClickedCorrect() {
  for (let index = 0; index < allBalls.length; index += 1) {
    allBalls[index].addEventListener('click', () => {
      const newTextRgbColor = document.querySelector('#rgb-color');

      if (allBalls[index].style.background === newTextRgbColor.innerText) {
        textAnswer.innerText = 'Acertou!';
        setTimeout(function(){
          resetGame()
        }, 500);
      } else {
        textAnswer.innerText = 'Errou! Tente novamente!';
        setTimeout(function(){
          resetGame()
        }, 1000);
      }
    })
  }
}

/////////////////////////////////////////////////
// 
btnResetGame.addEventListener('click', resetGame);

function resetGame() {
  addRandomColor();
  changeTextRgbColor();
  textAnswer.innerText = 'Escolha uma cor'
}

/////////////////////////////////////////////////
// 
function score() {
  let scoreGrow = 0;
  for (let index = 0; index < allBalls.length; index += 1) {
    allBalls[index].addEventListener('click', () => {
      const textAnswer = document.querySelector('#answer');
      console.log(textAnswer);
      if (textAnswer.innerText === 'Acertou!') {
        scoreGrow += 3;
        yourScore.innerText = scoreGrow;
      } else {
        scoreGrow = 0;
        yourScore.innerText = scoreGrow;
      }
    })
  }
}