let rps = {
  rock: {
    trump: 'paper',
    img: 'https://preview.redd.it/iqy65elqoxz11.jpg?width=768&auto=webp&s=f43246a101ed70757e7da8c100829e7729b464a7'
  },
  paper: {
    trump: 'scissors',
    img: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2011/11/28/11/enhanced-buzz-28996-1322499406-31.jpg?downsize=700:*&output-format=auto&output-quality=auto'
  },
  scissors: {
    trump: 'rock',
    img: 'https://assets.horseheadhuffer.com/hashed_silo_content/silo_content/5084/resized/scissors.jpg'
  }
}


let computerFinal = '';
let userFinal = '';

function makeMove(choice) {
  document.getElementById('playerMove').innerHTML =
    `<h1>You have selected ${choice}</h1>
    <img class='rps-images' src=${rps[choice].img} alt="">
    `;
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
    `<h1>The computer selected ${choice}</h1>
      <img class='rps-images' src=${rps[choice].img} alt="">`;
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

let userScore = 0;
let compScore = 0;

function findWinner() {
  if (computerFinal == userFinal) {
    document.getElementById('winner').innerHTML =
      `<h1>Tie</h1>`
  }
  else if (rps[userFinal].trump == computerFinal) {
    document.getElementById('winner').innerHTML =
      `<h1>You have lost =[</h1>`
    compScore++;
    document.getElementById('compScore').innerHTML =
      `<h1>${compScore}</h1>`

  } else {
    document.getElementById('winner').innerHTML =
      `<h1>You have won!</h1>`
    userScore++;
    document.getElementById('userScore').innerHTML =
      `<h1>${userScore}</h1>`
  }
}

document.getElementById('userScore').innerHTML =
  `<h1>${userScore}</h1>`

