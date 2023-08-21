// tutorial: https://www.youtube.com/watch?v=pIsFoLAhPrk&ab_channel=LearnwithSumit-LWS-Bangladesh


// Memoization means, If I create a function and call it then the result of that fucntion I want to store somewhere so that the function don't need to do the same calculation again. It saves memory if the function task is big. In short memoization cache the result when the function executes.


// If I need to create a memoization function then I need to create a higher order function. Higher order function is, when a function receive a function as a parameter and returns a function.


// function add(x){
//     return 10 + x
// }



// const memo = (func) => {
//     const cache = {}

//     return function(x) {

//         if(cache[x]){

//             console.log("result from cache")
//             return cache[x]

//         }else{

//             console.log("Calculating result")
//             const result = func(x)

//             cache[x] = result
//             return result
//         }
//     }
// }

// const calculate = memo(add)

// console.log(calculate(10))
// console.log(calculate(10))



// muntiple no add using memo

function add(...x){

    return x.reduce((sum,currSum)=> sum + currSum)
}



const memo = (func) => {
    const cache = {}

    return function(...x) {
        console.log(cache)

        const key = JSON.stringify(x)

        if(cache[key]){

            console.log("result from cache")
            return cache[key]

        }else{

            console.log("Calculating result")
            const result = func(...x)

            cache[key] = result
            return result
        }
    }
}

const calculate = memo(add)

console.log(calculate(10,20,30))
console.log(calculate(10,20,30))