let color_col = 3;
let color_row = 8;
let color_count = color_col * color_row;

let main_col = 60;
let main_row = 40;
let main_count = main_col * main_row;
let getcolor= null

let sidebar = document.querySelector('#sidebar');
let main = document.querySelector('#main');
let clear = document.getElementById("clear")


for (let i = 0; i < color_count; i++) {
  let div = document.createElement('div');
  div.style.backgroundColor = generateRandomColor();
  sidebar.appendChild(div)
}

for (var i = 0; i < main_count; i++) {
  let div = document.createElement('div');
  main.appendChild(div)
}

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
// console.log(generateRandomColor())


sidebar.addEventListener("click",getColor)

function getColor(e){
  getcolor = e.target.style.backgroundColor

}
console.log(getcolor)

main.addEventListener("mouseover",drawColor)

function drawColor(e){

  e.target.style.backgroundColor=getcolor


}

clear.addEventListener("click",clearAll)

function clearAll(){
  main.style.backgroundColor="darkgrey"


}






