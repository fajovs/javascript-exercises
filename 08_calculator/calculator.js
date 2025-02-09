const add = function() {
	return arguments[0] + arguments[1]
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function() {
  let overallSum = 0
  arguments[0].forEach(element => {
    overallSum = overallSum + element
  });
	
  return overallSum
};

const multiply = function() {
  let overallProduct = 1
  arguments[0].forEach(element => {
    overallProduct = overallProduct * element
  });
	
  return overallProduct
};

const power = function() {
	return Math.pow(arguments[0],arguments[1])
};

const factorial = function() {
  let factorialNumber = 1
  
  for(let i = 1; i <= arguments[0]; i++){
    factorialNumber = factorialNumber * i
  }

	return factorialNumber
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
