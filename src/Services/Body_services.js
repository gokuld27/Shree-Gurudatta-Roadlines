import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import im1 from '../Assets/Images/car7.jpg';
import im2 from '../Assets/Images/car4.jpg'
import im3 from '../Assets/Images/card3.jpg'
import '../Testimonials/Testimonials.css'


function Body_services() {
    return (
        <Container className="my-5 py-5">
            <Row>
            <>
            <Col lg={6} sm={12}>
                       <Card >
                         <Col>
                            <div className="d-flex flex-row" style={{maxHeight: "100%",maxWidth: "100%",objectFit: "contain"}}>
                                <img src={im1} alt="Transporters and Contracters" className=' mx-auto mt-3 mb-2' style={{height:"300px",width:"400px"}}/>
                            </div>
                            
                         </Col>
                       </Card>                                   
            </Col> 
                <Col lg={6} sm={12}>
                    
                    <p className="h1" style={{paddingLeft: "45px" }}>Package Moving</p>
                    <p style={{ color: "#A9A9A9", fontSize: "medium", fontWeight: "500", padding: "15px 15px 5px 45px", textAlign: "justify"}}>
                    Based on your business needs, we provide you with the right solutions to meet your transportation requirements. 
                    Our commitment to excellence and continuous improvement has helped us establish ourselves as a leading player 
                    in the industry.</p>

                </Col>
            </>
            <div><br/></div>
            <>
                <Col lg={6} sm={12}>
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im2} alt="Transporters and Contracters" className=' mx-auto mt-3 mb-2' style={{height:"300px",width:"400px"}}/>
                            </div>
                            
                         </Col>
                       </Card>                                   
            </Col> 
                <Col lg={6} sm={12}>
                    
                    <p className="h1" style={{paddingLeft: "45px" }}>Frieght Forwarding</p>
                    <p style={{ color: "#A9A9A9", fontSize: "medium", fontWeight: "500", padding: "15px 15px 5px 45px", textAlign: "justify"}}>
                    Based on your business needs, we provide you with the right solutions to meet your transportation requirements. 
                    Our commitment to excellence and continuous improvement has helped us establish ourselves as a leading player 
                    in the industry.</p>

                </Col>
            </>
            <div><br/></div>
            <>
                <Col lg={6} sm={12}>
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im3} alt="Transporters and Contracters" className=' mx-auto mt-3 mb-2' style={{height:"300px",width:"400px"}}/>
                            </div>
                            
                         </Col>
                       </Card>                                   
            </Col> 
                <Col lg={6} sm={12}>
                    
                    <p className="h1" style={{paddingLeft: "45px" }}>Transport Services</p>
                    <p style={{ color: "#A9A9A9", fontSize: "medium", fontWeight: "500", padding: "15px 15px 5px 45px", textAlign: "justify"}}>
                    Based on your business needs, we provide you with the right solutions to meet your transportation requirements. 
                    Our commitment to excellence and continuous improvement has helped us establish ourselves as a leading player 
                    in the industry.</p>

                </Col> 
                
                </>
            </Row>            
        </Container>
    )
}

export default Body_services;


