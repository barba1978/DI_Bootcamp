import React  from 'react'
import Add from './Add'
import Delete from './Delete'
import Update from './Update'
import Table from 'react-bootstrap/Table'
import TableDetails from './TableDetails'
import {useState} from 'react'
import  './Nursery.css'



const Nursery=()=>{

    const [newData,setData] = useState([])

const handleClick=(e)=>{
    e.preventDefault()
fetch('/details')
.then(elem=>elem.json())
.then(data=>{setData(data)})


}

const handleClick1=()=>{
    setData([])
}

return(
    <div>
<Add/> <br/>
<Update /> <br/>

<button className='footer' onClick={handleClick}>Display all!</button>
<button className='footer' onClick={handleClick1}>Close all!</button>
{newData.map(elem=>{
return(
<>
    <Table striped="columns" >
  <thead>
    <tr>
      <th>Date</th>
      <th>Full Name</th>
      <th>I° Nap-Start</th>
      <th>I° Nap-End</th>
      <th>II° Nap-Start</th>
      <th>II° Nap-End</th>
      <th>I° Bottle-Feed(time)</th>
      <th>I° Bottle-Feed(ml)</th>
      <th>II° Bottle-Feed(time)</th>
      <th>II° Bottle-Feed(ml)</th>
      <th>I° Diaper-Change</th>  
      <th>II° Diaper-Change</th> 
      <th>III° Diaper-Change</th> 
      <th>Notes</th>       
      </tr>
  </thead>
<TableDetails 
date={elem.today_date}
name={elem.full_name}
sleep1={elem.sleep_start}
sleep1a={elem.sleep_end}
sleep2={elem.second_sleep_start}
sleep2a={elem.second_sleep_end}
first_bottle_time={elem.eat_time}
first_bottle_quantity={elem.eat_quantity}
second_bottle_time={elem.second_eat_time}
second_bottle_quantity={elem.second_eat_quantity}
first_change={elem.change}
second_change={elem.second_change}
third_change={elem.third_change}
notes={elem.note}
/>
</Table>
<Delete/>
</>
)})}
    </div>
)}

export default Nursery



//<h3>Delete data to database </h3>
//<Delete /> <br/>

//<TableDetails />