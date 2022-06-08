import React from 'react'
import {useState} from 'react';

const Add =()=>{

const [full_name,setName]=useState(null)
const [value,setValue]=useState(null)


const today = new Date();
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; 
let dd = today.getDate();

let today_date= yyyy+'-'+mm+'-'+dd



const addData=(e)=>{
    e.preventDefault()
    fetch('/addNew',{
        method:'POST',
        headers:{
        'Content-type':'application/json'
        },
    body:JSON.stringify({full_name,today_date})})
    .then(elem=>elem.json())
    .then(data=>{console.log(data);
    alert('The details has been uploads succesully!')})
    .catch(err=>{console.log(err)})
    setValue('')

}
       
   

return(
<>
<h2>Create a new day </h2>
<div className='addDetails'>
<h4>Name :</h4><input type='text'  value={value} onChange={(e)=>setName(e.target.value)} name='' />
<button onClick={addData}>Create</button>
</div>
</>
)
}

export default Add

