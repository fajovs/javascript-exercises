const reverseString = function(word) {
    const wordArray = word.split("")
    let reversedString = ""
    wordArray.reverse()

    for(let i = 0; i < wordArray.length; i++){
        reversedString = reversedString + wordArray[i]
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
