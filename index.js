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
const roundResult = document.createElement("p");

txtContainer.appendChild(userSelecTxt);
txtContainer.appendChild(textSelect);
txtContainer.appendChild(computerSelecTxt);
txtContainer.appendChild(userScoreTxt);
txtContainer.appendChild(compterScoreTxt);
container.appendChild(roundResult);

let humanScore = 0;
let computerScore = 0;

const removeChildNodes = (nodes) => {
  nodes.forEach((node) => {
    node.remove();
  });
};

const checkRound = (playerSelec, compSelec) => {
  if (playerSelec == compSelec) {
    return (roundResult.innerText = "It's a tie!");
  }
  switch (`${playerSelec}_${compSelec}`) {
    case "rock_siccor":
    case "paper_rock":
    case "siccor_paper":
      roundResult.innerText = "Player won round";
      break;
    case "siccor_rock":
    case "rock_paper":
    case "paper_siccor":
      roundResult.innerText = "Computer won";
      break;
    default:
      roundResult.innerText = "Error";
      break;
  }
};

function playRound(event) {
  event.preventDefault();
  if (event.target.tagName == "BUTTON") {
    if (humanScore < 5 && computerScore < 5) {
      let playerSelect = event.target.value;
      textSelect.innerText = `Player selected ${playerSelect}`;

      let compSelection = getComputerChoice();
      computerSelecTxt.innerText = `Computer selected ${compSelection}`;

      checkRound(playerSelect, compSelection);

      // if (playerSelect == compSelection) {
      // } else if (playerSelect == "paper" && compSelection == "rock") {
      //   humanScore++;
      // } else if (playerSelect == "rock" && compSelection == "siccor") {
      //   humanScore++;
      // } else if (playerSelect == "siccor" && compSelection == "paper") {
      //   humanScore++;
      // } else {
      //   computerScore++;
      // }

      userScoreTxt.innerText = `User Score: ${humanScore} `;
      compterScoreTxt.innerText = `Computer score: ${computerScore}`;
    } else if (humanScore == 5) {
      removeChildNodes(txtContainer.childNodes);
      userSelecTxt.innerText = "Player won";
    } else {
      removeChildNodes(txtContainer.childNodes);
      userSelecTxt.innerText = "Computer won";
    }
  }
}
