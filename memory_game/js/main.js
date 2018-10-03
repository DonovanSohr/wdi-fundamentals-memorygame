var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}
var flipCard = function (cardId) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
     	alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch();
}

flipCard(0);

flipCard(2);


//From here up, it is good to go
