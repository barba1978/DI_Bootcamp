
// exercise 1

let favFood ="pizza"
let favMeal ="dinner"

let sentence = `I eat ${favFood} at every ${favMeal}`

console.log(sentence)

// exercise 2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"]

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = `I didn't watched all ${myWatchedSeriesLength} series , i just watched ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`


myWatchedSeries.splice(2,1,"friends")
myWatchedSeries.push("squid game")
myWatchedSeries.unshift("Peaky Blinders")
myWatchedSeries.splice(1,1)

console.log(myWatchedSeries)


// EXERCISE 3 

let temperatureC = 34;

let temperatureF = ((temperatureC/5)*9)+32;

console.log(temperatureF)

// EXERCISE 4

let c;
let a = 34;
let b = 21;

    console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction:23
    // Actual: 23


    // VALUE OF C = undefined 

    // console.log(3 + 4 + "5"); it will execute 3+4=7 and then will concatenet with 5 =75


// EXERCISE 5 

typeof(15)
// Prediction: number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual: number 

typeof(NaN)
// Prediction: not a number -error
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:Boolean
// Actual:Boolean

typeof(1 != 2)
// Prediction: true
// Actual: true

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: NaN
// Actual:Nan

"1" + "3"
// Prediction:13
// Actual:13

"1" - "3"
// Prediction:NaN
// Actual: -2

"johnny" + 5
// Prediction: jhonny5
// Actual:jhonny5

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction: true
// Actual: true

1 === "1" false
// Prediction:
// Actual: false


// EXERCISE 6

5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction 1
// Actual: 1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:0
// Actual:5

"Java" + "Script"
// Prediction:JavaScript
// Actual:JavaScript

" " + " "
// Prediction:null
// Actual: " "

" " + 0
// Prediction:"0"
// Actual:"0"

true + true
// Prediction:false
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:

!true
// Prediction: not true
// Actual: false

3 - 4
// Prediction:-1
// Actual:

"Bob" - "bill"
// Prediction: NaN
// Actual:




