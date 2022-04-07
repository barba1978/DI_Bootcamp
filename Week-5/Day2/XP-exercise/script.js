

// // EXERCISE 1
// let sum = (num1,num2)=> num1+num2

// console.log(sum(2,4))


// EXERCISE 2


// function change(kg){
// 	console.log(kg/1000)

// }
// change(30)

// let change1= function(kg){
// 	console.log(kg/1000)}


// 	change1(500)
// // i declare the name of rthe function in order to reuste it later 

// let change2=(kg)=>console.log(kg/1000)
// change2(800)

// EXERCISE 3

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// (function(kids,partner,home,job){
// 	let sentence = (`You will be a ${job} in ${home}, and married to ${partner} with ${kids} kids.`)
// 	let par=document.createElement("p")
// 	let text =document.createTextNode(sentence)
// 	let container=document.getElementById("container")
// 	par.appendChild(text)
// 	container.appendChild(par)
// })(3,"maayan","israel","developer")

// EXERCISE 4

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// EXERCISE 5




function makeJuice(size){

	let ingredients=[]

	function addIngredients(first,second,third){
		// let container =document.getElementById("container")
		// let par=document.createElement("p")
		// let sentence =(`the client want a ${size} juice that contains: ${first},${second},${third}!`)
		// let text =document.createTextNode(sentence)
		// par.appendChild(text)
		// container.appendChild(par)

		ingredients.push(first,second,third)}
		console.log(ingredients)


		function displayJuice(){
			let sentence=""
			

			ingredients.forEach(function(element,index){
				sentence = `The client wants a ${size} juice, containing  ${element}, ${element}`
				
			})
			let par=document.createElement("p")
			let text =document.createTextNode(sentence)
			par.appendChild(text)
			container.appendChild(par)


		}
		addIngredients("banana","apple","pear")

		displayJuice()


	}




	makeJuice("small")













