


document.body.children[0].addEventListener("click", myScript)

function myScript(event){

	event.target.style.color="blue"

}

document.body.children[1].addEventListener("mousedown", myScript1)
document.body.children[1].addEventListener("mouseup", myScript2)

function myScript1(event){

	event.target.style.color="yellow"
	
}

function myScript2(){
	event.target.style.color="red"

}




document.body.children[2].addEventListener("mouseover",changeDiv)

function changeDiv(){

	let paragraph =document.createElement("p")
	let text =document.createTextNode("Here I am ")
	paragraph.appendChild(text)
	document.body.children[2].appendChild(paragraph)



}

document.body.children[2].addEventListener("mouseout",changeDivBack)

function changeDivBack(){
	document.body.children[2].removeChild(document.body.children[2].firstElementChild)

}



