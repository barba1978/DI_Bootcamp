const express =  require ('express')
const env  = require('dotenv')
const bodyParser = require("body-parser");
const router = express.Router();



const {getAllTests,searchTest,createTest}= require('./modules/test.js')

const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
env.config();
app.set('view engine', 'ejs');




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



app.get('/search',(req,res)=>{
searchTest(req.query.search)
// .then(data=> json(data))
res.sendFile(__dirname+'/search/index.html')

})





app.listen(process.env.PORT,()=>{
console.log(`listen to port ${process.env.PORT}`);

})
