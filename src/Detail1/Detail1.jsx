import React from 'react';
import "./Detail1.css";
import Image1 from "../image/img-grid-1.jpg";
import { Button, Container, Row, Col } from 'react-bootstrap';

function Detail1 (){
    return(
        <div className='Detail1'>
            <Container>
                <Row>
                    <Col>
                    <div>
                        <img src={Image1} alt='logo' id='imgprop'/>
                    </div>
                    </Col>
                    <Col>
                     <div>
                        <h2>We Help You Make Modern Interior Design</h2>
                        <h6 className='Detaillab'>we believe that modern interior design is about more than just aesthetics—it's about creating spaces that elevate your everyday life. Founded in [Year], we have been passionate about designing contemporary, functional, and comfortable interiors that reflect the unique needs and personalities of our clients.</h6>
                     </div>
                     <Container>
                        <Row>
                            <Col className='Detaillab1'>We curate modern, high-quality furniture that fits your style and functional needs. Choose from a wide variety of designs tailored to your space.</Col>
                            <Col className='Detaillab1'>Make the most of your space with a thoughtful layout that enhances flow, maximizes storage, and creates a harmonious living or working environment.</Col>
                        </Row>
                        <Row>
                            <Col className='Detaillab1'>Work with our team remotely, wherever you are! We offer virtual consultations and design services to bring your space to life.</Col>
                            <Col className='Detaillab1'>Need help bringing your vision to life? Our experienced designers will guide you through every step of the process, from concept to completion.</Col>
                        </Row>
                     </Container>
                     <Button variant="outline-primary">Explore</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Detail1;