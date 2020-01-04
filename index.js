// Code your solutions in this file

let writeCards = (array, eventName) => {
    debugger;
    let newArray = []
    for(let i = 0; i < array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray
}


writeCards(["Ada", "Brendan", "Ali"], "birthday")

let countDown = (n) => {
    let counter = n;
    while(counter >=0){
        console.log(counter--)
    }
}