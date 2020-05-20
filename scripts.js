const cards = document.querySelector.all('.memory-card');

function flipCard(){
  this.classList.toggle('flip');
}

cards.forEach(card => addEventListener('click', flipCard));
