// Code your solutions in this file

function writeCards(fffnames, event){
    let names = []
    for (let i=0; i< fffnames.length; i++){
        names.push(`Thank you, ${fffnames[i]}, for the wonderful ${event} gift!`)
    }
    return names

}

function countDown(num){

    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}

