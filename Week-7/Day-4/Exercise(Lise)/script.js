

// 1. Create an HTML file



// 2. Create a JS file - Add the below array of objects inside your javascript file.

let products = [

{
	id: 0,
	name: "Deluxe Bicycle",
	url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
	price: 499.98
},
{
	id: 1,
	name: "Super Deluxe bagpack",
	url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
	price: 134.99
},
{
	id: 2,
	name: "Super Duper Scooter",
	url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
	price: 1090.95
},
{
	id: 3,
	name: "Smartphone",
	url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
	price: 399.99
}
];


// 3. Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
let arr =[]
let object = null

function displayProduct(){



	for ( let x of products ){
		let div=document.createElement("div")
		div.setAttribute("id",x.name);

		let name = document.createElement("p")
		let text_name =document.createTextNode(x.name)
		name.appendChild(text_name)

		let payBtn = document.createElement("button")
		let textBtn = document.createTextNode("Add Cart")
		payBtn.appendChild(textBtn)
		
		let image= document.createElement("IMG")
		image.setAttribute("src", x.url);

		let price = document.createElement("p")
		let price_text= document.createTextNode(x.price)
		price.appendChild(price_text)

		let container=document.getElementById("container")
		
		div.appendChild(name)
		div.appendChild(image)
		div.appendChild(price)
		div.appendChild(payBtn)

		container.appendChild(div)
		payBtn.addEventListener("click",addProduct)


		
	}

}

displayProduct()

function addProduct(e){
	
	console.log(e.target.parentNode.id)
	console.log(e.target.parentNode.querySelector(".price"));
	//let price= e.target.innerHTML
	//window.localStorage.setItem("price",price)
	//let obj=JSON.parse(localStorage.getItem('price'));
	//arr.push(obj)
	//console.log(arr)
	

}




// 4. The user clicks on the item to add them to his cart. 
// The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.





// 5. When the user is done with his shopping, he will click on the "Pay button" (which is actually an anchor)
// and it will redirect him to another HTML page. This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and the total price he needs to pay as well as a "Submit payment" Button



// 6. When the button is clicked -> add a successful message on the page,
// and clear all the items from the local storage.




