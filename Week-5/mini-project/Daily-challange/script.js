

// 24. Use async await, and fetch to a fact on cats and display 
//it `https://catfact.ninja/fact`. 
//     1. Create 2 functions : on to fetch data from API, 
//the other one to display it on the page using the DOM
//     2. Make sure to use try and catch


async function test(){

    try{

       let result = await fetch(`https://catfact.ninja/fact`)
       let data = result.json()
       return data 
   } catch(e) {
    // statements
    console.log(e);
}

}
function display(e){
    console.log(e)
    return e}




   // let container = document.getElementById("container")
   // let text = document.createTextNode(e)

    // console.log(JSON.stringify(e))





    display(test())

