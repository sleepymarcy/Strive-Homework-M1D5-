/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

function area(l1, l2){
    return l1*l2
}

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

function crazySum(int1, int2){
    if(int1 == int2){
        return int1*int2*3
    }
    else {
        return int1*int2
    }
}

// console.log(crazySum(3, 6))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(int1, int2 = 19){
     if(int1 < 0){
        let absoluteVal = int1*(-1)-int2
        if(absoluteVal < 0){
            return absoluteVal*(-1)
        }
        else {
            return absoluteVal
        }
     }
     else if(int1 > 19){
         return (int1-int2)*3
     }
     else {
         return int1-int2
     }
}

// console.log(crazyDiff(20))


/*
let int1 = 20 
let below0 = int1<0
let above19 = int1>19
let perfect = int1>0 && int1<=19
let crazyDiff = int1
let absoluteValue = int1-19

switch(crazyDiff)
{
    case below0: return int1*(-1); break
    case above19: return absoluteValue*3; break
    case perfect: return absoluteValue; break
}

console.log(above19)
*/


/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

function boundary(n){
    if(n=>20 && n<=100 || n == 400){
        return true
    } 
    else {
        return false
    }
}

// console.log(boundary(20))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

function strivify(string){
    if (string.startsWith("Strive")){
        return string
    }
    else
    return "Strive" + " " + string
}

// console.log(strivify("Strive is the best!"))
// console.log(strivify("is the best!"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

function check3and7(num){
    if(num<0){
        return num + " is not a positive number"
    }
    else if(num>0 && num%3==0 || num%7==0){
        return num + " is a positive number that is a multiply of 3 or 7"
    }
}

// console.log(check3and7(-9))
// console.log(check3and7(21))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(string){
    let firstStep = string.split("")
    let secondStep = firstStep.reverse()
    let thirdStep = secondStep.join("")

    return thirdStep
}

// console.log(reverseString("Strive"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

function upperFirst(string){
    let separate = string.toLowerCase().split(" ")
    for (i = 0; separate.length; i++){
        separate[i] = separate[i].charAt(0).toUpperCase() + separate[i].substring(1)
    }

    return separate.join(" ")
}

// console.log(upperFirst("kaka is my firend"))

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(string){
    return string.slice(1, -1)
}

// console.log(cutString("Martyna"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
    let randomNum = Array.from({length: n}, () => Math.floor(Math.random() * 11))
    return randomNum
}

// console.log(giveMeRandom(5))


/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/