import {useState} from 'react'
import Button from 'react-bootstrap/Button'






const Update=()=>{
  const today = new Date();
  const hours = today.getHours();
  let minutes = today.getMinutes(); 
  let seconds = today.getSeconds();
  let realTime= hours +':'+minutes+':'+seconds




    const [newData,setData] = useState([])
    const [newName,setName]=  useState(null)


const getNames=(e)=>{
      e.preventDefault()
      console.log('its working');
  fetch('/names')
  .then(elem=>elem.json())
  .then(data=>{
    setData(data)
  console.log(newData);})
  
  
  
  }

const handleClick =(e)=>{
e.preventDefault()
//let full_name = document.getElementById('update_name').value
console.log(e.target.name);
fetch(`/addNew/${newName }`,{
    method:'PUT',
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({full_name:newName,[e.target.name]:realTime })
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
<h4>Click on the circle and get all the names you added today </h4>
<div className='outDiv' onClick={getNames}>
<div className='newDiv'><h6>Click here=></h6></div><br/>
{newData.map(elem=>{return(<button className='divNames' id={elem.full_name} onClick={(test)=>{setName(test.target.innerText)}}><p className='parNames'>{elem.full_name}</p></button>)})}
 
 </div>
 

<div className='upDate' >
  <div className='napDiv center'>
  <h4>Sleeping Time</h4>
  <h5>First Nap:</h5>
  <Button variant="info" onClick={handleClick} name="sleep_start"> Start  </Button>{' '}
  <Button variant="info" onClick={handleClick} name="sleep_end"> End </Button><br/>
  <h5>Second Nap:</h5>
  <Button variant="info" onClick={handleClick} name="second_sleep_start"> Start </Button>{' '}
  <Button variant="info" onClick={handleClick} name="second_sleep_end"> End </Button><br/>
  <h5>Third Nap:</h5>
  <Button variant="info" onClick={handleClick} name="Third_sleep_start"> Start </Button>{' '}
  <Button variant="info" onClick={handleClick} name="Third_sleep_end"> End </Button><br/>
  </div>


  <div className='eatDiv center'>
  <h4>Eating Time</h4>
  <h5>First Feed:</h5>
  <Button variant="info" onClick={handleClick} name="eat_time"> Feeds </Button>{' '}
  <h5>Second Feed:</h5>
  <Button variant="info" onClick={handleClick} name="second_eat_time"> Feeds </Button>{' '}
  <h5>Third Feed:</h5>
  <Button variant="info" onClick={handleClick} name="third_eat_time"> Feeds </Button>{' '}
  </div>
  <div className='diapDiv center'>
  <h4>Diapers Time</h4>
  <h5>First Change:</h5>
  <Button variant="info" onClick={handleClick} name="change"> Change </Button>
  <h5>Second Change:</h5>
  <Button variant="info" onClick={handleClick} name="second_change"> Change </Button>
  <h5>Third Change:</h5>
  <Button variant="info" onClick={handleClick} name="third_change"> Change </Button>
  <h5>Fourth Change:</h5>
  <Button variant="info" onClick={handleClick} name="fourth_change"> Change </Button>


  </div>

  
</div>
</div>


)}

export default Update



//Special Notes : <input type="text" onChange={(e)=>setEvent(e)} name="note" id='note' /> <br/>
//<button onClick={handleClick}>Update</button> <br/>