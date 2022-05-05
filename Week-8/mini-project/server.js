let express = require ('express')
let env = require('dotenv')
let cors = require ('cors')
let Parser = require('rss-parser');

let app=express()
env.config()
let parser = new Parser();
app.use(cors())
app.set('view engine','ejs')

app.get('/',(req,res)=>{

  const array = [
{name:'andrea',lname:'barbieri',age:43},
{name:'alberto',lname:'barbieri',age:45},
{name:'maayan',lname:'ben nun ',age:42}

  ]

res.render('index',{array:array})

})

app.get('/search',(req,res)=>{


res.render('search')

})


app.get('/search/title',(req,res)=>{
res.send('linked to search/title')


})


app.get('/search/category',(req,res)=>{
res.send('linked to search/category ')


})


// (async () => {
//
//   let feed = await parser.parseURL('https://www.thefactsite.com/feed/');
// // console.log(feed);
// //   console.log(feed.title);
// // console.log(feed.link);
//   feed.items.forEach(item => {
//     console.log(item.title + ':' + item.link)
//   });
//
// })();


app.listen(process.env.PORT,()=>{
console.log(`listening to the port ${process.env.PORT}`);

})
