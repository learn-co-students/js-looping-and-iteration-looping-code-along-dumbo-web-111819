// Code your solutions in this file
function writeCards( array, event ) {
    let thanksCards = []
    for ( let index = 0; index < array.length; index++ ) {
      thanksCards.push( `Thank you, ${array[index]}, for the wonderful ${event} gift!` )
    }
    return thanksCards
  }
  
  function countDown( startingPoint ) {
    while ( startingPoint > 0 ) {
      console.log( startingPoint );
      startingPoint--;
    }
    console.log( startingPoint );
  }