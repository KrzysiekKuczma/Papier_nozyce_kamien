// Funkcje losujące

function draw(){
  return Math.floor(Math.random() * (3) + 1);
}

var player1 = draw();
var player2 = draw();
console.log(player1);
console.log(player2);

// Funkcja podająca wyniki losowania

function rockPaperScissors (player1, player2){
  var result = '';
  if (player1 === player2){
    document.getElementsByClassName('.game').style.backgroundPosition = "bottom";
    result = 'Remis'
  } else
  if ((player1 === 1 && player2 === 3) ||
             (player1 === 2 && player2 === 1) ||
             (player1 === 3 && player2 === 2)){
    document.getElementsByClassName('.game .left_box').style.backgroundPosition = "left";
    result = 'Gracz 1 wygrał'
  } else {
    result = 'Gracz 2 wygrał'
    document.getElementsByClassName('.game .right_box').style.backgroundPosition = "right";
  }
  return result;
}

console.log(rockPaperScissors(player1, player2));
