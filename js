//Exercise one -- converting human ages to dog ages

/* Dog Years
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years. */

//set a new variable at my age
var myAge = 25;

//first two years of dog's life count as 10.5 dog years each; 
var earlyYears = 2;

earlyYears *= 10.5;

//laterYears
var laterYears = myAge-2;


//each year following equates 4 dog years
laterYears *= 4;

console.log (earlyYears)
console.log (laterYears)

//adding up early and later years
var myAgeInDogYears = earlyYears + laterYears

var myName = 'Christine'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)


//Exercise two -- converting temperatures
/* Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */

//temperature in kelvin
const kelvin = 0;

//temperature in celsius
var celsius = kelvin - 273

//temperature in fahrenheit
var fahrenheit = Math.floor(celsius * (9/5) + 32)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

var newton = Math.floor(celsius * (33/100))
console.log(`The temperature is ${newton} degrees newton`)

