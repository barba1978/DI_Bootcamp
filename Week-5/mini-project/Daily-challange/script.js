

function anagram(x,y){

	let firstWord=x.toLowerCase().replace(" ","").split("").sort() 
	let secondWord=y.toLowerCase().replace(" ","").split("").sort() 

	for (let i =0; i< firstWord.length ;i++){
		if (firstWord[i]===secondWord[i]){
			console.log ("it is an anagram")
		} else { console.log ("it is not an anagram")}


	}
}

anagram("Andrea","aandreaaa")