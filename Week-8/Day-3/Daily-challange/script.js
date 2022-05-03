const fs = require('fs')



fs.readFile('RightLeft.txt','utf8',(err,data)=>{
console.log(typeof data )
var array = data.split("")

console.log(array)

const leftTurn =[]
const rightTurn =[]

 array.forEach(myfunction)

function myfunction(e){
if (e==='<'){
  leftTurn.push(e)
} else if (e=== '>'){
rightTurn.push(e)
}}

console.log(leftTurn.length)
console.log(rightTurn.length-leftTurn.length)
})
