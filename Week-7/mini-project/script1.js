

let newobject= JSON.parse(localStorage.getItem("obj"))


function display(){
	let div=document.getElementById("secondpage")
	
	
	for ( let x of newobject ){
		let secondDiv = document.createElement("div")

		secondDiv.setAttribute("id", x.title_obj );
		let par=document.createElement("p")
		let par1=document.createElement("p")
		let par2=document.createElement("p")
		let par3=document.createElement("p")


		let checkbox=document.createElement("INPUT")
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("id", "checkbox");


		let end_text = document.createTextNode("Ending Date: "+ x.end_obj)
		let start_text= document.createTextNode("Starting Date: "+ x.start_obj)
		let name_text=document.createTextNode("Name: "+ x.title_obj)


		par.appendChild(name_text)
		secondDiv.appendChild(par)

		par1.appendChild(start_text)
		secondDiv.appendChild(par1)

		par2.appendChild(end_text)
		secondDiv.appendChild(par2)

		secondDiv.appendChild(checkbox)

		// par3.appendChild(description_text)
		// secondDiv.appendChild(par3)
		// secondDiv.setAttribute("id", x.title_obj );

		div.appendChild(secondDiv)
		secondDiv.addEventListener("click",displayInfo )

		console.log(secondDiv)}



	}
	display()



	function displayInfo(e){

		//console.log(e.target.getElementsByTagName("input")[0].checked)
		const checkbox= e.target.getElementsByTagName("input")[0];
		console.log(checkbox);

		// if ( checkbox.checked == false){

		// 	e.target.setAttribute("class", "checked")
		// };
		// let task = document.getElementById(e.target.id)
		// console.log(task)
		// for (let x of newobject){
			

		// 	let text = document.createTextNode("Description :"+ x.description_obj)
		// 	let par = document.createElement("p")
		// 	par.appendChild(text)
		// 	task.appendChild(par)

		// }

		// if (checkbox === true){
		// 	console.log("it works")





		// }
	}



