// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let bodyDom= document.body

let h1=document.getElementsByTagName("h1")[0]
console.log(h1)

let lastP = document.getElementsByTagName("article")[0].lastElementChild

console.log(lastP)

let h2=document.getElementsByTagName("h2")[0]
h2.addEventListener("click", changeBackground)

function changeBackground(){
	h2.style.backgroundColor ="red"

}


let h3=document.getElementsByTagName("h3")[0]
h3.addEventListener("click", changeDisapear)

function changeDisapear(){
	h3.style.display ="none"

}

let button =document.createElement("button")

let text= document.createTextNode("button-bold")

button.appendChild(text)

document.body.appendChild(button)

button.addEventListener("click",changeBold)
let allp=document.getElementsByTagName("p")

function changeBold(){

	for (x of allp){
		x.style.fontWeight="900"
	}

}


h1.addEventListener("mouseover",changeHover)

function changeHover(){
	let random = Math.floor(Math.random() * 100)
	h1.style.fontSize=random

}

let secondP = document.getElementsByTagName("article")[0].children[4]

console.log(secondP)


secondP.addEventListener("mouseover",changeFade)

function changeFade(){
	secondP.classList.add("newClass")

}






