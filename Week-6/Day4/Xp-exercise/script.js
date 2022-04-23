

// EXERCISE 1 
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));


async function promise(){
	let api = await fetch("https://www.swapi.tech/api/starships/9/")
	let json = await api.json()
	console.log(json.result.properties.url)
}

promise()



// EXERCISE 2
function resolveAfter2Seconds() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, 2000); 
	});
} // 4°the function create a new promise that will be resolved in 2 seconds 



async function asyncCall() {
    console.log('calling'); //2° will appear calling 
    let result = await resolveAfter2Seconds();// 3° the function resolveAfter2Seconds() is called  
    console.log(result); // the result ( which will be whatever the function return ) will be displayed 
}

asyncCall(); //1° The async function is called 