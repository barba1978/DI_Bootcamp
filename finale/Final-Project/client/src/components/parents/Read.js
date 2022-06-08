
import {useState} from 'react'

const Read=()=>{

const [full_name,setName]=useState('')
const [data,setData]=useState([])


const handleClick=(e)=>{
    e.preventDefault()
fetch(`/parents/search?q=${full_name}`)
.then(elem=>elem.json())
.then(data=>{
    console.log(data)
    setData(data)})
.catch(err=>{console.log(err)})

}

 return(
     <div>
<div className='top'>
<h2>Name: </h2> <input type='text' onChange={(e)=>{setName(e.target.value)}}/>
<button onClick={handleClick}> Find out! </button>
</div>
{
    data.map(elem=>{
        return(
            <div className='outside'>
            <div className='read'>
            <h3> Name: {elem.full_name}</h3>
            <h3> First Nap(start): {elem.sleep_start}</h3>
            <h3> First Nap(end): {elem.sleep_end}</h3>
            <h3> Second Nap(start): {elem.second_sleep_start}</h3>
            <h3> Second Nap(end): {elem.second_sleep_end}</h3>
            <h3> First Meal(time): {elem.eat_time}</h3>
            <h3> First Meal(ml): {elem.eat_quantity}</h3>
            <h3> Second Meal(time): {elem.second_eat_time}</h3>
            <h3> Second Meal(ml): {elem.second_eat_quantity}</h3>
            <h3> First Change: {elem.change}</h3>
            <h3> Second Change: {elem.second_change}</h3>
            <h3> Third Change: {elem.third_change}</h3>
            <h3> Note: {elem.note}</h3>
            </div>
            </div>
        )
    })
}

</div>)   
}

export default Read

