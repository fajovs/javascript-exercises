const repeatString = function(word, count) {
    if(count < 0){
        return "ERROR"
    }
    let finalWord = ""
    for(let i = 0; i != count; i++){
        finalWord = finalWord + word
    }
    return finalWord
};

// Do not edit below this line
module.exports = repeatString;
