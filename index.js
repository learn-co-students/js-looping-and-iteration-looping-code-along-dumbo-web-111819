// Code your solutions in this file

function writeCards(names, occasion) {
  let i = 0;
  let cards = [];
  while (i < names.length) {
    cards[i] = (`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    i ++;
  }
  // console.log(cards)
  return cards;
}

function countDown(start) {
  while (start >= 0) {
    console.log(start);
    start = start - 1;
  }
}