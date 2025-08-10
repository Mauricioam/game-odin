let paper = "paper";
let rock = "rock";
let siccor = "siccor";

function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getComputerChoice() {
  let randomNum = getRandom(1, 3);
  if (randomNum == 1) return paper;
  else if (randomNum == 2) return rock;
  else return siccor;
}

function getHumanChoice() {
  const userInput = prompt("Mensaje");
  return userInput.toLowerCase();
  
}

//const userSelection = getHumanChoice(); Solo llama una vez y queda un valor asignado a la variable
// asi no se puede volver a llamar a la funcion

//const computerSelection = getComputerChoice();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    let humanOption = humanChoice();
    let computerOption = computerChoice();
    if (humanOption == computerOption) return console.log("Tie!");
    if (humanOption == paper && computerOption == rock) {
      humanScore++;
      return console.log("Paper beats rock!");
    }
    if (humanOption == rock && computerOption == siccor) {
      humanScore++;
      return console.log("Rock crushed the siccor");
    }
    if (humanOption == siccor && computerOption == paper) {
      humanScore++;
      return console.log("OMG siccor murdered the paper");
    } else {
      computerScore++;
      return console.log("Computer wins");
    }
  }

  while (humanScore < 5 && computerScore < 5) {
    console.log("Tus puntos:" + " " + humanScore);
    console.log("Computadora:" + " " + computerScore);
    playRound(getHumanChoice, getComputerChoice);
  }

  if (humanScore >= 5) {
    console.log("Tus puntos:" + " " + humanScore);
    console.log("Computadora:" + " " + computerScore);

    console.log("You WiiN");
  } else if (computerScore >= 5) {
    console.log("Tus puntos:" + " " + humanScore);
    console.log("Computadora:" + " " + computerScore);
    console.log("You LOOOSE");
  }
}
playGame();
