let colors = ["blue", "yellow", "green", "pink"];
// 1. Add inside the HTML file a div of id "container" (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that changes the background color of the document, to the textcontent of the button (do it directly in the JS)
// ---

let bodyDom=document.body

bodyDom.firstElementChild.setAttribute("id", "container")

for (x of colors){

	let button=document.createElement("button")
	let text=document.createTextNode(x)
	button.style.backgroundColor=x
	button.appendChild(text)
	bodyDom.firstElementChild.appendChild(button)
	bodyDom.firstElementChild.addEventListener("click",myFunction)
}

function myFunction(e){
	
	console.log(e.target.innerHTML)
	document.body.style.backgroundColor = e.target.innerHTML;

	
}