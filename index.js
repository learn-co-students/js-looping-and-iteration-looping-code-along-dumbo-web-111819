// Code your solutions in this file

function writeCards(arr,str){
    let result=[]
    for(let i=0;i<arr.length;i++){
       result.push(`Thank you, ${arr[i]}, for the wonderful ${str} gift!`)
    }
    return result
};



function countDown(number){
    while (number>=0) {
        console.log(number)
        number--
    }
}
