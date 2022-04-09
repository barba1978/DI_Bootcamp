     const robots = [
     {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


    let container=document.getElementById("container")
    let button =document.createElement("button")
    let input=document.createElement("input")

// navbar element 


function createNav(){
  let nav=document.getElementById("nav")
  let submit=document.createTextNode("Submit")
  let text = document.createTextNode("ROBOFRIEND")
  let h1 = document.createElement("h1")
  button.appendChild(submit)
  nav.appendChild(h1)
  nav.appendChild(input)
  nav.appendChild(button)





}
createNav()



// robots card element 

function createCard(){

  for (let x of robots){
    let div=document.createElement("div")
    let pic=document.createElement("img")
    let h2=document.createElement("h2")
    let par =document.createElement("p")
    pic.src=x.image
    let name=document.createTextNode(x.name)

    let email=document.createTextNode(x.email)
    div.classList.add("robot")
    div.appendChild(pic)
    h2.appendChild(name)
    par.appendChild(email)
    div.appendChild(h2)
    div.appendChild(par)

    container.appendChild(div)


  }}

  createCard()


  // searching function 


  button.addEventListener("click", search)

  function search(){
    let search=input.value
    
    

    robots.filter(function(element){
      let name=element.name
      if (name.includes(search)===true){
        console.log("yes")
      } 
    })
  }




  







