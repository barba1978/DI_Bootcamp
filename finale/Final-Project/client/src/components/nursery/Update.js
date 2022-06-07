import {useState} from 'react'
import './Update.css';


const Update=()=>{


    const [event,setEvent]=useState(null)

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

}
return(
<div>
<h3>Insert and update Baby's name and details</h3>
    <div className='topName'>
    Name: <input type="text"  name="name" id='update_name' /><br/>
    </div>

<div className='upDate' >
  <div className='napDiv center'>
    I° Nap-start(time):<input type="text" onChange={(e)=>setEvent(e)} name="sleep_start" id='sleep_start' /><br/>
    <button onClick={handleClick}>Update</button><br/>
 
    I° Nap-end(time):<input type="text" onChange={(e)=>setEvent(e)} name="sleep_end" id='sleep_end' /><br/>
    <button onClick={handleClick}>Update</button> <br/>
 
    II° Nap-start(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_sleep_start" id='second_sleep_start' /> <br/>
    <button onClick={handleClick}>Update</button><br/>
 
    II° Nap-end(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_sleep_end" id='second_sleep_end' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Nap-start(time):<input type="text" onChange={(e)=>setEvent(e)} name="third_sleep_start" id='third_sleep_start' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Nap-end(time):<input type="text" onChange={(e)=>setEvent(e)} name="third_sleep_end" id='third_sleep_end' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>
  </div>
  <div className='eatDiv center'>
    I° Bottle-Feeding(time):<input type="text" onChange={(e)=>setEvent(e)} name="eat_time" id='eat_time' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    I° Bottle-Feeding(ml):<input type="text" onChange={(e)=>setEvent(e)} name="eat_quantity" id='eat_quantity' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Bottle-Feeding(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_eat_time" id='second_eat_time' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Bottle-Feeding(ml):<input type="text" onChange={(e)=>setEvent(e)} name="second_eat_quantity" id='second_eat_quantity' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Bottle-Feeding(time):<input type="text" onChange={(e)=>setEvent(e)} name="third_eat_time" id='third_eat_time' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Bottle-Feeding(ml):<input type="text" onChange={(e)=>setEvent(e)} name="third_eat_quantity" id='third_eat_quantity' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>
  </div>
  <div className='diapDiv center'>
    I° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="change" id='change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    II° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="second_change" id='second_change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    III° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="third_change" id='third_change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    IV° Diaper-Change(time):<input type="text" onChange={(e)=>setEvent(e)} name="fourth_change" id='fourth_change' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>

    Special Notes : <input type="text" onChange={(e)=>setEvent(e)} name="note" id='note' /> <br/>
    <button onClick={handleClick}>Update</button> <br/>
  </div>

  
</div>
</div>


)}

export default Update