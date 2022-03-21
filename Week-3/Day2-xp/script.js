// EXERCISE 1

let x = 5;
let y = 2;

if(x>y){
	console.log(`${x} is bigger `)
} else {
	console.log(`${y} is bigger `)
}

// EXERCISE 2

// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

let newDog= "Chihuahua"

console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if (newDog === "Chihuahua"){
	console.log("I love , it’s my favorite dog breed")

} else {
	console.log ("I dont care, I prefer cats")

}

// EXERCISE 3

// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.



let userNumber = prompt("write a number ")


if (userNumber%2===0){
	console.log(" the number is even")
} else {
	console.log(" the number is odd")
}

// EXERCISE 4




// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

let userLength = users.length
if (userLength===0){
	console.log ("no one is online")
} else if (userLength===1){
	console.log(`the user ${users[0]} is on line` )
} else if (userLength===2){
	console.log(`the users ${users[0]} and ${users[1]} are on line`)
} else {
	console.log(`the users ${users[0]} ,${users[1]} and ${userLength-2} more are online`)
}


















