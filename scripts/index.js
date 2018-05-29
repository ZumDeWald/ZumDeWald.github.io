$(document).ready(() => {


  /* VARIABLES */

  let clickCount = 0;
  let cardShowing = false;
  let cardValue = "";
  let timeKeeper = 0;
  let cardMatches = 0;
  let randomNumber = 1 + Math.floor(Math.random() * 16);

  const allCards = $("li");
  const starSection = $(".star-section");
  const resetButton = $(".reset-section");
  const timeCounter = $(".time");


  /* FUNCTIONS */

  //Randomize Order | uses .each() to loop over, then assign random number
  //between 1 and 50
  $("li").each(function() {
      randomNumber = 1 + Math.floor(Math.random() * 50);
      $(this).css({"order": randomNumber});})

  //Flip Card on Click
  const cardFlip = (target) => {
    target.toggleClass("card-show");
    target.toggleClass("card-hide");
  };

  //Match Animation && Trigger end of game when last match is made
  const yesMatch = () => {
    $(".marker").animate({
      margin: ["20px"]
    });
    cardMatches++;
    if (cardMatches === 8) {
      allCards.toggleClass("win");
    }
  };

  //Remove Stars after number of clicks
  const removeStar = (selector) => {
    starSection.children(selector).removeClass("fas").addClass("far");
  }


  /* TRIGGER EVENT TO START GAME */

  // Used 'Event Delegation' here to manage cards not becoming
  // 'clickable' after they are shown face up
  $(".game-board").on("click", ".card-hide", (e) =>{

    //Counts clicks user makes and removes stars after so many
    clickCount += 1;
    if (clickCount > 45) {
        removeStar(".first-star");
      } else if (clickCount > 32) {
        removeStar(".second-star");
      } else if (clickCount > 16) {
        removeStar(".third-star");
    };

    //Starts timer
    if (clickCount === 1) {
      const timer = setInterval (() => {
      timeKeeper++;
      timeCounter.text(timeKeeper);
    }, 1000);
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
        yesMatch()
      } else {
        setTimeout(() => {
          $(".marker").toggleClass("card-show");
          $(".marker").toggleClass("card-hide");
        }, 600);
      };

      //Removes markers, resets cardShowing value
      setTimeout(() => { allCards.removeClass("marker") }, 700);
      cardShowing = false;
    };
   })


   // RESET GameBoard
   resetButton.click(() => {
     location.reload();
/*   allCards.removeClass("card-show");
     allCards.addClass("card-hide");
     allCards.removeClass("marker");
     allCards.css("margin", "12px");
     starSection.children().removeClass("far");
     starSection.children().addClass("fas");
     clickCount = 0;
     cardShowing = false;
     clearInterval(timer);
     timeCounter.text(0);
     cardMatches = 0;*/
   })

});
