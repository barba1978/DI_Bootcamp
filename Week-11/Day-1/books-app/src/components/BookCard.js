import './Header.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'




const BookCard=(props)=>{

return(

<CardGroup className='card'>
<Card style={{ width: '200px',height:'350px' }}>
  <Card.Img variant="top" src={props.img} className='img' />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    <p> {props.author} </p>
    <p> {props.pub} </p>
    <p> {props.year} </p>
    </Card.Text>
  </Card.Body>
</Card>
<Card>

</Card>
</CardGroup>




)}

export default BookCard
