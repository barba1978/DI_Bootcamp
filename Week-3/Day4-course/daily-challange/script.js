let array=["i am ","the ","fuckiest","genius","ever","!!!!"]

let maxLength=[]


for(x of array){
 maxLength.push(x.length)
}

maxLength.sort(function(a, b){return b-a})

console.log(maxLength[0])

function final(){
  
  console.log("*".repeat(maxLength[0]+3)+"*")

  for(let i=0;i<array.length;i++)
  {
    console.log("* "+array[i]+" ".repeat(maxLength[0]-array[i].length)+" *")
    
  }
  console.log("*".repeat(maxLength[0]+3)+"*")

}

final()