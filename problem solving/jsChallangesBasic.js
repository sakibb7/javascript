'use strict'

/**
 * title: Coding Challange #1
 
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

// -> Code

const marksWeight = 78
const johnsWeight = 92

const marksHeight = 1.69
const johnsHeight = 1.95

function bmiCalculator (weight,height){
    const bmi = weight / height ** 2

    return bmi
}

const marksBMI = bmiCalculator(marksWeight, marksHeight)
const johnsBMI = bmiCalculator(johnsWeight, johnsHeight)

if ( marksBMI > johnsBMI){
    console.log(`Marks BMI ${marksBMI} is Higher than Johns BMI ${johnsBMI}`)
}else{
    console.log(`Johns BMI ${Math.floor(johnsBMI)} is Higher than Marks BMI ${marksBMI}`)
}

// -> Output

Marks BMI 27.309968138370508 is Higher than Johns BMI 24.194608809993426

*/



/**
 * title: Coding Challange #2
 * 
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

-> Code

const dolphinScore = (96 + 108 + 89) / 3
const koalsScore = (88 + 91 + 110) / 3

if (dolphinScore > koalsScore && dolphinScore >= 100){
    console.log(`Dolphin Team Wins`)
}else if (dolphinScore === koalsScore && dolphinScore >= 100 && koalsScore >= 100) {
    console.log(`It's a draw`)
}else if ( koalsScore > dolphinScore && koalsScore >= 100) {
    console.log(`Koal team wins`)
}else {
    console.log(`No teams wins the trophy.`)
}

-> Output

No teams wins the trophy.

*/


/**
 * title: Coding Challange #3
 * 
////////////////////////////////////
// Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀


// -> Code


const bill = 40

const tip = bill >= 50 && bill <= 300 ? .15 : .20

const calculatetip = bill * tip

const total = bill + calculatetip

console.log(`The total value was ${total}, the tip was ${calculatetip} and the bill was ${bill}`)


 // -> Output

 The total value was 48, the tip was 8 and the bill was 40

*/


/**
 * title: Coding Challange #3
 * 
 * Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀

* -> Code
const calcAverage = (a,b,c)=> (a + b+ c) /3

const dolphinScore = calcAverage(44,23,71)
const koalasScore = calcAverage(65,54,49)

const checkWinner = (team1,team2)=>{
    if(team1 > team2 * 2){
        console.log(`Team 1 wins.`)
    }else if ( team1 * 2 < team2){
        console.log(`Team 2 wins.`)
    }else{
        console.log(`No team wins this time`)
    }
}

checkWinner(dolphinScore,koalasScore)

* -> Output

No team wins this time

 */


/**
 * title: Coding Challange #3
 * 
 * 
 * Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀

* -> Code

const calcTip = (tip)=>(tip >=  50 ? tip * .15 : tip * .20)

const bills = [125,555,44]

const tip =[calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])]

const totalValue = [bills[0] + tip[0],bills[1] + tip[1],bills[2] + tip[2]]

console.log(totalValue)

 * -> Output
[ 143.75, 638.25, 52.8 ]

 */


/**
 * title: Coding Challange #3
 * 
 Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


* -> code

const markDetails = {
    firstName: 'Marks',
    lastName:'David',
    weight: 78,
    height:1.69,
    calcBmi: function(){
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}

console.log(markDetails)

const johnDetails = {
    firstName: 'John',
    lastName:'Parker',
    weight: 92,
    height:1.95,
    calcBmi: function(){
        this.bmi = this.weight / this.height ** 2
        return this.bmi
    }
}
// Calling the function is important. Otherwise markDetails.bmi will not work. If I dont call the functions here then I need to call the functions in the if else statement. markdetails.calcBmi()
markDetails.calcBmi()
johnDetails.calcBmi()

if ( markDetails.bmi > johnDetails.bmi){
    console.log(`Marks bmi (${markDetails.bmi}) is higer than Johns bmi (${johnDetails.bmi})`)
}else{
    console.log(`Johns bmi (${johnDetails.bmi}) is higer than  Marks bmi (${markDetails.bmi})`)
}

* -> Output

Marks bmi (27.309968138370508) is higer than Johns bmi (24.194608809993426)

*/


/**
 * title: Coding Challange #3
 * 
 * 
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

  * -> Code

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips =[]
const totals =[]

const calcTip = (bill) => ( bill >= 50 && bill <= 300 ? bill * .15 : bill * .20)

for (let i = 0; i < bills.length; i++){
    const tip =  calcTip(bills[i])
    const total = bills[i] + tip

    tips.push(tip)
    totals.push(total)
}

console.log(tips)
console.log(totals)

// function
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));



* -> Output
[ 4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8 ]
[ 26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8 ]

 */