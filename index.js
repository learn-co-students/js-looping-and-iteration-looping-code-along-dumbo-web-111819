

function writeCards(array, string){
 newarr = [];
  for(let i = 0; i < array.length; i++){
    let name = array[i];

    newarr.push(`Thank you, ${name}, for the wonderful ${string} gift!`)

  }
  return newarr
}

console.log(writeCards(["Lisa", "Kaitlin", "Jan"], "surprise"))

function countDown(startingNumber){
  let i = startingNumber
  while (i >= 0){
    console.log(i);
    i -= 1;
  }

}

countDown(10)
