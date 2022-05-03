const http = require('http')

const app = http.createServer((req,res)=>{

  const user = {
          firstname: 'John',
          lastname: 'Doe'
      }

res.end(JSON.stringify(user))

})

app.listen(8080,()=>{

  console.log('listen to port 8080')
})
