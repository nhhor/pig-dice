// BACK END LOGIC ------------

// PIG-DICE OBJECT:
var pigDice = {
  turnCounter : 0,
  playerOneScore: 0,
  playerTwoScore: 0
}

var switchMod = function(mod){
  switch (mod)
  {
    case 0:
    var player1Score = pigDice.playerOneScore += diceRun;
    $("#player1Score").text(player1Score);
    $('.playera').toggleClass("player1");
    $('.playerb').toggleClass("player2");
    $('.buttons').toggleClass("buttons2");

    break;
    default:
    var player2Score = pigDice.playerTwoScore += diceRun;
    $("#player2Score").text(player2Score);
    $('.playerb').toggleClass("player2");
    $('.playera').toggleClass("player1");
    $('.buttons').toggleClass("buttons2");


  }
}

var diceRun = 0;

function addDice(diceCount) {
  if(diceCount === 1){
    $('.playera').toggleClass("player1");
    $('.playerb').toggleClass("player2");
    $('.buttons').toggleClass("buttons2");

    pigDice.turnCounter +=1
    diceRun = 0;
    alert("You rolled a 1, Turn over!")
    $(".diceCount").text("")

  }
  else {
    diceRun += diceCount;
  }
  return diceRun;
}


// UI LOGIC ----------
$(document).ready(function() {

  $("#rollDice").click(function() {
    var mod = pigDice.turnCounter % 2;
    // switchMod(mod);
    // pigDice.turnCounter += 1;
    var diceCount = Math.round(Math.random() * 5)+1
    $(".diceCount").append(diceCount, ", ")
    addDice(diceCount);
  });


  $('#holdDice').click(function(){
    var mod = pigDice.turnCounter % 2;
    pigDice.turnCounter +=1;
    switchMod(mod);
    diceRun = 0;
    $(".diceCount").text("");
    if(pigDice.playerOneScore >= 100){
      alert("Player1 Wins!");
      $(".diceCount").text("");
      diceRun = 0
      pigDice.playerTwoScore = 0;
      pigDice.playerOneScore = 0;
      $("#player1Score").text("");
      $("#player2Score").text("");

    } else if (pigDice.playerTwoScore >= 100) {
      alert('player2 Wins!');
      $(".diceCount").text("");
      diceRun = 0;
      pigDice.playerTwoScore = 0;
      pigDice.playerOneScore = 0;
      $("#player1Score").text("");
      $("#player2Score").text("");
    } else {
      return;
    }

   });
});


//
//
//
//
//
//
//
// $("#newGame")
// $("#rollDice")
// $(".diceCount")
// $("#holdDice")
