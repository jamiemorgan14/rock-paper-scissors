let rps = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock"
}

let computerFinal = '';
let userFinal = '';

function makeMove(choice) {
  document.getElementById('playerMove').innerHTML =
    `<h1>You have selected ${choice}</h1>`;
  userFinal = choice;
  computerMove();
}


function makeButtons(obj) {
  let template = '';
  for (let choice in obj) {
    template += `<button class="col-4" onclick="makeMove('${choice}')">${choice}</button>`
    document.getElementById('buttonLayout').innerHTML = template;
  }
}

function computerMove() {
  let choices = Object.keys(rps);
  let computerChoice = Math.floor(Math.random() * choices.length);
  let choice = choices[computerChoice];
  document.getElementById('compMove').innerHTML =
    `<h1>The computer selected ${choice}</h1>`
  computerFinal = choice;
  findWinner()
}

makeButtons(rps)

// function findWinner() {
//   if (userFinal == 'rock' && computerFinal == 'scissors' || userFinal == 'scissors' && computerFinal == 'paper' || userFinal == 'paper' && computerFinal == 'rock') {
//     document.getElementById('winner').innerHTML =
//       `<h1>You have won!</h1>`
//   } else if (userFinal == 'scissors' && computerFinal == 'rock' || userFinal == 'rock' && computerFinal == 'paper' || userFinal == 'paper' && computerFinal == 'scissors') {
//     document.getElementById('winner').innerHTML =
//       `<h1>You have lost =[ </h1>`
//   } else {
//     document.getElementById('winner').innerHTML =
//       `<h1>Run it back!</h1>`
//   }
// }


function findWinner() {
  if (computerFinal == userFinal) {
    document.getElementById('winner').innerHTML =
      `<h1>Tie</h1>`
  }
  else if (rps[userFinal] == computerFinal) {
    document.getElementById('winner').innerHTML =
      `<h1>You have lost =[</h1>`
  } else {
    document.getElementById('winner').innerHTML =
      `<h1>You have won!</h1>`
  }
}