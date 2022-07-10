import {useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'






const Update=()=>{
  const today = new Date();
  const hours = today.getHours();
  let minutes = today.getMinutes(); 
  let seconds = today.getSeconds();
  let realTime= hours +':'+minutes+':'+seconds




    const [newData,setData] = useState([])
    const [newName,setName]=  useState(null)



 useEffect(()=>{
  fetch('/names')
  .then(elem=>elem.json())
  .then(data=>{
    setData(data)
  console.log(newData);})


 })
 
 


const handleClick =(e)=>{
e.preventDefault()
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
<div className='outDiv'>
{newData.map(elem=>{return(
  <CardGroup>
  <Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src="baby.jpg/100px180" />
  <Card.Body>
    <Card.Title>{elem.full_name}</Card.Title>
    <Card.Text>
      Update now the day of the kid
    </Card.Text>
    <Button variant="primary" id={elem.full_name} onClick={(test)=>{setName(test.target.innerText)}} >Update</Button>
  </Card.Body>
</Card>
</CardGroup>
)})}
   
 
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