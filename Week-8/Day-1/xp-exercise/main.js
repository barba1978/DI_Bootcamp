let a = 5;
let b = 10;
let x = a+b
let c = 6;
x = a + b;


console.log(x)
console.log(x+c)



// const http = require("http")

// const server = http.createServer((req,res)=>{
// 	let array= [1,5,8,9]
// 	let obj= { " name": " andrea","lastname":"barbieri"}
// 	let data = JSON.stringify(array)
// 	res.end(data)


// });



server.listen(3000,function(){

	console.log("you are listening port3000")
})