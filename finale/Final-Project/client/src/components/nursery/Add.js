import React from 'react'


const Add =()=>{

const add=(e)=>{
    e.preventDefault()
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; 
        let dd = today.getDate();
        
        
        let full_name = document.getElementById('name').value
        let today_date= yyyy+'-'+mm+'-'+dd
        
        fetch('http://localhost:5000/addNew',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({full_name,today_date})
        })
        .then(elem=>elem.json())
        .then(data=>{
            console.log(data)
        alert('The details has been uploads succesully!')})
        .catch(err=>{console.log(err)})}
        
return(
<div>
<h1> Html File, add new line in the database  </h1>
    Name: <input type="text"  name="name" id='name' value='' /> 
    <button onClick={add()}>Insert</button>

</div>
)}

export default Add