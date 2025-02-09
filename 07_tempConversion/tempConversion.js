const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9
  return celsius % 1 === 0 ? celsius : parseFloat(celsius.toFixed(1))
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * 9/5) + 32
  return fahrenheit % 1 === 0 ? fahrenheit : parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
