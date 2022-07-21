import React from 'react'
import {useState} from 'react'


const Test=(props)=>{

//const [test , setTest]= useState([])

const handleClick=()=>{
const query=document.getElementById('search').value
console.log(query);
fetch(`http://localhost:5001/search?search=${query}`)
.then(res=>res.json())
.then(data=>{console.log(data)})
.catch(err=>{console.log(err)})

}



return(
<div>
<input id='search' />
<button onClick={handleClick}> Button! </button>



</div>
)}

export default Test