// Code your solutions in this file

function writeCards(arr, str) {
    const arrOut = []; 
    for (let i=0; i < arr.length; i++) {
        arrOut.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`);
    }
    return arrOut;
}
writeCards( [ 'Lisa', 'Kaitlin', 'Jan' ], 'surprise' );

function countDown(num) {
    for(let i=num; i >= 0; i--) {
        console.log(i);
    }
}


