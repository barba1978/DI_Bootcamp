// EXE 2 part2 

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe(){

	console.log("my name is andrea")
}

infoAboutMe()


// EXE 1 part2 

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


function infoAboutPerson(personName, personAge, personFavoriteColor){

	console.log(`my name is ${personName}, i am ${personAge} and my favorite colorid ${personFavoriteColor}`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// EXERCISE 2

function calculateTip(){

	let billPrice= prompt("how much is the bill")

	if (billPrice<50){
		console.log(billPrice*=1.20)
	} else if (billPrice<200){
		console.log(billPrice*=1.15)
	}  else{
		console.log(billPrice*=1.1)
	}

}


calculateTip()

// EXERCISE 3


function isDivisible(){
	for (let i=1; i<500;i++){

		if (i%23==0){
			console.log(i)
		}
	}
}

// EXERCISE 3 -bonus 


function isDivisible(x){
	for (let i=1; i<500;i++){

		if (i%x==0){
			console.log(i)
		}
	}
}

isDivisible(20)


// EXERCISE 4

// let stock = { 
// 	"banana": 6, 
// 	"apple": 0,
// 	"pear": 12,
// 	"orange": 32,
// 	"blueberry":1
// }  

// let prices = {    
// 	"banana": 4, 
// 	"apple": 2, 
// 	"pear": 1,
// 	"orange": 1.5,
// 	"blueberry":10
// } 

// let shoppingList =["banana","orange","apple"]

// function myBill(){

// 	for (let i =0;i<shoppingList.length;i++){
// 		console.log(shoppingList[i])
// 		let item=shoppingList[i]
// 		for (const property in stock){
// 			console.log(stock[property][item])

// 		} }

// 	}


// myBill()


// EXERCISE 5

function changeEnough(itemPrice, amountOfChange){

	let quarters=amountOfChange[0]*0.25
	let dime = amountOfChange[1]*0.1
	let nickel=amountOfChange[2]*0.05
	let cent=amountOfChange[3]*0.01

	let summ =quarters+dime+nickel+cent

	if (itemPrice>summ){
		return true
	}else {
		return false
	}
}


console.log(changeEnough(6,[30,12,5,6]))


// EXERCISE 6



function hotelCost(){
	let user = prompt ("number of nights")

	if (isNaN(user)){ 
		user =prompt ("said it again please ")
	}return user*140


}


function planeRideCost(){

	let user = prompt ("destination ?")

	if (typeof user !== 'string'){ 
		user=prompt("said it again please ")
	}else if (user==="Paris"){
		return 183

	} else if(user==="London"){
		return 200
	}else {
		return 300
	}

}


function rentalCarCost(){
	let user = prompt ("number of day rent a car  ?")
	if(typeof user=== "string"){
		return 40*user
		if(user>10){
			return 36*user
		} else if(user!== "string")
		prompt("said it again please ?")
	}


}



function totalVacationCost(){

	return hotelCost()+planeRideCost()+rentalCarCost()
}

console.log(totalVacationCost())
