// //1. Retrieve the div
// let boxToDrag = document.getElementById("item");

// // 2. I add the event listener of dragstart to the box
// boxToDrag.addEventListener("dragstart", startDraggingTheItem);

// // 3. The function startDraggingTheItem is called when we start dragging an item
// function startDraggingTheItem (event) {
// 	console.log(event);
// 	// 3.2 - we replace the class of the item
// 	boxToDrag.classList.replace("draggedItem","startDragging");
// 	// 3.3 - setData takes 2 argument - the type of the data, 
// 	// and the id of the element we want to drag
// 	// dataTransfer.setData, sets the data we want to drop in the future
// 	event.dataTransfer.setData("text/plain", event.target.id);
// }

let boxToMove = document.getElementById("animate");





function myMove() {
	let id = null;
	let boxToMove = document.getElementById("animate");   
	let place = 0;
	clearInterval(id);
	id = setInterval(finalP, 5);
	function finalP() {
		if (place == 350) {
			clearInterval(id);
		} else {
			place++; 
			boxToMove.style.top = `${place}px`; 
			boxToMove.style.left = `${place}px`; 
		}
	}
}
