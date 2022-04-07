

// // #1
// function q1() {
// 	var a = 5;
// 	if(a > 1) {
// 		a = 3;
// 	}
// 	alert(a);// a= 5
// }

// //#2
// var a = 0;
// function q2() {
// 	a = 5;
// }

// function q22() {
// 	alert(a);
// }// a = 5


// //#3
// function q3() {
// 	window.a = "hello";
// }


// function q32() {
// 	alert(a);
// } // a= undefined

// //#4
// var a = 1;
// function q4() {
// 	var a = "test";
// 	alert(a);
// }// test 

// //#5
// var a = 2;
// if (true) {
// 	var a = 5;
// 	alert(a);
// }
// alert(a); // a = 5

// EXERCISE 2

// function winBatle(){ return false}

// let experiencePoints= 10

// winBatle()===true ? experiencePoints=10: experiencePoints=1

// console.log(experiencePoints)

// EXERCISE 3
// Write a JavaScript arrow function that checks whether the value of the argument passed,
 // is a string or not. Use ternary operator
// Check out the example below to see the expected output


// let isString = (element) => typeof element==="string"



// console.log(isString('hello')); 
// console.log(isString([1, 2, 4, 0]));

//EXERCISE 4

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


// function sentence(){
// 	for(let x in colors)
// 		{ console.log(`${x} choice is ${colors[x]}`)}}

// 	sentence()


// function main(){

// 	colors.includes("Violet")

// 	colors.includes("Violet")?console.log("yeah"):console.log("no")}

// 	main()

//EXERCISE 5 

// Write a JavaScript program that displays the colors in the following order :
//  “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];


function main(){


}

// EXERCISE 6 

// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.


let bankAmount =0

let taxes =1.17

let details =["+200", "-100", "+146", "+167", "-2900"]

let newarray=[]
function counter(){

	details.forEach(function(element) {
		let number=(parseInt(element))
		newarray.push(number*taxes)
	})
	bankAmount=newarray.reduce(function(acc,elem){ return acc+elem})
	console.log(bankAmount)
}




counter()











