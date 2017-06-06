// Funkcje losujące
function startGame() {
  function draw(){
    return Math.floor(Math.random() * (3) + 1);
  }

  var player1 = draw();
  var player2 = draw();
  console.log(player1);
  console.log(player2);

  // Funkcja podająca wyniki losowania

  var gameBox = document.getElementsByClassName('.game');
  var newStyle;
  function rockPaperScissors (palyer1, player2, gameBox, newStyle){
    var result = '';
    newStyle = gameBox[i];
    for (var i = 0; i <= gameBox.length; i++) {
       if (player1 === player2){
          newStyle.style.backgroundPosition = "bottom";
          result = 'Remis'
       } else
       if ((player1 === 1 && player2 === 3) ||
          (player1 === 2 && player2 === 1) ||
          (player1 === 3 && player2 === 2)){
            newStyle.style.backgroundPosition = "left";
            result = 'Gracz 1 wygrał'
       } else {
            newStyle.style.backgroundPosition = "right";
            result = 'Gracz 2 wygrał'
       }
          return newStyle;
          return result;
    }
  }


  console.log(rockPaperScissors(player1, player2));

}
