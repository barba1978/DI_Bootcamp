// // # Exercise : use fetch

// // # PART I
// // Use fetch to fetch one 1 random gif with the category of "cat", then
// // append the gif to the page. Use this documentation https
// // ://developers.giphy.com/docs/api/endpoint#random
// // https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// // # Part II

// // Instead of having a fixed category of gif.
// // First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// // Then, you will fetch 1 random gif, depending on the word. The word will be the gif category

// // Display the word and the gif on the page

// // For example:
// // you will fetch the random-word-api. This api will return a random word - for example : "happy"
// // Using this word as a category, you will fetch one random gif with the category of "happy"
// // and display it on the page

// // # Part III

// // If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

// //Exercise part I


// let button = document.getElementById("btn")

// button.addEventListener("click",retriveGif)


// // Exercise part I

// // function retriveGif(e){
// // 	e.preventDefault()

// // 	fetch("https://api.giphy.com/v1/gifs/random?tag=%22cat%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")

// // 	.then(result=>result.json())
// // 	.then(result=> result.data.images.original.url)
// // 	.then(function create(result){
// // 		console.log(result)
// // 		let image = document.createElement("IMG")
// // 		image.setAttribute("src",result)
// // 		document.body.appendChild(image)

// // 	})}


// // Exercise part II

// function retriveGif(e){
// 	e.preventDefault()

// 	fetch("http://random-word-api.herokuapp.com/word?number=1")
// 	.then(result=>result.json())
// 	.then(function(word){
// 		fetch("https://api.giphy.com/v1/gifs/random?tag=%22"+word+"%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
// 		.then(result=>result.json())
// 		.then(result=>result.data.images.original.url)
// 		.then(function(result){
// 			let image = document.createElement("IMG")
// 			image.setAttribute("src",result)
// 			document.body.appendChild(image)})
// 	})}


//4. What does the following code print to the console?
//javascript

async function f() {
	let result = 'first!';
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve('done!'), 1000);
	});
	
	result = await promise;
	
	console.log(result);
}

f();



