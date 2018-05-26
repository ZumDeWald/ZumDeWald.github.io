$(document).ready(() => {

/* VARIABLES */
const card = $(".card-hide");


/* FUNCTIONS */

/* Flip Card on Click */
const cardFlip = (target) => {
  target.toggleClass("card-show");
  target.toggleClass("card-hide");
}

/* Check if card matches */
let cardShowing = false;
let cardValue = "";

card.click((e) =>{
  cardFlip($(e.target));
  if (!cardShowing) {
    $(e.target).addClass("marker");
    cardValue = $(e.target).children().attr("class");
    cardShowing = true;
  } else {
    if (cardValue == $(e.target).children().attr("class")) {
//      alert("You Got A Match!");
      card.removeClass("marker");
    } else {
      $(e.target).addClass("marker");
//      alert("Sorry, not a match");
      cardFlip($(".marker"));
      card.removeClass("marker");
    }
    cardShowing = false;
  }
 });


});
