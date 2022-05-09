

function display(){
const query=document.getElementById('search').value
fetch(`http://localhost:5001/search?search=${query}`)
.then(res=> json(res))
.then(data=>{console.log(data)})
// .then(data => {
// renderProducts(data)})
// .catch(err=>{console.log(err)})

}


function renderProducts (arr) {
  root.innerHTML = '';
    const root = document.getElementById('root');
    root.innerHTML = '';
    arr.forEach((item, i) => {
      const div = document.createElement('div');
      const h2 = document.createElement('h2');
      h2.innerText = item.benchmark;
      div.appendChild(h2);
      root.appendChild(div);
    });

}

display()

// "benchmark": "Sprint-400mt",
// "note": null,
// "basic_score": "90sec",
// "advanced_score": "80sec",
// "expert_score": "65sec",
// "elite_score": "<60sec",
// "phisical_ability":
