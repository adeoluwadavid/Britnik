import React from 'react'
import {Navbar, Nav,Image} from 'react-bootstrap'
import '../css/header.css'
function Header(){
    return(
        <div>
        <Navbar id="navbar_color" expand="lg">
            <Navbar.Brand id="nav_item_color" href="#home">Britnik <br></br> Engineering</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-around" style={{width:"100%"}}>
                    <Nav.Link href="#home" id="nav_item_color">WHO WE ARE</Nav.Link>
                    <Nav.Link href="#link" id="nav_item_color">WHAT WE DO</Nav.Link>
                    <Nav.Link href="#link" id="nav_item_color">CAREERS</Nav.Link>
                    <Nav.Link href="#link" id="nav_item_color">CONTACT</Nav.Link>
                    <Nav.Link  href="#link"><Image src={require("../images/fb.png")} id="fb" roundedCircle /></Nav.Link>  
                </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default Header