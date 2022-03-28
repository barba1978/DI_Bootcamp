

// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the <div>.
// Do not display the first name (John) in the list.
// Add a border to the second name (Pete).
// Change the font size of the whole body.
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).


let bodyDom= document.body

bodyDom.firstElementChild.classList.add("new")

bodyDom.children[1].lastElementChild.style.display="none"

bodyDom.children[1].firstElementChild.style.border = "2px solid black"

bodyDom.style.fontSize = "x-large"

if(bodyDom.firstElementChild.getAttribute("class")=== "new"){

	alert ("Hello")

} else {
	alert ("fuck of ")
}