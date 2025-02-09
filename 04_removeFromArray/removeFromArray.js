const removeFromArray = function() {
    
    let removeNumbers = []
    for(let i = 1; i < arguments.length; i++){
        removeNumbers.push(arguments[i])
    }
    
    return arguments[0].filter(item => !removeNumbers.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
