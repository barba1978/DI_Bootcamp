import {useState} from 'react'



const Update=()=>{


    const [event,setEvent]=useState(null)
    const [value,setValue]=useState(null)
   

const handleClick =(e)=>{
e.preventDefault()
let full_name = document.getElementById('update_name').value
console.log(event.target.name);
fetch(`/addNew/${full_name}`,{
    method:'PUT',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({full_name:full_name,[event.target.name]:event.target.value })
})
.then(elem=>elem.json())
.then(data=>{
    console.log(data)
alert('The details has been update succesully!')})
.catch(err=>{console.log(err)
alert('something went wrong try again!')
})
setValue()
}
return(
<div>
<h2>Insert and update Baby's name and details</h2>
    <div className='topName'>
  <h4>Name :</h4><input type="text" value={value} name="name" id='update_name' /><br/>
    </div>

<div className='upDate' >
  <div className='napDiv center'>
  <h4>Sleeping Time</h4>
    I° Nap-start(time):<input type="text" value={value} onChange={(e)=>setEvent(e)} name="sleep_start" id='sleep_start' /><br/>
    <button onClick={handleClick}>Update</button><br/>
 
    I° Nap-end(time):<input type="text" onChange={(e)=>setEvent(e)} name="sleep_end" id='sleep_end' /><br/>
    <button onClick={handleClick}>Update</button> <br/>
 
    II° Nap-start(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_sleep_start" id='second_sleep_start' /> <br/>
    <button onClick={handleClick}>Update</button><br/>
 
    II° Nap-end(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_sleep_end" id='second_sleep_end' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

  </div>
  <div className='eatDiv center'>
  <h4>Eating Time</h4>
    I° Bottle-Feeding(time):<input type="text" onChange={(e)=>setEvent(e)} name="eat_time" id='eat_time' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    I° Bottle-Feeding(ml):<input type="text" onChange={(e)=>setEvent(e)} name="eat_quantity" id='eat_quantity' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Bottle-Feeding(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_eat_time" id='second_eat_time' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Bottle-Feeding(ml):<input type="text" onChange={(e)=>setEvent(e)} name="second_eat_quantity" id='second_eat_quantity' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

   
  </div>
  <div className='diapDiv center'>
  <h4>Changing Time</h4>
    I° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="change" id='change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_change" id='second_change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="third_change" id='third_change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>


    Special Notes : <input type="text" onChange={(e)=>setEvent(e)} name="note" id='note' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>
  </div>

  
</div>
</div>


)}

export default Update