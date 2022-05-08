import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import img from '../Assets/Images/carIII.jpg'
import Form from 'react-bootstrap/Form'

function Forms() {
    return (
        <Container className="py-5 my-5" style={{fontFamily: "Nunito Sans, serif"}}>
            <Row className="justify-content-space-around align-items-center">
                <Col md={7} className = "d-flex flex-column">
                  <div className = "my-auto">  
                     <img className="img-fluid" src={img} style={{paddingRight:"50px"}} alt="Image5"/>
                   </div>  
                </Col>

                <Col md={5}>
                    <div className="my-auto"> 
                      <p style={{color:"#ff5f77",fontWeight:"1rem"}}>CONTACT US</p>
                      <p className="h1">Get In Touch !</p>
                      <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Your Name</label>
                      </Form.Floating>

                      <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Email</label>
                      </Form.Floating>

                      <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Phone</label>
                      </Form.Floating>

                      <Form.Floating className="mb-3">
                        <Form.Control
                        id="floatingInputCustom"
                        type="Name"
                        placeholder="Name"
                        />
                        <label htmlFor="floatingInputCustom">Quote</label>
                      </Form.Floating>

                      <Button variant="primary" style={{backgroundColor:"#10ACF4",borderColor:"#10ACF4",marginRight :"10px",fontSize:"larger",fontWeight:"400",padding:"5"}}>Send Message</Button>  
                    </div> 
                </Col>
            </Row>
        </Container>
    )
}

export default Forms