var cards = ["queen", "king", "queen", "king"];

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardsInPlay = [];
//From here up, it is good to go
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
     	alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}