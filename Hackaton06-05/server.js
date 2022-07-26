const express =  require ('express')
const env  = require('dotenv')
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require('cors')



const {getAllTests,searchTest,createTest}= require('./modules/test.js')

const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
env.config();




//post request to create a element in the database

app.post('/product',(req,res)=>{
console.log(req.body);
createTest(req.body)
.then(data=>{
res.json(data)})
.catch(err=>{
  console.log(err)})})

app.use('/create', express.static(__dirname+'/public'))
app.use('/', express.static(__dirname+'/search')) 

// app.get('/shop',(req,res)=>{
// res.sendFile('/public/shop.html')
// })

// seach test in the database 

app.get('/search',(req,res)=>{
searchTest(req.query.q)
.then(data=> {res.json(data)})
.catch(err=>{console.log(err)})
})





app.listen(process.env.PORT,()=>{
console.log(`listen to port ${process.env.PORT}`);

})
