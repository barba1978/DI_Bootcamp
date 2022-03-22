
let people = ["Greg", "Mary", "Devon", "James"]

people.splice(0,1)
people.splice(2,1,"Jason")
people.push("Andrea")
people.indexOf("Mary")
console.log(people.indexOf("Mary"))


let newArray = people.slice(0,3)
console.log(newArray)

console.log(people.indexOf("Foo"))
// retrun -1 because the item is not found 



let last=people.length-1

console.log(people[last])


// EXERCISE 1 PART II

for (let i =0 ; i<people.length;i++){
	console.log(people[i])

}

for (let i =0 ; i<people.length;i++){
	if(people[i]==="Jason"){
		break;
	}
}


// // EXERCISE 2 



let colors =["red","yellow","orange","black","green"]

for(let i =0;i<colors.length;i++ ){

	console.log(`my ${i} choice is ${colors[i]}`)
}

let colors =["red","yellow","orange","black","green"]
let number =["first","second","third","fourth","fifth"]

for(let i =0;i<colors.length;i++ ){

	console.log(`my ${number[i]} choice is ${colors[i]}`)
}


// // EXERCISE 3 xxxxxxxxxxxxxxxxxERROR

// let numberUser=prompt("write a number ")


// console.log(typeof(numberUser))

// the prompt will always return a string not a number 



// // EXERCISE 4

let building = {
	numberOfFloors : 4,
	numberOfAptByFloor : {
		firstFloor : 3,
		secondFloor : 4,
		thirdFloor : 9,
		fourthFloor : 2,
	},
	nameOfTenants : ["Sarah", "Dan", "David"],
	numberOfRoomsAndRent:  {
		sarah: [3, 990],
		dan :  [4, 1000],
		david : [1, 500],
	},
}


console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])

let sarah=building.numberOfRoomsAndRent.sarah[1]
let david=building.numberOfRoomsAndRent.david[1]
let dan=building.numberOfRoomsAndRent.dan[1]

if(sarah+david>dan){
	building.numberOfRoomsAndRent.dan.splice(1,1,1200)
} 


const family = {
	dad: "robert",
	mom: "anna",
	son: "jason"
};

for (const key in family) {

	console.log(`${key}: ${family[key]}`);
}


// EXERCISE 6

let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer'
}

for (let x in details) {

	console.log(`${x} ${details[x]}`);
}

// EXERCISE 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort()



for (let i=0;i<names.length;i++){

	console.log(names[i].charAt(0))
}
