"This file is for quizzes only";

/**
 * Title: Quiz - 01
 * 
 * * Question
    let x = `{"b":1, "c": 2}`
    let y = JSON.parse(x)
    console.log(typeof y)

 * * Output : Object

 *  Explaination: 
    The code creates a string x that contains a JSON-encoded object with two properties “b” and “c”, and assigns it to the variable x. The JSON.parse() method then used to parse the JSON-encoded string x into a JavaScript object, which is assigned to the variable y. 
    The console.log() statement then outputs the data type of y using the typeof operator. Since y is now an object, the output will be an object.

 */

/**
 * Title: Quiz - 02
 * 
 * * Question
let x = 0.1 + 0.2
let y = 0.3
console.log(x == y)

 * * Output : false

 *  Explaination: 
    When you run this code and print the result of x == y, you may be surprised to see that it returns false. This is because of a limitation in how JavaScript handles floating-point-numbers.
    In JavaScript, numbers are represented using the IEEE 754 standard for floating-point arithmetic. This means that not all decimal numbers can be represented exactly as binary floating-point numbers.
    In particular, the decimal number 0.1 cannot be represented exactly in binary floating-point format. When you add 0.1 and 0.2 in JavaScript, the result is actually slightly larger than 0.3 due to rounding errors in the binary representation. Therefore, x is not equal to y.

 */

/**
 * Title: Quiz - 03
 * 
 * * Question 
let x = false;
let y = "0"
let z = 0;

console.log(x == y)
console.log(x == z)

 * * Output : true, true

 *  Explaination: 
    In JavaScript, when you use the == operator to compare values of different types, the operands will be converted to a common type before the comparison is made. This process is called coercion.
    In the first comparison (x==y), x is a Boolean (false) and y is a string (“0”). Since both false and “0” can be coerced to the Boolean false, the comparison returns true.
    In the second comparison (x==z), x is a Boolean (false) and z is a number (0). Since both false and 0 can be coerced to the number 0, the comparison returns true.
 */

/**
 * Title: Quiz - 04
 * 
 * * Question
let x = []
console.log(Boolean(x))

 * * Output : true

 *  Explaination: 
    In JavaScript, an empty array [] is a truthy value when coerced to a Boolean. This means that when you use Boolean(x) to converted x to a Boolean value, it will return true.
    In general, any non-empty array (i.e., an array with one or more elements) is also truthy when coerced to a Boolean.

    
*/

/**
 * Title: Quiz - 05
 * 
 * * Question
let x = "5"
let y = 2;

console.log(x + y)
console.log(x-y)


 * * Output : "52", 3

 *  Explaination: 
In the first statement, x is a string (“5”) and y is a number (2). When you use the + operator with a string and a number, JavaScript performs string concatenation: it converts the number to a string and then concatenates the two strings. So “5” and 2 are concatenated to produce the string “52”.
In the second statement, x is still a string (“5”) and y is still a number (2). However, when you use the – operator with a string and a number, JavaScript attempts to convert the string to a number. In the case, “5” can be converted to the number 5, so the expression evaluated to 5 – 2, which is 3.

    
 */

/**
 * Title: Quiz - 06
 * 
 * * Question
let x = []
let y = []
let z = x + y

console.log(typeof z)

 * * Output : string

 *  Explaination: 
    In JavaScript, when you use the + operator with two arrays, or an array and any other object, both operands will be converted to strings before concatenation occurs. This is called implicit type coercion.
    In this case, x and y are both empty arrays, which mean that z will be the empty staring ("") because both arrays will be converted to empty string before concatenation.
    Therefore, when you use the typeof operator to check the type of z, it will return "string" because z is string.

 */

/**
 * Title: Quiz - 07
 * 
 * * Question
    let x = true
    let y = false
    let z = x + y && x * y

    console.log(z)

 * * Output : 0

 *  Explaination: 
    In this code, x and y are both Boolean values. The + operator is used to add x and y. In JavaScript, true is converted to 1, and false is converted to 0 when use in a numeric context, so x + y will be 1 + 0, which is 1.
    The && operator is then used to perform a logical AND operation between x + y and x * y is 0 (because multiplying any number by false or 0 is 0), the logical AND operation will also result in 0. Therefore, z will be 0.
    When you log z to the console, it will output 0.

    
 */

/**
 * Title: Quiz - 08
 * 
 * * Question
   function foo (a,b){
      console.log(arguments[1])
    }

    foo(3)

 * * Output : undefined

 *  Explaination: 
    In this code, the function foo() takes two arguments a and b. When the function is called on line 4 with only one argument 3, the value of a is set to 3 and the value of b is undefined because no second argument was passed.
    The arguments object is an array-like object that contains all the arguments that were passed to a function. In this case, arguments[0] would be 3, and arguments[1] would be undefined.
    Therefore, when arguments[1] are logged to the console, it will output undefined.

    
 */

/**
 * Title: Quiz - 09
 * 
 * * Question
   let x = 1
   let y = "1"

   console.log(++x, ++y)

 * * Output : 22

 *  Explaination: 
   In this code, x is a number containing the value 1, and y is a string containing the value “1”.
   The ++ operator is used to increment the value of x and y before they are logged into the console. Since x is a number, it can be incremented numerically, and ++x will increment the value of x to 2.
   In contrast, since y is a string, it will be first converted to a number before it is incremented. The string “1” can be converted to the number 1, so ++y will also increment the value of y to 2.
   Therefore, when ++x and ++y are logged to the console, it will output 2 2.

    
 */

/**
 * Title: Quiz - 10
 * 
 * * Question
    let x = "b"
    let y =  "a"
    console.log(x + y + + y + y)

 * * Output : baNaNa

 *  Explaination: 
    In this code, x is a string containing the value “b”, and y is a string containing the value “a”.
    The expression x + y concatenates the values of x and y into the string “ba”.
    The expression +y coerces the value of y into a number. Since y is the string “a”, which cannot be coerced into a number, the result of +y is NaN.
    Finally, the expression NaN +y concatenates the string “NaN” with the value of y, which is “a”, resulting in the string “naNaNaa”.
    Therefore, when x + y + + y + y is logged to the console, it will output “baNaNaa”
    
 */

//   ------------------------------------------------------------------------------------

/**
 * Title: Quiz - 
 * 
 * * Question


 * * Output : 

 *  Explaination: 
    
 */
