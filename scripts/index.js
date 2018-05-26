$(document).ready(() => {

/* VARIABLES */
const card = $("li");


/* FUNCTIONS */

/* Flip Card on Click */
card.click((e) => {
  $(e.target).toggleClass("card-show");
  $(e.target).toggleClass("card-hide");
})

});
