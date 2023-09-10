//Returns the absolute value of a number
Math.abs(-5); //output 5

//Rounds up to the nearest integer
Math.ceil(3.8); //output 4

//Rounds down to the nearest integer
Math.floor(3.8); //output 3

//Rounds to the nearest integer
Math.round(3.8); //output 4
Math.round(3.4); //output 3

//Raises a number to the power of another number
Math.pow(3, 4); //output 81

//Calculates the square root of a number
Math.sqrt(100); //output 10

//Generates a random number between 0 and 1
Math.random(); //random number every time

// calculates the natural logarithm of a number
Math.log(3); //output 1.0986122886681096

// Finds the minimum value among given numbers
Math.min(10, 4, 20, 2, 88); //output 2

//Finds the max value among given numbers
Math.max(10, 4, 20, 2, 88); //output 88

//output Example

const a = [10, 4, 20, 2, 88];

const output = Math.max(...a);

console.log(output);
