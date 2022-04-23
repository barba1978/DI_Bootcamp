
// // EXERCISE 1
// function compareToTen(num) {

// 	const myPromise= new Promise(function(resolve,reject){

// 		if (num <=10){
// 			resolve(num+" is less then 10, succes")
// 		}else {
// 			reject(num+" is more  then 10, error")
// 		}})
// 	myPromise.then(result=> console.log(result))
// 	.catch(error=> console.log(error))



// }

// compareToTen(11)


// EXERCISE 2


// function test(){
// 	let x = true

// 	const myPromise= new Promise(function(resolve,reject){

// 		setTimeout(()=>{
// 			if (x){
// 				resolve("very good")
// 			} else {
// 				reject("opps something went wrong")
// 			}},5000)

// 	})
// 	myPromise.then(result=> console.log(result))
// 	.catch(result=>console.log(result))

// }

// test()

// EXERCISE 3

let promise= new Promise(function(resolve,reject){
	let age =12
	const getAlchool=18
	if (age>getAlchool){
		resolve("you can get a drink")
	} else 

})




