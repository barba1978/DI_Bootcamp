

function display(){

fetch('http://localhost:5001/search')
.then(res=>json(res))
.then(data=>{
console.log(json(data));
// let root=document.getElementById("root")
// let div=document.createElement("div")
// div.appendChild(data)
// root.appendChild(div)
})
.catch(err=>{console.log(err)})

}
