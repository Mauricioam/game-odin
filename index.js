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

const removeChildNodes = (nodes) => {
  nodes.forEach((node) => {
    node.remove();
  });
};

function playRound(event) {
  event.preventDefault();
  if (event.target.tagName == "BUTTON") {
    if (humanScore < 5 && computerScore < 5) {
      let playerSelect = event.target.value;
      textSelect.innerText = `Player selected ${playerSelect}`;

      let compSelection = getComputerChoice();
      computerSelecTxt.innerText = `Computer selected ${compSelection}`;

      if (playerSelect == compSelection) {
      } else if (playerSelect == "paper" && compSelection == "rock") {
        humanScore++;
      } else if (playerSelect == "rock" && compSelection == "siccor") {
        humanScore++;
      } else if (playerSelect == "siccor" && compSelection == "paper") {
        humanScore++;
      } else {
        computerScore++;
      }

      userScoreTxt.innerText = `User Score: ${humanScore} `;
      compterScoreTxt.innerText = `Computer score: ${computerScore}`;
    } else if (humanScore == 5) {
      removeChildNodes(txtContainer.childNodes);
      userSelecTxt.innerText = "Player won";
    } else {
      userSelecTxt.innerText = "Computer won";
    }
  }
}
