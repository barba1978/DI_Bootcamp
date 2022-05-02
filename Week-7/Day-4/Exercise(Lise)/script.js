
const array = [];

let form = document.getElementById("form")

form.addEventListener("submit",loadForm)

function loadForm(e){
	e.preventDefault()
	let title=document.getElementById("title").value
	let description=document.getElementById("description").value
	let start =document.getElementById("start-time").value
	let end =document.getElementById("end-time").value


	let obj= {
		title_obj :title,
		description_obj:description,
		start_obj:start,
		end_obj:end
	}
	
	array.push(obj)
	

	console.log(array)
	localStorage.setItem("obj", JSON.stringify(array))



}




