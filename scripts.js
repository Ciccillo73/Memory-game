const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstcard, secondCard;


function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
  }
}

cards.forEach(card => card.addEventListener('click', flipCard));
