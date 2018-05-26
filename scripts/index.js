$(document).ready(() => {

/* VARIABLES */

const card = $(".card, .card>*");


/* FUNCTIONS */

const showCard = (target) => {
  target.children().toggleClass("card-hide");
};

/* Flip Card on Click */

 card.click((e) => {
   showCard($(e.target));
});



});
