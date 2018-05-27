$(document).ready(() => {

/* VARIABLES */



/* FUNCTIONS */

/* Flip Card on Click */
const cardFlip = (target) => {
  target.toggleClass("card-show");
  target.toggleClass("card-hide");
}

/* Check if card matches */

  /* Values set to judge if there is already a card showing face up that
    needs matched, and if so a variable to hold the value of the icon */
let cardShowing = false;
let cardValue = "";


  /* Used 'Event Delegation' here to make sure the card would NOT be
    'clickable' once it was shown, unless it was 'flipped' back over.
    This seemed a better route than trying to set a const and manage it */
$(".game-board").on("click", ".card-hide", (e) =>{
  cardFlip($(e.target));
  if (!cardShowing) {
    $(e.target).addClass("marker");
    cardValue = $(e.target).children().attr("class");
    cardShowing = true;
  } else {
    if (cardValue == $(e.target).children().attr("class")) {
      alert("You Got A Match!");
      card.removeClass("marker");
    } else {
      $(e.target).addClass("marker");
      alert("Sorry, not a match");
      cardFlip($(".marker"));
      card.removeClass("marker");
    }
    cardShowing = false;
  }
 });


});
