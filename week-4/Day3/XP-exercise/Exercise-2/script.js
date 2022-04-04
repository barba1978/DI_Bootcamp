

let fill = document.getElementById("itemToDrop")
let empties= document.querySelectorAll(".dropPoint")

//  fill listener 


fill.addEventListener("dragstart",dragStart)
fill.addEventListener("dragend",dragEnd)


function dragStart(event){
	this.style.backgroundColor = "red"
	event.dataTransfer.setData("text/plain", event.target.id)

}

function dragEnd(){
	this.style.backgroundColor = "yellow"
	
}


for ( let x of empties){

	x.addEventListener("dragover",dragOver)
	x.addEventListener("dragenter",dragEnter)
	x.addEventListener("dragleave",dragLeave)
	x.addEventListener("drop",dragDrop)


}

function dragOver(e){
	e.preventDefault()
	this.style.backgroundColor ="green"

}
function dragEnter(e){
	
	this.style.backgroundColor ="purple"
	e.preventDefault()}


	function dragLeave(){
		this.style.backgroundColor ="black"

	}
	function dragDrop(){
		this.style.backgroundColor ="grey"
		this.appendChild(fill)

	}
