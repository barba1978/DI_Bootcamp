

function display(){
const query=document.getElementById('search').value
fetch(`http://localhost:5001/search?search=${query}`)
.then(res=> res.json())
.then(data=>{console.log(data)})
// .then(data => {
// renderProducts(data)})
// .catch(err=>{console.log(err)})

}




display()

// "benchmark": "Sprint-400mt",
// "note": null,
// "basic_score": "90sec",
// "advanced_score": "80sec",
// "expert_score": "65sec",
// "elite_score": "<60sec",
// "phisical_ability":
