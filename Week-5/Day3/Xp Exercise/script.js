// EXERCISE 1

// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);=['bread', "apple", "orange", 'chicken', "carrot", "potato"];

// ------2------
// const country = "USA";
// console.log([...country]);="U","S","A"

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);=UNDEFINED

// EXERCISE 2
// Using the map() method, say hello to the users using only 
// their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)
// Using the filter() method, create a new array, containing 
// only the Full Stack Residents.
// Bonus : Chain the filter method with a map method, 
// to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)


// let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
// { firstName: 'Zach', lastName: 'Klabunde', role:'Instructor'}];

// let sayHello= users.map(function(element){ return (`Hello ${element.firstName}`)})
// let flResident= users.filter(function(element){ return element.role=== 'Full Stack Resident'})
// .map(function(element){return (`Hello ${element.firstName}`)})
// console.log(flResident)


// EXERCISE 3

// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 
//'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.


// let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 
// 'far far', 'away']

// let sentence= epic.reduce(function (acc,elem){ return acc+elem})

// console.log(sentence)

// EXERCISE 4

// Using the filter() method, create a new array, containing the students 
// that passed the course.
// Bonus : Chain the filter method with a map method, 
// to congratulate the students with their name and course name (ie. “Good job Jenner,
//  you passed the course in Information Technology”,
//  “Good Job Marco you passed the course in Robotics” ect…)

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

let goodstudent= student.filter(function(element){ return element.isPassed===true})
.map(function(element){ return `Good job ${element.name} you passed ${element.course}`})

console.log(goodstudent)












