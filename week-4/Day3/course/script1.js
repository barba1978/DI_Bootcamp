




let id = setInterval(mynewfunction, 10)
let i=0
function mynewfunction(){
	console.log(i)
	if (i>=600){
		clearInterval(id)
	} else {
		i++
		document.getElementById("h1").style.left=`${i}px`
		document.getElementById("h1").style.top=`${i}px`
	}}