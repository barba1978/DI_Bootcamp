// EXERCISE 1

// Create a one line function (ie. an arrow function) that 
// receives two numbers as parameters and returns the sum.

// let sum =(a,b)=> a+b

// console.log(sum(2,3))

// EXERCISE 2

// Create a function that receives a weight in kilograms and returns it in grams.
//

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function transform(kg){
// 	return kg/1000}

// 	console.log(transform(300))

// let transform1 = function(kg){return kg/1000}

// let transform2= (kg)=> kg/1000

// console.log(transform2(800))

// EXERCISE 3 

// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>,
//  and married to <partner's name> with <number of children> kids."

// let test =(kids,partner,home,job)=>(`${kids} and ${partner} and ${home} and ${job}`)


// console.log(test("x","g","l","h"))

// EXERCISE 4 


// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion 
// that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// let button= document.getElementById("btn")

// button.addEventListener("click",greeting)
// function greeting(){
// 	let name=document.getElementById("input").value
// 	let par = document.createElement("p")
// 	let text =document.createTextNode(`Hello ${name}`)
// 	par.appendChild(text)
// 	let div =document.getElementById("div")
// 	div.appendChild(par)

// }

// EXERCISE 5 

// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, 
// and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence 
// like The client wants a <size drink> juice, containing <first ingredient>, 
// <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients 
// function TWICE. Then invoke once the displayJuice function. Finally, 
// invoke the makeJuice function in the global scope.




function makeJuice(size){
	let ingredients=[]


	function addIngredients(first,second,third){

		ingredients.push(first,second,third)}

		function displayJuice(){
			ingredients.forEach(function(element){
				return  })

		}

		console.log("i want "+size+"shake, with these ingredients "+ displayJuice())
		addIngredients("bana","apple","roba")
		displayJuice()
	}

	makeJuice("small")









