import React from 'react'
import {useState} from 'react';

const Add =()=>{

const [full_name,setName]=useState(null)
//const [today_date,setDate]=useState(null)
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
    .catch(err=>{console.log(err)})}
       
   

return(
<div className='addDetails'>
<h3>Create a new day  </h3>
Name:<input type='text' placeholder='Robert Kiddo' onChange={(e)=>setName(e.target.value)} name='' />
<button onClick={addData}>Create</button>

</div>
)
}

export default Add


// const Add =()=>{
//     const [full_name, setName] = useState('');
//     const [today_date, setDate] = useState();
    
//      add =(e)=>{
//         e.preventDefault()
//             const today = new Date();
//             const yyyy = today.getFullYear();
//             let mm = today.getMonth() + 1; 
//             let dd = today.getDate();
//             let date= yyyy+'-'+mm+'-'+dd
            
//             fetch('/addNew',{
//                 method:'POST',
//                 headers:{
//                     'Content-type':'application/json'
//                 },
//                 body:JSON.stringify({full_name,today_date})
//             })
//             .then(elem=>elem.json())
//             .then(data=>{
//                 setProducts(data)
//                 setDate(date)
//             alert('The details has been uploads succesully!')})
//             .catch(err=>{console.log(err)})}
       
    