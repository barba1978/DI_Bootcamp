import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'




function NavTop(){
return(
    <div>
    <Nav defaultActiveKey="/" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="/">Nursery</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="/parents">Parents</Nav.Link>
  </Nav.Item>
</Nav>

    </div>
    )
}

export default NavTop


/* <Link to='/' >Nursery</Link>
<Link to='/parents' >Parents</Link> */