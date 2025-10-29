const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const siccor = document.querySelector("#siccor");

const container = document.querySelector("#container");
const txtContainer = document.querySelector("#textContainer");

container.addEventListener("click", playRound);

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getComputerChoice() {
  let randomNum = getRandom(1, 3);
  if (randomNum == 1) return "paper";
  else if (randomNum == 2) return "rock";
  else return "siccor";
}

//const userSelection = getHumanChoice(); Solo llama una vez y queda un valor asignado a la variable
// asi no se puede volver a llamar a la funcion

//const computerSelection = getComputerChoice();

const userSelecTxt = document.createElement("p");
const computerSelecTxt = document.createElement("p");
const userScoreTxt = document.createElement("p");
const compterScoreTxt = document.createElement("p");
const textSelect = document.createElement("p");

txtContainer.appendChild(userSelecTxt);
txtContainer.appendChild(textSelect);
txtContainer.appendChild(computerSelecTxt);
txtContainer.appendChild(userScoreTxt);
txtContainer.appendChild(compterScoreTxt);

let humanScore = 0;
let computerScore = 0;

function playRound(event) {
  event.preventDefault();
  if (event.target.tagName == "BUTTON") {
    if (humanScore < 5 && computerScore < 5) {
      userSelecTxt.innerText = event.target.value;
      textSelect.innerText = `Player selected ${userSelecTxt.innerText}`;
      computerSelecTxt.innerText = getComputerChoice();

      if (userSelecTxt.innerText == computerSelecTxt.innerText) {
      } else if (
        userSelecTxt.innerText == "paper" &&
        computerSelecTxt.innerText == "rock"
      ) {
        humanScore++;
      } else if (
        userSelecTxt.innerText == "rock" &&
        computerSelecTxt.innerText == "siccor"
      ) {
        humanScore++;
      } else if (
        userSelecTxt.innerText == "siccor" &&
        computerSelecTxt.innerText == "paper"
      ) {
        humanScore++;
      } else {
        computerScore++;
      }

      userScoreTxt.innerText = `User Score: ${humanScore} `;
      compterScoreTxt.innerText = `Computer score: ${computerScore}`;
    } else if (humanScore == 5) {
      console.log("player won");
    } else {
      console.log("computer won");
    }
  }
}
