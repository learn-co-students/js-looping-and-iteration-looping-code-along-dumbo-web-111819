// let writeCards = (["Ada", "Brendan", "Ali"],"birthday");
function writeCards (array,birthday){
    
 let array2 = []

    for (let i = 0; i < array.length; i++){
        array2.push(`Thank you, ${array[i]}, for the wonderful ${birthday} gift!`)
    }
    return array2 
    }
    
    function countDown(number){
        while(number<=0){

            console.log(number)
        }
        number--
    }
    
    
    