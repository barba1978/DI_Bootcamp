// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :


let form = document.forms[0]


let firstName=document.forms[0].elements.fname
let secondName=document.forms[0].elements.lname
let submit=document.forms[0].elements.submit
console.log(firstName)
console.log(secondName)
console.log(submit)


submit.addEventListener("click",getValue)

document.createElement("p")


function getValue(evt){
	evt.preventDefault();
	let value1=document.getElementById("fname").value
	let value2=document.getElementById("lname").value
	
	console.log(value1)
	console.log(value2)
	
	let answer=document.createElement("p")
	let text=document.createTextNode(`${value1} and ${value2}`)

	answer.appendChild(text)
	form.appendChild(answer)
	
}