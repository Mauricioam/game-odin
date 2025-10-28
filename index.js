const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const siccor = document.querySelector("#siccor");

const container = document.querySelector("#container");

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
let humanScore = 0;
let computerScore = 0;
const userSelecTxt = document.createElement("p");
const computerSelecTxt = document.createElement("p");
const userScoreTxt = document.createElement("p");
const compterScoreTxt = document.createElement("p");

container.appendChild(userSelecTxt);
container.appendChild(computerSelecTxt);
container.appendChild(userScoreTxt);
container.appendChild(compterScoreTxt);

function playRound(event) {
  event.preventDefault();
  userSelecTxt.innerText = `User selected ${event.target.value}`;

  computerSelecTxt.innerText = `Computer selected ${getComputerChoice()}`;

  if (userSelecTxt.innerText == computerSelecTxt.innerText)
    return console.log("Tie!");
  if (
    userSelecTxt.innerText == "paper" &&
    computerSelecTxt.innerText == "rock"
  ) {
    humanScore++;
    return console.log("User wins");
  }
  if (
    userSelecTxt.innerText == "rock" &&
    computerSelecTxt.innerText == "siccor"
  ) {
    humanScore++;
    return console.log("User wins");
  }
  if (
    userSelecTxt.innerText == "siccor" &&
    computerSelecTxt.innerText == "paper"
  ) {
    humanScore++;
    return console.log("User wins");
  } else {
    computerScore++;
    return console.log("Computer wins");
  }
}
