const sumAll = function(startNumber, endNumber) {
    let sum = 0
    if(endNumber<startNumber){
        let temp = startNumber
        startNumber = endNumber
        endNumber = temp
    }

    if((Number.isInteger(startNumber) && startNumber > 0) && (Number.isInteger(endNumber) && endNumber > 0)){
        while(startNumber <= endNumber){
            sum = sum + startNumber
            startNumber++
        }
        return sum
    }else{
        return "ERROR"
    }
    
};

// Do not edit below this line
module.exports = sumAll;
