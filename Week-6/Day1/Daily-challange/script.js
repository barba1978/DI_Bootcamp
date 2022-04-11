

let name1=document.getElementById("input")
let name2=document.getElementById("input1")

document.forms.test.addEventListener("submit", function (event){

	event.preventDefault()

	let name ={
		firstname:name1.value,
		secondname:name2.value

	}
	console.log(name)



})