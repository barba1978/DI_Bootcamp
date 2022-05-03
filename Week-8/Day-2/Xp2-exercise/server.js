const express = require ('express')
const product=require ('./products.js')

const app = express()

app.get('/',(req,res)=>{

  const user = {
         firstname: 'John',
         lastname: 'Doe'
     }


res.json(user)

})


app.get('/products/:id',(req,res)=>{


const pid = req.paramas.id;
const result= product.find(product=>product.id==pid)
res.json(result)

})

app.use('/page1',express.static(__dirname+'/public'))


app.listen(3000,()=>{

  console.log(' router listen to port 3000')
})
