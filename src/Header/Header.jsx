import React from 'react'
import './Header.css';
import { Nav, Navbar, Container, Row, Col, Button } from 'react-bootstrap';
import Couch from "../image/couch.png";

function Header(){
    return(
        <div className='Nav1'>
           <div>
            <Navbar className='Nav'>
                <Nav className='Navbar'>
                  <Nav.Link>Furni</Nav.Link>
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">shop</Nav.Link>
                  <Nav.Link href="#pricing">About Us</Nav.Link>
                  <Nav.Link href="#pricing">services</Nav.Link>
                  <Nav.Link href="#pricing">Blog</Nav.Link>
                  <Nav.Link href="#pricing">Contact us</Nav.Link>
                  <Nav.Link hreg="login"> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="23" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg></Nav.Link>
                  <Nav.Link href="cart"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Nav.Link>
                </Nav>
            </Navbar>
           </div>
           <div className='content'>
                <Container>
                  <Row>
                     <Col>
                        <div>
                            <div className='label'>
                                <h3>Modern Interior Design Studio</h3>
                            </div>
                            <div className='label1'>
                               <h5>“Design creates culture. Culture shapes values. Values determine the future“</h5>
                            </div>
                            <div className='Button'>
                                <Row>
                                    <Col><Button variant="outline-primary">Shop now</Button></Col>
                                    <Col><Button variant="outline-primary">Explore</Button></Col>
                                </Row>
                            </div>
                        </div>
                     </Col>
                     <Col><img src={Couch} alt='logo' id='logo'/></Col>
                 </Row>
              </Container>
           </div>
        </div>
    )
}

export default Header;