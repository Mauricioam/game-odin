const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const siccor = document.querySelector("#siccor");

const container = document.querySelector("#container");
const txtContainer = document.querySelector("#textContainer");

container.addEventListener("click", playGame);

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
container.appendChild(roundResult);
container.appendChild(userScoreTxt);
container.appendChild(compterScoreTxt);

let humanScore = 0;
let computerScore = 0;

const removeChildNodes = (nodes) => {
  nodes.forEach((node) => {
    if (node.tagName == "BUTTON") {
      node.disabled = true;
    }
  });
};

const playRound = (playerSelec, compSelec) => {
  if (playerSelec == compSelec) {
    return (roundResult.innerText = "It's a tie!");
  }
  switch (`${playerSelec}_${compSelec}`) {
    case "rock_siccor":
    case "paper_rock":
    case "siccor_paper":
      roundResult.innerText = "Player won round";
      return "player";

    case "siccor_rock":
    case "rock_paper":
    case "paper_siccor":
      roundResult.innerText = "Computer won";
      return "computer";

    default:
      roundResult.innerText = "Error";
      break;
  }
};

const showWinner = () => {
  txtContainer.remove();
  removeChildNodes(container.childNodes);
  if (humanScore == 5) {
    roundResult.innerText = "Player won the game";
  } else {
    roundResult.innerText = "computer won the game";
  }
};

function playGame(event) {
  event.preventDefault();
  if (event.target.tagName == "BUTTON") {
    let playerSelect = event.target.value;
    textSelect.innerText = `Player selected ${playerSelect}`;

    let compSelection = getComputerChoice();
    computerSelecTxt.innerText = `Computer selected ${compSelection}`;

    let result = playRound(playerSelect, compSelection);

    if (result == "player") {
      humanScore++;
    } else if (result == "computer") {
      computerScore++;
    }

    userScoreTxt.innerText = `User Score: ${humanScore} `;
    compterScoreTxt.innerText = `Computer score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
      showWinner();
    }
  }
}
