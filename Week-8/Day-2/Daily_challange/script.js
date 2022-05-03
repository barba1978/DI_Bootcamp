const express = require ('express')
const app= express()


app.get('/aboutMe/:hobby',(req,res)=>{

console.log('hobby',req.params.hobby)
const hobby=req.params.hobby

if (typeof hobby==='string'){
  return res.json(req.params)


} else {
  res.status(404).send('Not valid input')
}


})

app.get('/pic',(req,res)=>{

res.sendFile(__dirname+'/image/index.html')

})






app.listen(5000,()=>{

console.log("listening to port 5000")

})
