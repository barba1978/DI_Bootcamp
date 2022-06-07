import React,{useState} from 'react'


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
Name:<input type='text' placeholder='Robert Kiddo' onChange={(e)=>setName(e.target.value)}  />
<input type='submit' value='Submit' />
</form>

</div>
)}

export default Delete 