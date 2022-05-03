const express = require ('express')
const app =express();


app.get('/',(req,res)=>{

  const user = {
      firstname: 'John',
      lastname: 'Doe'
  }
  res.json(user)})

app.use('/Xp-Exercise',express.static(__dirname+'/public'))
app.use('/image',express.static(__dirname+'/image'))

app.listen(3000,()=>{

  console.log(' listen to port 3000')
})


// app.get('/:id'(req,res)=>{
//
//   const id= req.params.id
//   res.json(req.params)
// })
