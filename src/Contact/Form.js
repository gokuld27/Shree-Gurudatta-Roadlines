import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import img from '../Assets/Images/carIII.jpg'

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
                      <p className="h2">Mr. P. Sathish Nagaraja</p>
                      <p className="h5">Managing Director, Chennai Branch</p>
                      <p className="h2">Contact Number: 1234567890</p>  
                    </div> 
                    
                </Col>
                <div><br/></div>
                <div style={{height: "550px"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.3000400108326!2d80.17114701464784!3d13.206469790702101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527d8a247cdd1b%3A0x216d233c53292d79!2sSree%20Gurudatta%20Roadlines!5e0!3m2!1sen!2sin!4v1645859050248!5m2!1sen!2sin"  
      height="450" 
      title='location' 
      style={{ border: "0", width: "100%", display: "flex", justifyContent: "center" }} 
      allowfullscreen="true" 
      loading="lazy"></iframe>
    </div>
            </Row>
        </Container>
    )
}

export default Forms