






function volumeSphere(evt){
	
	evt.preventDefault();
	let radius =document.getElementById("radius").value
	let result = (4*3.14*Math.pow(radius,3))/3
	let volume = document.getElementById("volume")
	console.log(volume)
	volume.setAttribute("value", result)
}

document.getElementById("submit").addEventListener("click",volumeSphere )


