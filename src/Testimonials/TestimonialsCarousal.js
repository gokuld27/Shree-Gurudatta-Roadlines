import React from 'react'
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap'
import im1 from '../Assets/Images/Clients/MSNLabs.png'
import im2 from '../Assets/Images/Clients/MSNLabs.png'
import im3 from '../Assets/Images/Clients/MSNLabs.png'
import im4 from '../Assets/Images/Clients/MSNLabs.png'
import './Testimonials.css'


function SectionHP9() {
    return (
        <Container className="my-5 py-5">
            <Row>
            <Col lg={6} sm={12}>
                    <Carousel className="shadow" fade>
                    <Carousel.Item interval={1000}>  
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im1} alt="client1" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                            </div>
                            <h4 style={{color:"#272343",textAlign:'center'}}>Lee Pharma</h4>
                            <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> Lee Pharma </p>
                            <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}} > 
                                <div className="px-4 py-4"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. 
                                </div>
                            </div>
                         </Col>
                       </Card> 
                    </Carousel.Item>     
  
                    <Carousel.Item interval={1000}>
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im2} alt="client2" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                            </div>
                            <h4 style={{color:"#272343",textAlign:'center'}}>Edward Bold</h4>
                            <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> CEO & Founder </p>
                            <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}} > 
                                <div className="px-4 py-4"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. 
                                </div>
                            </div>
                         </Col>
                       </Card>
                    </Carousel.Item>
                    
                    <Carousel.Item interval={1000}>  
                            <Card >
                                <Col>
                                    <div className="d-flex flex-row">
                                        <img src={im3} alt="client1" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                                    </div>
                                    <h4 style={{color:"#272343",textAlign:'center'}}>Mahindra John</h4>
                                    <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> Agent Manager </p>
                                    <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}}> 
                                    <div className="px-4 py-4"> 
                                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. 
                                    </div>   
                                    </div>
                                </Col>
                            </Card> 
                    </Carousel.Item>          

                    <Carousel.Item interval={1000}>
                            <Card >
                                <Col>
                                    <div className="d-flex flex-row">
                                        <img src={im4} alt="client2" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                                    </div>
                                    <h4 style={{color:"#272343",textAlign:'center'}}>Lee Munro</h4>
                                    <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> Under Writer </p>
                                    <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}}> 
                                      <div className="px-4 py-4"> 
                                         Lorem ipsum dolor sit amet, consectetur adipiscing 
                                         elit, sed do eiusmod tempor incididunt ut labore et
                                         dolore magna aliqua. 
                                      </div>       
                                    </div>
                                </Col>
                            </Card>   
                    </Carousel.Item>
                    
                    <Carousel.Item interval={1000}>   
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im3} alt="client1" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                            </div>
                            <h4 style={{color:"#272343",textAlign:'center'}}>Mortein R</h4>
                            <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> Product Manager </p>
                            <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}} > 
                                <div className="px-4 py-4"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. 
                                </div>
                             </div>
                         </Col>
                       </Card>   
                    </Carousel.Item>   

                    <Carousel.Item interval={1000}>
                       <Card >
                         <Col>
                            <div className="d-flex flex-row">
                                <img src={im1} alt="client2" className='rounded-circle mx-auto mt-3 mb-2' style={{height:"60px",width:"60px"}}/>
                            </div>
                            <h4 style={{color:"#272343",textAlign:'center'}}>Meg Lenning</h4>
                            <p style={{fontSize:"15px",color:"#A9A9A9",textAlign:'center'}}> Product Manager </p>
                            <div style={{fontSize:"18px",color:"#A9A9A9",textAlign:'center'}} >
                                <div className="px-4  py-4"> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua. 
                                </div>
                            </div>
                         </Col>
                       </Card>                   
                    </Carousel.Item>
                  </Carousel>                
                </Col>
                <Col lg={6} sm={12}>
                    <p style={{ color: "#be6666", fontWeight: "600" ,paddingLeft: "45px" }}>TESTIMONIALS</p>
                    <p className="h1" style={{paddingLeft: "45px" }}>What our Clients say</p>
                    <p style={{ color: "#A9A9A9", fontSize: "medium", fontWeight: "500", padding: "15px 15px 5px 45px", textAlign: "justify"}}>
                    Based on your business needs, we provide you with the right solutions to meet your transportation requirements. 
                    Our commitment to excellence and continuous improvement has helped us establish ourselves as a leading player 
                    in the industry.</p>

                </Col>

                
            </Row>            
        </Container>
    )
}

export default SectionHP9


