

// Funkcje losujące
  function draw() {
    return Math.floor(Math.random() * (3) + 1);
  }

 // Funkcja podająca wyniki losowania
 function rockPaperScissors() {
    var player1 = draw();
    var player2 = draw();
    var newStyle = document.querySelectorAll(".game");
    var winner = document.querySelector(".winner");
    var result = '';
    console.log(newStyle);
      if (player1 === 1){
          newStyle[0].style.backgroundPositionY = "0%"
      } else if (player1 === 2) {
          newStyle[0].style.backgroundPositionY = "33%"
      } else if (player1 === 3) {
          newStyle[0].style.backgroundPositionY = "66%"
      }
      if (player2 === 1){
          newStyle[1].style.backgroundPositionY = "0%"
      } else if (player2 === 2) {
          newStyle[1].style.backgroundPositionY = "33%"
      } else if (player2 === 3) {
          newStyle[1].style.backgroundPositionY = "66%"
      }
       if (player1 === player2){
            for (var i = 0; i < newStyle.length; i++) {
                newStyle[i].style.backgroundPosition = "bottom left";
                result = "Remis"
                console.log(result);
            }
       } else if ((player1 === 1 && player2 === 3) ||
          (player1 === 2 && player2 === 1) ||
          (player1 === 3 && player2 === 2)){
            newStyle[0].style.backgroundPositionX = "left";
            newStyle[1].style.backgroundPositionX = "right";
            result = "Gracz 1 wygrał"
           console.log(result);
       } else {
            newStyle[0].style.backgroundPositionX = "right";
            newStyle[1].style.backgroundPositionX = "left";
            result = "Gracz 2 wygrał"
           console.log(result);
       }
    winner.innerHTML = ("<p>" + result + "</p>");
  };
