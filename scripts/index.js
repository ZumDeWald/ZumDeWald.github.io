$(document).ready(() => {

/* VARIABLES */

let clickCount = 0;
let cardShowing = false;
let cardValue = "";

const starSection = $(".star-section");

/* FUNCTIONS */

  //Flip Card on Click
const cardFlip = (target) => {
  target.toggleClass("card-show");
  target.toggleClass("card-hide");
};

  //Match & No Match Animation
const yesMatch = () => {
  $(".marker").animate({
    margin: ["20px", "swing"]
  });
};

const noMatch = () => {
  $(".marker").animate({
  });
}

  //Remove Stars after number of clicks
const removeStar = (selector) => {
  starSection.children(selector).removeClass("fas").addClass("far");
}

  // Used 'Event Delegation' here to manage cards not becoming
  // 'clickable' after they are shown face up
$(".game-board").on("click", ".card-hide", (e) =>{

  //Counts clicks user makes and removes stars are so many
  clickCount += 1;
  if (clickCount > 32) {
      removeStar(".first-star");
    } else if (clickCount > 25) {
      removeStar(".second-star");
    } else if (clickCount > 16) {
      removeStar(".third-star");
  };

  //Flips Cards
  cardFlip($(e.target));

  //Add marker to shown card, used to flip back over if needed
  $(e.target).addClass("marker");

  //Gets value of first card flipped and lets logic know a card is now
  //showing face-up
  if (!cardShowing) {
    cardValue = $(e.target).children().attr("class");
    cardShowing = true;

  //Checks if second card flipped matches first and trigger response
  } else {
    if (cardValue == $(e.target).children().attr("class")) {
      yesMatch();
    } else {
//      noMatch();
      cardFlip($(".marker"));
    };

  //Removes markers and resets cardShowing value
    $("li").removeClass("marker");
    cardShowing = false;
  }
 });

});
