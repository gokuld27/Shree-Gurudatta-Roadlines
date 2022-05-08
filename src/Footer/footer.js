import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {TiPhoneOutline} from 'react-icons/ti';
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {FaAddressCard} from 'react-icons/fa'
import Image from "../Assets/Images/footer-bg.jpg"


function FooterSection()
{
    return(
        <div style={{backgroundImage: 'url(' + Image + ')' }}>
            <Container fluid className="footermain" >
               <Row style={{marginLeft: "1rem"}}>
                   <Col md={4} sm={12} className = "py-5 px-3" style={{color:"#FFF",lineHeight:"25px"}}>
                     <p className="h4 my-3">About Us</p>
                     <p style={{textAlign: "justify"}}>Sree Gurudatta Roadlines is a private transportation company incorporated on 16 July, 2020 at Hyderabad and Chennai. 
                     Hyderabad Branch is under the control of Mr. XXXXXXXXXXX and Chennai Branch is managed by P. Sathish Nagaraja.
                     </p>
                   </Col>

                   <Col md={2} sm={12} className = "py-5" style={{color:"#FFF",lineHeight:"15px"}}>
                     <p className="h4 my-3">Important Links</p>
                     <p>Home</p>
                     <p>About Us</p>
                     <p>Services</p>
                     <p>Pricing</p>
                     <p>Contact</p>
                   </Col>

                   <Col md={2} sm={12} className = "py-5" style={{color:"#FFF",lineHeight:"15px"}}>
                     <p className="h4 my-3">Services</p>
                     <p>Frieght Forwarding</p>
                     <p>Transport Services</p>
                     <p>Package Moving</p>
                   </Col>

                   <Col md={4} sm={12} className = "py-5" style={{color:"#FFF",lineHeight:"25px"}}>
                     <p className="h4 my-3">Contact Us</p>
                     <p><TiPhoneOutline/>&nbsp; +91 44 23632150/51</p>
                     <p><MdOutlineMarkEmailRead/>&nbsp; sreegurudattaroadlines@gmail.com</p>
                     <FaAddressCard/>&nbsp; No.24, Saradha Nagar, Virungambakkam, Chennai-600092<br/>No 11 Muthaih Street, Hyderabad - 456 789
                   </Col>
               </Row>
            </Container>
        </div>
    )
}

export default FooterSection