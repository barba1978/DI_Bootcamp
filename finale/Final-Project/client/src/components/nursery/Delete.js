import React,{useState} from 'react'
import Button from 'react-bootstrap/Button'


const Delete =()=>{
const [full_name,setName]=useState('')

const delData=(e)=>{
    e.preventDefault()
    fetch(`/addNew/${full_name}`,{
        method:'DELETE',
      })
      .then(res=> res.json())
      .then(data => {console.log(data);
      })
      .catch(err=>{
        console.log(err);
      })


}

return(
<div>
<form onSubmit={delData}>
<label for="delete">Name: </label>
<input type='text' id='delete' placeholder='name to delete ...' onChange={(e)=>setName(e.target.value)}  />
<input name='Delete' type='submit' />
</form>

</div>
)}

export default Delete 