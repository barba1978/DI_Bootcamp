
// You will use this Gif URL: 
// https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My






// let object=new XMLHttpRequest()

// let json=null

// object.open("GET","https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

// object.send()

// object.onprogress=function (){
// 	console.log("Server is loading ")
// }

// object.onload=function(){
	
	
// 	json=JSON.parse(object.response)

// 	let array = json.data

// }

// EXERCISE NUMBER 2 


let secondobject=new XMLHttpRequest()

let secondjson=null

secondobject.open("GET","https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

secondobject.send()

secondobject.onprogress=function (){
	console.log("Server is loading ")
}

secondobject.onload=function(){
	
	
	secondjson=JSON.parse(secondobject.response)

	console.log(secondjson.data)

}





