
let array=document.getElementsByTagName("input")

let newSentence =""

function  createStory(){


	for(x in array){
		let array=document.getElementsByTagName("input")
		let random= Math.floor( Math.random()*5)
		console.log(random)

		newSentence+=` ${array[random].value} `
		let span =document.getElementById("story")
		span.textContent=newSentence


	}
}

let button =document.getElementById("lib-button")

button.addEventListener("click",createStory)