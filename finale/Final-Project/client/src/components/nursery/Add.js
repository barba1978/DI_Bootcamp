import React from 'react'
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'


const Add =()=>{

const [full_name,setName]=useState(null)


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
   


}
       
   

return(
<>

<div className='addDetails'>
<h4>Write here the kid's name</h4><br/>

<input type='text' onChange={(e)=>setName(e.target.value)} name='' />
    <OverlayTrigger
     overlay={
        <Tooltip>
        Insert the kid's name and create a new day
        </Tooltip>}>
      <Button variant="primary" onClick={addData} >Create !</Button>
    </OverlayTrigger>
</div>
</>
)
}

export default Add

