// In the HTML above change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// At the end of each <ul> add a <li> that says “Hey students”.
// Delete the name Sarah from the second <ul>.
// Bonus
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.



let bodyDom=document.body

document.getElementById("pete").innerHTML="Richard";

let liArray = document.getElementsByClassName("liNames")

for(x of liArray){

	x.innerHTML="andrea"

}


let newElement= document.createElement("li")

let newTest= document.createTextNode("hey students")

newElement.appendChild(newTest)

let ulArray = document.getElementsByClassName("list")

console.log(ulArray)

for (x of ulArray){
	x.appendChild(newElement)
}

let nameSarah=bodyDom.children[2].children[1]

bodyDom.children[2].removeChild(nameSarah)

for (x of ulArray){

	x.classList.add("student_list")

}
bodyDom.children[1].classList.add("university","attendance")





