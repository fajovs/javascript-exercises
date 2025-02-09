const fibonacci = function(number) {
    let updateNumber = 1
    let previousNumber = 0
    let temporaryNumber = updateNumber
    
    for(let i = 1; i < parseInt(number); i++){
        temporaryNumber = updateNumber
        updateNumber = updateNumber + previousNumber
        previousNumber = temporaryNumber
    }
    return parseInt(number) === 0 ? 0 : number < 0 ? "OOPS" : updateNumber
};

// Do not edit below this line
module.exports = fibonacci;
