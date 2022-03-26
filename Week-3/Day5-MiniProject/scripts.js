


// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


function playTheGame(){
	let answer= confirm("would you like to play a game ")
	
	if(answer == true){
		promptUse()
	} else {
		alert("No problem,Goodbye”")
	}



}
let computerNumber= Math.floor(Math.random() * 10)
console.log(computerNumber)


let i =0;
function promptUse(){
	

	let number = prompt( " write a number between 0 - 10 ")
	i++
	let userNumber = Number(number)
	console.log(i)
	if (i>2){
		alert ("sorry man you have lost ")
		return
	}

	else if (isNaN(userNumber)){
		alert ("Sorry not a number,Goodbye")
	} else if ( userNumber > 10){
		alert ("Sorry it's not a good number,Goodbye")

	}else{


		test(userNumber,computerNumber)}

	}
	

	function test(userNum,computerNum){

		
		if(userNum===computerNum){
			alert(" WINNER")
		} 


		else if (userNum>computerNum){
			alert("the number is to big, guess again ")
			promptUse()

		} else if (userNum<computerNum){
			alert("the number is to small, guess again ")
			promptUse()


		}

	}





// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.

