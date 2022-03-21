let userLanguage= prompt("which language do you speak ?").toLowerCase()



switch (userLanguage){
	case "french":
	console.log("Bonjour")
	break;
	case "english":
	console.log("Hello")
	break;
	case "hebrew":
	console.log("Shalom")
	break;
	default:
	console.log("01110011 01101111 01110010 01110010 01111001")
	
}

// EXERCISE 2

// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”


let userGrade=prompt ("what's you grade ?")

if(userGrade>90){
	console.log("a")}
	else if (userGrade <=90 && userGrade>80){
		console.log("b")}
		else if (userGrade <=80 && userGrade>=70){
			console.log("c")}
			else { console.log("d")}

// EXERCISE 3

// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.



let verb= prompt("write e verb")
let verbLength= verb.length
let verbEnd = verb.substring(verbLength-3,verbLength)

console.log(verbEnd)

if (verbLength>3 && verbEnd !=="ing" ){
	console.log(`${verb}ing`)
} else if (verbLength>3 && verbEnd==="ing" ){
	console.log(`${verb}ly`)
} else { console.log(verb)}






