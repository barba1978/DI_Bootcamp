import React  from 'react'
import Add from './Add'


const Nursery=()=>{
return(
    <div>
<Add/>


    <h1> Html File, delete a line in the database  </h1>

    Name: <input type="text" placeholder='Andrea Barbieri' name="name" id='full_name' value=""/> 
    <button onClick="deleteD()" >Delete</button>


    <h1> Html File, update a line in database   </h1>
    

   Name: <input type="text"  name="name" id='update_name' value=""/>

   Nap start : <input type="text" onchange='mychange(this)' name="sleep_start" id='sleep_start' value=""/> 
   <button >Update</button>

   Nap end : <input type="text" onchange='mychange(this)' name="sleep_end" id='sleep_end' value=""/> 
   <button >Update</button>

   Second nap start : <input type="text" onchange='mychange(this)' name="second_sleep_start" id='second_sleep_start' value=""/> 
   <button >Update</button>

   Second nap end : <input type="text" onchange='mychange(this)' name="second_sleep_end" id='second_sleep_end' value=""/> 
   <button >Update</button>

    </div>
)}

export default Nursery