
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

Name:<input type='text' onChange={(e)=>{setName(e.target.value)}}/>
<button onClick={handleClick}> Search </button>
{
    data.map(elem=>{
        return(
            <div>
            <h3> Name: {elem.full_name}</h3>
            <h3> First Nap: {elem.sleep_start}</h3>
            <h3> Second Nap: {elem.sleep_end}</h3>
            </div>
        )
    })
}

</div>)   
}

export default Read