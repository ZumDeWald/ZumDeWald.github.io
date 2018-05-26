$(document).ready(() => {

/* VARIABLES */

const card = $(".card-back");


/* FUNCTIONS */

/* Flip Card on Click */

let cardShowing = false;

 card.click((e) => {
   if (!cardShowing) {
     $(e.target).toggleClass("card-hide");
     $(e.target).next().toggleClass("card-hide");
  }
});



});
