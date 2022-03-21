// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:







let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1)
console.log(fruits)
fruits.sort()
console.log(fruits)
fruits.push("kiwi")
fruits.shift()
fruits.reverse()



// exercise 2

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];


let newArray=moreFruits[1]
let newArray1= newArray[1]

console.log(newArray1)