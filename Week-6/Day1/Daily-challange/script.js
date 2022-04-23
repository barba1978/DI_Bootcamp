


let btn=document.getElementById("btn")

btn.addEventListener("click", callback)



let search = null 
let jsobject=null



function callback(event){
	event.preventDefault()
	search=document.getElementById("input").value
	console.log(search)


	let object =new XMLHttpRequest()

	object.open("GET","https://api.giphy.com/v1/gifs/search?q="+search+"&limit=1&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

	object.send()

	object.onprogress=function(){
		console.log(" waiting the server response")

	}

	object.onload=function(){
		
		jsobject=JSON.parse(object.response)
		let result = jsobject["data"]["images"];
		console.log(result)
	}}

