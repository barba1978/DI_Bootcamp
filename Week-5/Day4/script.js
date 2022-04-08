const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// EXERCISE 2
// Create a function called displayStudentInfo(studentObject) 
// that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string 
// as the example seen below:


let student={

    fist:"Elie",
    last:"Schoppik"
}



function displayStudentInfo({first= "Elie", last="Schoppik"}){

    console.log(`Your full name is ${first} ${last}`)


}

displayStudentInfo(student) 


// EXERCISE 3 

const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]


let array = Object.entries(users)


function multiply(){
    for (let x of array){
        x[1]*=2

    }
    

}


multiply()


// EXERCISE 4 

class Person {
  constructor(name) {
    this.name = name;
}
}

const member = new Person('John');
console.log(typeof member);// STRING


// EXERCISE 5 


class Dog {
  constructor(name) {
    this.name = name;
}
};

// Analyze the options below. Which constructor will 
// successfully extend the Dog class?

//   // 1
//   class Labrador extends Dog {
//       constructor(name, size) {
//         this.size = size;
//     }
// };


  // 2
  class Labrador extends Dog {
      constructor(name, size) {
        super(name);
        this.size = size;
    }
};


//   // 3
//   class Labrador extends Dog {
//       constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };


//   // 4
//   class Labrador extends Dog {
//       constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

// EXERCISE 6

// [2] === [2] // FALSE
// {} === {} //FALSE 


// const object1 = { number: 5 }; 
// const object2 = object1; 
// const object3 = object2; 
// const object4 = { number: 5}; 
// object1.number = 4;


class Animal {
    constructor (type,color,name){
        this.type=type
        this.color=color 
        this.name=name

    }}


    class Mamal extends Animal {
        constructor (type,color,name){
            super(type,color,name)}

            sound(noise){
                this.noise=noise
                return(`${this.type} and ${this.color} and this ${this.name} with this sound ${this.noise} `)


            }
        }

        let cow = new Mamal("cow","brown","carolina")
        console.log(cow.sound("mouuu")) 


