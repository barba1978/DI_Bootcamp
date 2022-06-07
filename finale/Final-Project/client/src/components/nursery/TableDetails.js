import React from 'react'
import Table from 'react-bootstrap/Table'

function TableDetails(props){
return(
<Table striped="columns" >
  <thead>
    <tr>
      <th>Date</th>
      <th>Full Name</th>
      <th>I° Nap-Start</th>
      <th>I° Nap-End</th>
      <th>II° Nap-Start</th>
      <th>II° Nap-End</th>
      <th>III° Nap-Start</th>
      <th>III° Nap-End</th>
      <th>I° Bottle-Feed(time)</th>
      <th>I° Bottle-Feed(ml)</th>
      <th>II° Bottle-Feed(time)</th>
      <th>II° Bottle-Feed(ml)</th>
      <th>III° Bottle-Feed(time)</th>
      <th>III° Bottle-Feed(ml)</th>
      <th>I° Diaper-Change</th>  
      <th>II° Diaper-Change</th> 
      <th>III° Diaper-Change</th> 
      <th>IV° Diaper-Change</th>
      <th>Notes</th>       
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.date}</td>
      <td>{props.name}</td>
      <td>{props.sleep1}</td>
      <td>{props.sleep1a}</td>
      <td>{props.sleep2}</td>
      <td>{props.sleep2a}</td>
      <td>third sleep</td>
      <td>third sleep</td>
      <td>first bottle</td>
      <td>first bottle</td>
      <td>second bottle</td>
      <td>second bottle</td>
      <td>third bottle</td>
      <td>third bottle</td>
      <td>first change</td>
      <td>second change</td>
      <td>third change</td>
      <td>fourth change</td>
      <td>Notes</td>
      
     

    </tr>

  </tbody>
</Table>
    
)    
}


export default TableDetails