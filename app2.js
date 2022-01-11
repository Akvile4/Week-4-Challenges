// let number1 = 345

// const multiply = (num) => {
//     let number = 1234
//     console.log(number)
//     return result = num * number
// }

// console.log(number)
// console.log(multiply(123))

// let pinNumber = 1234

// const pinCode = (rightNumber, pinGuess) => {
//     if (rightNumber === pinGuess) {
//         console.log("Your pin is right!")
//         return true
//     }
//     else {
//         console.log("Your pin number is wrong try again!")
//     }
// }

// const takeMoney = (pin, amount, balance) => {
//     if (pinCode())

// }

// pinCode(pinNumber, 1234)


// let whichGreeting = (timeOfDay) => {
//     console.log(`Good ${timeOfDay}`)
// }

// let greet = (time, fn) => {
//     if (time < 12) {
//         fn("Morning")
//     } else if (time > 12 && time < 18) {
//         fn("Afternoon")
//     } else {
//         fn("Evening")
//     }
// }

// greet(14, whichGreeting)

// let myFunction = () => {
//     return () => {
//         console.log("hello")
//     }
// }

// console.log(myFunction())

// challenge 1 
const func1 = () => {
    return ("Hello Code Nation!")
}

const repeat = (fn) => {
    for (i = 0; i < 5; i++) {
        console.log(fn)
    }
}

repeat(func1())

// challenge 2
let total = 0

const sum = (num1,num2) => {
    return num1 + num2
}

const addUp = (fn, n1, n2) => {
    for (i = 0; i < 5; i++) {
        total += fn(n1,n2)
        console.log(`The total sum is ${total}`)
    }
}

addUp(sum, 2, 3)

// challenge 3 
let numbers = [2, 56, 21, 48, 91]

const multiplyByThree = (num) => {
    return num * 3
}

let newArray = numbers.map(multiplyByThree)

console.log(newArray)

// challenge 4
const multiply = (a,b) => {
    return a*b
}

const add = (a,b) => {
    return a+b
}

const divide = (a,b) => {
    return a/b
}

const subtract = (a,b) => {
    return a-b
}

const doMath = (num1) => {
    return (num2, fn) => {
        return fn(num1, num2)
    }
}

console.log(doMath(3)(4,add))

let doMathFunction = doMath(3)
console.log(doMathFunction(4,add))

console.log(doMathFunction(3,divide))
