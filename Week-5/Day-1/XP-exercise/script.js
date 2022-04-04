// 1ST EXERCISE 

// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a); a=3
// }

// // a =3



// //#2
// var a = 0;
// function q2() {
//     a = 5; 
// }

// function q22() {
//     alert(a);
// }


// // a=5



// //#3
// function q3() {
//     window.a = "hello";
// }


// function q32() {
//     alert(a);
// }






// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }

// // alert inside the function will be a=test



// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);

// // first alert will be a= 5
// // second alert will be a= 2



// 2ND EXERCISE 


// function winBattle(){
//     return true;
// }
// ()=>true


// let experiencePoints=0

// let test=()=> true

// test? experiencePoints=10 : experiencePoints=1

// console.log(experiencePoints)


// 3RD EXERCISE 




// let isString=(x)=>typeof x ==="string" ? true :false 
// console.log(isString("andrea"))

// 4TH EXERCISE 

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


colors.forEach( function(element, index,array) {
    console.log(index+"# choice is "+ element)
})



// 5TH EXERCISE 

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

// ??????

// 6TH 


// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.


let bankAmount= 20000



let details = ["+200", "-100", "+146", "+167", "-2900"]

details.forEach(function(number,index){
    if (number<0){
        let vat = number*0.17
        console.log(number+vat)

    }})












