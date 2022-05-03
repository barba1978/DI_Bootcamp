const express = require('express')

const app= express()


app.get('/home',(req,res)=>{

const object={
name:"andre",
lname:"barbieri"


}

res.json(object)

})


app.listen(3000,()=>{

console.log('listen to port 3000')
})
