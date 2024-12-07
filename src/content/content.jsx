import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './content.css';
import product1 from "../image/product-1.png";
import product2 from "../image/product-2.png";
import product3 from "../image/product-3.png";

function Content() {
    return(
         <div className='option'>
            <Container>
                <Row>
                    <Col>
                    <h3>Crafted with excellent material.</h3>
                    <p>Beyond any doubt, a room without furniture wears a desolate appearance.</p>
                    <Button variant="outline-primary">Explore</Button>
                    </Col>
                    <Col>
                    <div>
                        <img src={ product1 } alt='logo' id='logo1' />
                        <label id='clabel' >Nordic chair</label>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <img src={ product2 } alt='logo' id='logo1'  />
                        <label id='clabel'>Aero chair</label>
                    </div>
                    </Col>
                    <Col>
                    <div>
                        <img src={ product3 } alt='logo' id='logo1'  />
                        <label id='clabel' >Ergonomic chair</label>
                    </div>
                    </Col>
                </Row>
            </Container>
         </div>
    )
}

export default Content;