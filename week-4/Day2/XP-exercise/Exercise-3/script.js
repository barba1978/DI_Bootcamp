// Create a global variable named allBoldItems.

// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called return_normal() that changes the color of all the bold text back to black.

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


let allBoldItems=document.body.children[0].getElementsByTagName("strong")



function highlight(){

	for (x of allBoldItems){

		x.style.color="blue"
	}}


	function return_normal(){

		for (x of allBoldItems ){

			x.style.color="black"

		}}



		let paragraph = document.body.children[0]
		paragraph.addEventListener("mouseover",highlight)
		paragraph.addEventListener("mouseout",return_normal)
	// 	document.body.children[0].addEventListener("onmouseout",return_normal)













