

function add(){
let benchmark = document.getElementById('benchmark').value
let note = document.getElementById('note').value
let basic_score = document.getElementById('basic_score').value
let advanced_score = document.getElementById('advanced_score').value
let expert_score = document.getElementById('expert_score').value
let elite_score = document.getElementById('elite_score').value
let phisical_ability = document.getElementById('phisical_ability').value
fetch('http://localhost:5001/product',{
  method:"POST",
  headers:{
    'Content-type':'application/json'
  },
  body:JSON.stringify({benchmark,note,basic_score,advanced_score,expert_score,elite_score,phisical_ability})
  })
  .then(res=>res.json())
  .then(data=>{console.log(data)})
.catch(err=>{
  console.log(err);
})
}
