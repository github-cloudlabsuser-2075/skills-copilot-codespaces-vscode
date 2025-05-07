// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // formula to convert celsius
    // to Fahrenheit
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
// driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F");
// function to convert Fahrenheit