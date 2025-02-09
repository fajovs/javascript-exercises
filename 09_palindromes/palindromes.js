const palindromes = function (palindrome) {
    let cleanedString = palindrome.replace(/[^a-zA-Z0-9]/g, '')
    let arrayString = cleanedString.toLowerCase().split('')

    return arrayString.join("") === arrayString.reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
