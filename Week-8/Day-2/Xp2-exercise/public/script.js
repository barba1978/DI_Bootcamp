function fetchObjct(){

fetch('http://localhost:3000/')
.then(result=> result.json())
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})


}


fetchObjct()
